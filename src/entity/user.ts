import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    OneToMany,
    Timestamp
  } from "typeorm";

  import { Field, ID, Int, ObjectType } from "type-graphql";


import { AuthResolver } from "../resolvers/auth.resolver";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  fullname!: string;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  password!: string;

  
  @Field()
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: string;
}