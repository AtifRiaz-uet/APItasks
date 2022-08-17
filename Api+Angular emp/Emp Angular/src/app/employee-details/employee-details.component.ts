import { Component, OnInit,Input } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Employe } from '../Model/Employe';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() empDetails? : Employe;

  constructor(private _interactionService:InteractionService) {}


  ngOnInit(): void 
  {
    this._interactionService.gm$.subscribe(
      emp => {
        
          this.empDetails=emp;
        
      }
    )
  }



}

