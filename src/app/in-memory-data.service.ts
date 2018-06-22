import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService{

 createDb(){
   const users = [
    {
      "email": "egestas.a@sed.co.uk", 
      "nascimento": "2019-05-21 04:19:32", 
      "id": 1, 
      "telefone": "(706) 802-6845", 
      "nome": "Sonya"
    }, 
    {
      "email": "sem.magna.nec@orcitincidunt.ca", 
      "nascimento": "2017-07-08 11:44:47", 
      "id": 2, 
      "telefone": "(909) 621-4412", 
      "nome": "Hasad"
    }, 
    {
      "email": "Nulla@quis.ca", 
      "nascimento": "2017-09-11 14:16:50", 
      "id": 3, 
      "telefone": "(964) 763-3374", 
      "nome": "Zahir"
    }, 
    {
      "email": "penatibus.et.magnis@aliquetmagnaa.net", 
      "nascimento": "2019-01-13 18:38:28", 
      "id": 4, 
      "telefone": "(326) 365-5377", 
      "nome": "Halee"
    }
  ];
   return {users};
 }
}
