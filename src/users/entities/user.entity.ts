import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '이름',
  })
  name: string;

  @Column({
    comment: '이메일',
  })
  email: string;

  @Column({
    comment: '비밀번호',
    select: false,
  })
  password: string;

  @Column({
    comment: '이메일 인증 시기',
    nullable: true,
  })
  checkEmailAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
