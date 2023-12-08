package Zapasnojj_postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zapasnojj_postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЗаписьПолуч
 */
@Entity(name = "IISZapasnojj_postamatЗаписьПолуч")
@Table(schema = "public", name = "ЗаписьПолуч")
public class ZapisPoluch {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаПолуч")
    private Date датаполуч;

    @Column(name = "ВремяПолуч")
    private String времяполуч;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "YAchejka")
    @Convert("YAchejka")
    @Column(name = "Ячейка", length = 16, unique = true, nullable = false)
    private UUID _yachejkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "YAchejka", insertable = false, updatable = false)
    private YAchejka yachejka;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Posylka")
    @Convert("Posylka")
    @Column(name = "Посылка", length = 16, unique = true, nullable = false)
    private UUID _posylkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Posylka", insertable = false, updatable = false)
    private Posylka posylka;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Postamat")
    @Convert("Postamat")
    @Column(name = "Постамат", length = 16, unique = true, nullable = false)
    private UUID _postamatid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Postamat", insertable = false, updatable = false)
    private Postamat postamat;


    public ZapisPoluch() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаПолуч() {
      return датаполуч;
    }

    public void setДатаПолуч(Date датаполуч) {
      this.датаполуч = датаполуч;
    }

    public String getВремяПолуч() {
      return времяполуч;
    }

    public void setВремяПолуч(String времяполуч) {
      this.времяполуч = времяполуч;
    }


}