import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbauchesService {

  personnesEmbauches: Personne[] = [];
  constructor() { }

  embaucherPersonne(personne : Personne){
    this.personnesEmbauches.push(personne);
  }
  getList(){
    return this.personnesEmbauches;
  }
}
