
import {
    Resolver,
    Mutation,
    Arg,
    Int,
    Query,
    InputType,
    Field,
    UseMiddleware
  } from "type-graphql";
  import { Column } from "typeorm";
  import { Tienda } from "../entity/tienda";
  import { isAuth } from "../middlewares/auth.middleware";

 
@InputType()
export class TiendaInput {
  @Field()
  name!: string;

  @Field()
  direccion!: string;

  @Field({ nullable: true })
  imagen?: string;


}




@InputType()
  class TiendaUpdateInput {
    @Field(() => String, {nullable: true})
    name?: string;
  
    @Field(() => String, {nullable: true})
    direccion?: String;

    @Field(() => String, {nullable: true})
    imagen!: String;


  }





@Resolver()
  export class TiendaResolver {

    
@UseMiddleware(isAuth)

    @Mutation(() => Tienda)
    async createTienda(
      // @Arg("name") name: string,
      // @Arg("quantity", () => Int) quantity: number
      @Arg("data") data:TiendaInput
    ) {
      const newProduct = Tienda.create(data);
      return await newProduct.save();
    }



    @Query(() => [Tienda])
    Tiendas() {
      return Tienda.find();
    }

    
    @Query(() => Tienda)
          getOneTienda(@Arg("id") id: number) {
         return Tienda.findOne({ where: { id } });
            }
   
  
     @Mutation(() => Boolean)
    async updateTienda(
     @Arg("id", () => Int) id: number,
     @Arg("fields", () => TiendaUpdateInput) fields: TiendaUpdateInput
      ) {
         await Tienda.update({ id }, fields);
         return true;
          }
  
          @Mutation(() => Boolean)
    async deleteTienda(@Arg("id", () => Int) id: number) {
      await Tienda.delete(id);
      return true;
    }

  
  
  
  
        } 





  

