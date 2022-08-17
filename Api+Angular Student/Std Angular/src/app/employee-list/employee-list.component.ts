import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { InteractionService } from '../interaction.service';
import { Employe } from '../Model/Employe';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employe[];
  emp!:Employe;
  constructor(private interactionService:InteractionService) {}
  


   

  @Output() clickedEmp = new EventEmitter<Employe>();
  // @Output() listEmp = new EventEmitter<Employe[]>();
  clicked (Emp: Employe)
  {
    this.clickedEmp.emit(Emp);
    // this.listEmp.emit(this.employees)
  }


  

  ngOnInit(): void {
    this.interactionService.getEmployeList()
    .pipe(map((data:Employe[])=>
      {
        this.employees = data;
      })
    )
    .subscribe()
  }

  
  

}

