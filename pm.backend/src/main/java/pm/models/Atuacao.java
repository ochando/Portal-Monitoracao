package pm.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

/**
 * Created by dumorango on 23/09/14.
 */
@Entity
public class Atuacao extends AbstractEntity{


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Atribuicao atribuicao;

    @NotNull
    private Date date;

    @NotNull
    private String description;

    public Atribuicao getAtribuicao() {
        return atribuicao;
    }

    public void setAtribuicao(Atribuicao atribuicao) {
        this.atribuicao = atribuicao;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
