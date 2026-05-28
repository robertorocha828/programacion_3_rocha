import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  username?: string;

  @Column({unique : true})
  email?: string;

  @Column()
  password?: string;

  @Column({ type: 'boolean',default: true })
  isActive: boolean | undefined;

  @Column({ type: 'text',nullable: true })
  profile?: string;
}
