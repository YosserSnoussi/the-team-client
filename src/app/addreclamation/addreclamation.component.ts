import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../model/reclamation';
import {ReclamationService} from '../service/reclamation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.css']
})
export class AddreclamationComponent implements OnInit {
  reclamation: Reclamation = new Reclamation();

  constructor(private reclamationService: ReclamationService, private router: Router) { }

  ngOnInit(): void {
  }
  saveReclamation() {
    this.reclamationService.addReclamation(this.reclamation).subscribe(data => {
          console.log(data);
          this.goToReclamation();
        },
        error => console.log(error));
  }

  goToReclamation() {
    this.router.navigate(['reclamations']);
  }
  onSubmit() {
console.log(this.reclamation);
this.saveReclamation();
  }

}
