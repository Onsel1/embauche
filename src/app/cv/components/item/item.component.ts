import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmbauchesService } from '../../services/embauches.service';
import { Personne } from './../../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() sendPersonne = new EventEmitter();
  constructor(private embaucheService: EmbauchesService) {}

  ngOnInit(): void {}
  selectItem() {
    this.sendPersonne.emit(this.personne);
  }
  embaucher(event: any) {
    event.target.disabled = true;
    this.embaucheService.embaucherPersonne(this.personne);
} 
}
