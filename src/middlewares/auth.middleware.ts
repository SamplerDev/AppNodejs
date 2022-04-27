import {MiddlewareFn} from 'type-graphql'
import { verify } from 'jsonwebtoken'
import { Response, Request } from 'express'
import { request } from 'http'



export interface IContext{
    req: Request,
    res:Response,
    payload:{UserId:String}



};



export const isAuth: MiddlewareFn<IContext> = ({context},next) =>{
  try{
      
    const barerToken= context.req.headers["authorization"]


    if (!barerToken){
        throw new Error('Unauthorized')



    };

    const jwt= barerToken.split(" ")[1];
     const payload= verify(jwt,'secret');
     context.payload=payload as any;

  }
 
  catch (eror) {
    throw new Error();
}

return next();

}

