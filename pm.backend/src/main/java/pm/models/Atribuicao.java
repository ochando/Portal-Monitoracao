package pm.models;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * Created by dumorango on 23/09/14.
 */
@Entity
public class Atribuicao extends AbstractEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    User user;

    @ManyToOne
    @JoinColumn(nullable = false)
    Alert alert;

    private Timestamp initDate;

    private Timestamp endDate;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Alert getAlert() {
        return alert;
    }

    public void setAlert(Alert alert) {
        this.alert = alert;
    }

    public Timestamp getInitDate() {
        return initDate;
    }

    public void setInitDate(Timestamp initDate) {
        this.initDate = initDate;
    }

    public Timestamp getEndDate() {
        return endDate;
    }

    public void setEndDate(Timestamp endDate) {
        this.endDate = endDate;
    }
}
