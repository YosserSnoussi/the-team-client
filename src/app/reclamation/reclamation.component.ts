import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../model/reclamation';
import {ReclamationService} from '../service/reclamation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamations: Reclamation[];

  constructor(private reclamationService: ReclamationService, private router: Router) {
  }

  ngOnInit(): void {
    this.getReclamations();


  }

  private getReclamations() {
    this.reclamationService.getReclamationsList().subscribe(data => {
      console.log(data);
      this.reclamations = data;
    });
  }

  deleteReclamation(id: number) {
    this.reclamationService.deleteReclamation(id).subscribe(data => {
      console.log(data);
      this.getReclamations();
    });


  }
}
