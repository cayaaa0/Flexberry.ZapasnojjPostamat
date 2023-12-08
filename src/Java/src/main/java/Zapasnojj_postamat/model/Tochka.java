package Zapasnojj_postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zapasnojj_postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Точка
 */
@Entity(name = "IISZapasnojj_postamatТочка")
@Table(schema = "public", name = "Точка")
public class Tochka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Адрес")
    private String адрес;

    @OneToMany(mappedBy = "tochka", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Postamat> postamats;


    public Tochka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }


}