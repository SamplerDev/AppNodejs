import {DataSource} from 'typeorm'
import path from 'path'
import {createConnection} from 'typeorm'
  
    
export async function conect(){

  
    
      await createConnection({
        type:"mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "nodejs-course",
        entities: [
          path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
      });
      console.log('Database is Connected')
    }





             
             
             
   
    

