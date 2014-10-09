package pm.models;

import org.springframework.beans.factory.annotation.Required;

import javax.persistence.*;
import javax.smartcardio.ATR;
import javax.validation.Constraint;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Created by dumorango on 22/09/14.
 */
@Entity
public class Alert extends AbstractEntity implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Status status;

    private String serial;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Server server;

    @NotNull
    private Date startDate;

    @OneToMany
    private List<Atribuicao> atribuicoes;

    private String summary;

    private String criticity;

    public Alert(){
        super();
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getSerial() {
        return serial;
    }

    public void setSerial(String serial) {
        this.serial = serial;
    }

    public Server getServer() {return server;}

    public void setServer(Server server) {  this.server = server;    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getCriticity() {
        return criticity;
    }

    public void setCriticity(String criticity) {
        this.criticity = criticity;
    }

    public List<Atribuicao> getAtribuicoes() {
        return atribuicoes;
    }

    public Long getIdNumber(){
        return id;
    }

    public void setAtribuicoes(List<Atribuicao> atribuicoes) {
        this.atribuicoes = atribuicoes;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }
}
