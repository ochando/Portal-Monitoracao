package pm.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


/**
 * Created by dumorango on 23/09/14.
 */
@Entity
public class Server extends AbstractEntity{

    @Column
    private String so;
    @Column
    private String hostname;
    @Column
    private String vdc;
    @Column
    private String company;
    @Column
    private String businessService;
    @Column
    private String technicalService;
    @Column
    private String serviceComponent;
    @Column
    private String logicalService;
    @Column
    private String platform;
    @Column
    private String function;

    private String status;

    @ManyToOne
    private Environment environment;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public String getSo() {
        return so;
    }

    public void setSo(String so) {
        this.so = so;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public String getVdc() {
        return vdc;
    }

    public void setVdc(String vdc) {
        this.vdc = vdc;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getBusinessService() {
        return businessService;
    }

    public void setBusinessService(String businessService) {
        this.businessService = businessService;
    }

    public String getTechnicalService() {
        return technicalService;
    }

    public void setTechnicalService(String technicalService) {
        this.technicalService = technicalService;
    }

    public String getServiceComponent() {
        return serviceComponent;
    }

    public void setServiceComponent(String serviceComponent) {
        this.serviceComponent = serviceComponent;
    }

    public String getLogicalService() {
        return logicalService;
    }

    public void setLogicalService(String logicalService) {
        this.logicalService = logicalService;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getFunction() {
        return function;
    }

    public void setFunction(String function) {
        this.function = function;
    }

    public Environment getEnvironment() {
        return environment;
    }

    public void setEnvironment(Environment environment) {
        this.environment = environment;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
