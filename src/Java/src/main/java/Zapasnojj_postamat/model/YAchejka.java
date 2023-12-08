package Zapasnojj_postamat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zapasnojj_postamat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Ячейка
 */
@Entity(name = "IISZapasnojj_postamatЯчейка")
@Table(schema = "public", name = "Ячейка")
public class YAchejka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЯчейки")
    private Integer номерячейки;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "НомерПост")
    private Integer номерпост;


    public YAchejka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЯчейки() {
      return номерячейки;
    }

    public void setНомерЯчейки(Integer номерячейки) {
      this.номерячейки = номерячейки;
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


}