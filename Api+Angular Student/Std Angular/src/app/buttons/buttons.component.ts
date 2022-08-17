import { Component, Input, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';
import { Employe } from '../Model/Employe';
import { map } from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  // employees!: Employe[];
  @Input() empDetails! : Employe;
  // newemp!:Employe;


  index?:number;
  // len?:number;


  constructor(private interactionService:InteractionService) {}

  ngOnInit(): void {
    
  }
  // ngOnInit(): void {
  //   this.interactionService.getEmployeList()
  //   .pipe(map((data:Employe[])=>
  //     {
  //       this.employees = data;
  //     })
  //   )
  //   .subscribe()
  // }



  

  
  previous(emp:Employe)
  {
    // this.index=this.employees.indexOf(this.newemp);
    
    
      if ( ( emp.ID) - 1 !== 0)
      {
        // this._interactionService.sendreq(this.employees[this.employees.indexOf(this.empDetails) - 1])
        // this.empDetails = this.employees[this.employees.indexOf(this.empDetails) - 1];
        this.interactionService.getEmployeDetail(( emp.ID) - 1).subscribe(
          data =>{ 
            this.interactionService.sendreq(data)
            this.empDetails=data
          });
        this.index=( emp.ID) - 1;
        this.interactionService.sendreq(this.empDetails);
        
        
      }
      else
      {
        alert('This is the first!')
      }
      
    
    
  }
  next(emp:Employe)
  {
    // this.len=this.employees.length;
    // this.index=this.employees.indexOf(this.newemp);
    
      if (( emp.ID) + 1 !==11)
      {
        // this._interactionService.sendreq(this.employees[this.employees.indexOf(this.empDetails) + 1])
        // this.empDetails = this.employees[this.employees.indexOf(this.empDetails) + 1];
        this.interactionService.getEmployeDetail(( emp.ID) + 1).subscribe(
          emp =>{ 
            this.interactionService.sendreq(emp)
            this.empDetails=emp
          });
        this.index=( emp.ID) + 1;
        // this.interactionService.sendreq(this.empDetails);
        
        
      }
      else
      {
        alert('Length of Employe is Reached!')
      }
      
    


  }

  

}
