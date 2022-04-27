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
  import { Product } from "../entity/product";
import { isAuth } from "../middlewares/auth.middleware";
  
  @InputType()
  class ProductInput {
    @Field()
    name!: string;

    @Field(()=>Int,{nullable:false})
    tienda!: number;
  
    @Field(() => Int)
    quantity!: number;

    @Field()
    precio!: string;

    @Field(()=>String,{nullable:true})
    descripcion!: String

    @Field(()=>String,{nullable:true})
    imagen!:String
  


  }
  
  @InputType()
  class ProductUpdateInput {
    @Field(() => String, {nullable: true})
    name?: string;

    @Field(()=>String,{nullable:true})
    precio!: string;
  
    @Field(()=>String,{nullable:true})
    descripcion!: String

    @Field(()=>String,{nullable:true})
    imagen!:String

    @Field(() => Int, {nullable: true})
    quantity?: number;

    @Field(()=>Int, {nullable:true})
    tienda!: number;
  }
  
  @Resolver()
  export class ProductResolver {



    
    @Mutation(() => Product)
    @UseMiddleware(isAuth)
    async createProduct(
      // @Arg("name") name: string,
      // @Arg("quantity", () => Int) quantity: number
      @Arg("variables", () => ProductInput) variables: ProductInput
    ) {
      const newProduct = Product.create(variables);
      return await newProduct.save();
    }



  
    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteProduct(@Arg("id", () => Int) id: number) {
      
      
      try{
      
      const result=await Product.delete(id);
      if(result.affected===0) throw new Error("el producto no existe")
      
      
      return true;}
      catch(e){


        throw new Error


      }



    }





  
    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async updateProduct(
      @Arg("id", () => Int) id: number,
      @Arg("fields", () => ProductUpdateInput) fields: ProductUpdateInput
    ) {
      await Product.update({ id }, fields);
      return true;
    }
  
    @Query(() => [Product])
    products() {
      return Product.find();
    }
  
    @Query(() => Product)
    getOneProduct(@Arg("id") id: number) {
   return Product.findOne({ where: { id } });

   

}


@Query(()=>[Product])
   getProductsOfTienda(@Arg("tienda") tienda:number){
     return Product.find({where:{tienda}})

   }

  
  }





