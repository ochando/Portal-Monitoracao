package pm;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Logger;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Configuration
@EnableWebSecurity
@EnableJpaRepositories
@EnableJpaAuditing
@ComponentScan
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private DataSource dataSource;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(new PmUserDetailsService(dataSource));
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().anyRequest().hasRole("USER").and().formLogin().permitAll().and().logout().permitAll();
	}

	private static final class PmUserDetailsService implements UserDetailsService {

		private static final Logger log = Logger.getLogger(PmUserDetailsService.class.getName());

		private final DataSource dataSource;

		public PmUserDetailsService(DataSource dataSource) {
			super();
			this.dataSource = dataSource;
		}

		@Override
		public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
			log.info("Use name: " + username);
			JdbcTemplate template = new JdbcTemplate(dataSource);
			List<UserDetails> userDetails = template.query(new PmPreparedStatementCreator(username), new PmRowMapper());
			if (userDetails.isEmpty()) {
				throw new UsernameNotFoundException(username);
			}
			return userDetails.get(0);
		}

	}

	private static final class PmRowMapper implements RowMapper<UserDetails> {

		private static final List<GrantedAuthority> DEFAULT_AUTHORITY = new LinkedList<GrantedAuthority>() {
			private static final long serialVersionUID = 1L;

			{
				add(new SimpleGrantedAuthority("ROLE_USER"));
			}
		};

		@Override
		public UserDetails mapRow(ResultSet rs, int rowNum) throws SQLException {
			String username = rs.getString("username");
			String password = rs.getString("password");
			boolean enabled = rs.getInt("enabled") == 1;
			User user = new User(username, password, enabled, true, true, true, DEFAULT_AUTHORITY);
			return user;
		}

	}
	
	private static final class PmPreparedStatementCreator implements PreparedStatementCreator{

		private final static String SQL = "select username, password, enabled from users where username = ?";

		private final String username;
		
		public PmPreparedStatementCreator(String username) {
			super();
			this.username = username;
		}

		@Override
		public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
			PreparedStatement prepareStatement = con.prepareStatement(SQL);
			prepareStatement.setString(1, username);
			return prepareStatement;
		}
		
	}

}