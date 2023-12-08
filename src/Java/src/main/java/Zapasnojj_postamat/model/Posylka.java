package Zapasnojj_postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zapasnojj_postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Посылка
 */
@Entity(name = "IISZapasnojj_postamatПосылка")
@Table(schema = "public", name = "Посылка")
public class Posylka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомПосылки")
    private Integer номпосылки;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "НомерПост")
    private Integer номерпост;

    @Column(name = "НомерЯчейки")
    private Integer номерячейки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Poluchatel")
    @Convert("Poluchatel")
    @Column(name = "Получатель", length = 16, unique = true, nullable = false)
    private UUID _poluchatelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Poluchatel", insertable = false, updatable = false)
    private Poluchatel poluchatel;


    public Posylka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомПосылки() {
      return номпосылки;
    }

    public void setНомПосылки(Integer номпосылки) {
      this.номпосылки = номпосылки;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }

    public Integer getНомерПост() {
      return номерпост;
    }

    public void setНомерПост(Integer номерпост) {
      this.номерпост = номерпост;
    }

    public Integer getНомерЯчейки() {
      return номерячейки;
    }

    public void setНомерЯчейки(Integer номерячейки) {
      this.номерячейки = номерячейки;
    }


}