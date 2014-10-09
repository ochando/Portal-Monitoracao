package pm.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pm.models.Alert;
import pm.models.Server;

import java.lang.reflect.Array;
import java.util.Iterator;
import java.util.ArrayList;

/**
 * Created by dumorango on 25/09/14.
 */

@RepositoryRestResource(collectionResourceRel = "servers", path = "servers")
public interface ServerRepository extends PagingAndSortingRepository<Server, Long> {

    ArrayList<Alert> findServerDistinctByEnvironment(@Param("environment") String environment);

}
