package pm.models;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.hateoas.ResourceSupport;

/**
 * Created by dumorango on 26/09/14.
 */

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class AbstractEntity extends ResourceSupport {

	@CreatedDate
	private Date createdDate;

	@LastModifiedDate
	private Date lastModifiedDate = new Date();

	AbstractEntity() {
		if (getCreatedDate() == null)
			this.createdDate = new Date();
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}

	public Date getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(Date lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}
}
