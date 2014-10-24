package pm.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import pm.models.Environment;

/**
 * Created by dumorango on 06/10/14.
 */
@RepositoryRestResource(collectionResourceRel = "env", path = "env")
public interface EnvironmentRepository extends PagingAndSortingRepository<Environment, Long> {

}
