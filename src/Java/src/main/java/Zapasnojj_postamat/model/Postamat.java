package Zapasnojj_postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zapasnojj_postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Постамат
 */
@Entity(name = "IISZapasnojj_postamatПостамат")
@Table(schema = "public", name = "Постамат")
public class Postamat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерПост")
    private Integer номерпост;

    @Column(name = "Адрес")
    private String адрес;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tochka")
    @Convert("Tochka")
    @Column(name = "Точка", length = 16, unique = true, nullable = false)
    private UUID _tochkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tochka", insertable = false, updatable = false)
    private Tochka tochka;

    @OneToMany(mappedBy = "postamat", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZapisPoluch> zapispoluchs;


    public Postamat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерПост() {
      return номерпост;
    }

    public void setНомерПост(Integer номерпост) {
      this.номерпост = номерпост;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }


}