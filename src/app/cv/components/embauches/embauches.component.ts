import { Component, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { EmbauchesService } from '../../services/embauches.service';

@Component({
  selector: 'app-embauches',
  templateUrl: './embauches.component.html',
  styleUrls: ['./embauches.component.css']
})
export class EmbauchesComponent implements OnInit {

  constructor(private embaucheService : EmbauchesService) { }

  personnesEmbauchees: Personne[] = [];

  ngOnInit(): void {
    this.personnesEmbauchees= this.embaucheService.getList();
  }

}
