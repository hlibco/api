import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IUniverseCategory } from '../../core/external/esi/esi.interface';

@Entity()
export class UniverseCategory {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  public populateESI(esiData: IUniverseCategory) {
    this.name = esiData.name;
  }
}
