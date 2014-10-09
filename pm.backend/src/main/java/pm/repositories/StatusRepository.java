package pm.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pm.models.Status;

/**
 * Created by dumorango on 25/09/14.
 */@RepositoryRestResource(collectionResourceRel = "status", path = "status")
   public abstract interface StatusRepository extends PagingAndSortingRepository<Status, Long> { }

