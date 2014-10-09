package pm.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pm.models.Alert;

import java.util.List;

/**
 * Created by dumorango on 25/09/14.
 */
@RepositoryRestResource(collectionResourceRel = "alerts", path = "alerts")
   public abstract interface AlertRepository extends PagingAndSortingRepository<Alert, Long> {

}

