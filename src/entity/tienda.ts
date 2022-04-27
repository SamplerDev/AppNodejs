import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    OneToMany
  } from "typeorm";

  import { Field, ID, Int, ObjectType } from "type-graphql";


  import { Product } from "./product";
  
  @ObjectType()
  @Entity()
  export class Tienda extends BaseEntity {
    
    @OneToMany(()=>Product,(product)=>product.tienda)
    @PrimaryGeneratedColumn()
    @Field(()=>ID)
    id!: number;
  
    @Field(()=>String)
    @Column()
    name!: string;
  
    @Field(()=>String)
    @Column()
    direccion!: String;
  
    @Field(() => String)
    @CreateDateColumn({ type: "timestamp" })
    createdAt!: string;


    @Field(()=>String,{nullable:true})
    @Column({nullable:true})
     imagen!: String;


 
    

  }