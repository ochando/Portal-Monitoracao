package pm.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pm.models.Alert;
import pm.models.User;

/**
 * Created by dumorango on 25/09/14.
 */@RepositoryRestResource(collectionResourceRel = "users"  , path = "users")
   public abstract interface UserRepository extends PagingAndSortingRepository<User, Long> {
           User findByUsername(@Param("username") String username);
   }

    