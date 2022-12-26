import { Company } from "./company";
import { website } from "./website";


export class Course{
    sno:number;
    title:string;
    technology: string;
    price: number;
    provider:Company;
    weblist:website[]= new Array();

}
        
     