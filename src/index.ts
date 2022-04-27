import 'reflect-metadata';
import { startServer } from "./app";
import {conect} from './config/typeorm'

async function main(){
    conect();
const app = await startServer();
app.listen(3000);
console.log('server on port', 3000)




}

main();