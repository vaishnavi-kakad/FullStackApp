import { HttpClient } from "@angular/common/http";

export class Api<T>{
    constructor(protected http :HttpClient,protected actionurl:string){}
}