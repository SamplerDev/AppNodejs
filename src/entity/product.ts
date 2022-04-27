import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";
  import { Field, Int, ObjectType } from "type-graphql";

  import { Tienda} from './tienda'  
  
  
  @ObjectType()
  @Entity()
  export class Product extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    precio!: string;

    @Field(()=>String,{nullable:true})
    @Column()
    descripcion!: String
  
    @Field(() => Int)
    @Column("int", { default: 0 ,nullable:true})
    quantity!: number;
  
    @Field(() => String)
    @CreateDateColumn({ type: "timestamp" })
    createdAt!: string;

    @Field(()=>String,{nullable:true})
    @Column()
    imagen!: String
  

    @ManyToOne(()=>Tienda,(tienda)=>tienda.id)
    @Field()
    @Column()
    tienda!:number
  }