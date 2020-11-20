import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvServiceService } from '../../services/cv-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public personnes: Personne[];
  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor(private cvService : CvServiceService) {}
  ngOnInit(): void {
    this.personnes = this.cvService.getCVs();
  }
  forwardPersonne(selectedPersonne: Personne) {
    this.forwardSelectedPersonne.emit(
      selectedPersonne
    );
  }
}
