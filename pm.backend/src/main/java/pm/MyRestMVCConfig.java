package pm;

import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;

public class MyRestMVCConfig extends RepositoryRestMvcConfiguration {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		super.addInterceptors(registry);
	}

	
	
}
