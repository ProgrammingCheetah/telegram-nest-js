import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  id: number;
  username: string;
  password: string;
}
