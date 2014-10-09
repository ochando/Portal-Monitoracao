package pm.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pm.models.Alert;
import pm.models.Atribuicao;

/**
 * Created by dumorango on 26/09/14.
 */
@RepositoryRestResource(collectionResourceRel = "atribuicoes", path = "atribuicoes")
public abstract interface AtribuicaoRepository extends PagingAndSortingRepository<Atribuicao, Long> {

    Atribuicao findByAlertOrderByCreatedDateDesc(@Param("id") Alert id) ;
}


