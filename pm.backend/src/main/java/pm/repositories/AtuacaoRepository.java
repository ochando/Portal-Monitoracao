package pm.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pm.models.Atuacao;

/**
 * Created by dumorango on 26/09/14.
 */
@RepositoryRestResource(collectionResourceRel = "atuacoes", path = "atuacoes")
public abstract interface AtuacaoRepository extends PagingAndSortingRepository<Atuacao, Long> {
}