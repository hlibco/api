import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Alliance } from './alliance.entity';

@EntityRepository(Alliance)
export class AllianceRepository extends Repository<Alliance> {

  public async getAllByIds(ids: number[]): Promise<Alliance[]> {
    return this.createQueryBuilder('alliance')
    .where('alliance.id IN (:ids)', { ids })
    .getMany();
  }

}
