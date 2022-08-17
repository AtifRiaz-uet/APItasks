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

  @Input() empDetails! : Employe;
  emptyemp!:Employe;
  trigger:Boolean=false;
  _name:string='';
  _desg:string='';
  index?:number;

  constructor(private interactionService:InteractionService) {}

  ngOnInit(): void {
    
  }


  

  
  previous(emp:Employe)
  {

    
    
      if ( ( emp.Id) - 1 !== 0)
      {

        this.interactionService.getEmployeDetail(( emp.Id) - 1).subscribe(
          data =>{ 
            this.interactionService.sendreq(data)
            this.empDetails=data
          });
        this.index=( emp.Id) - 1;
        this.interactionService.sendreq(this.empDetails);
        
        
      }
      else
      {
        alert('This is the first!')
      }
      
    
    
  }
  next(emp:Employe)
  {

    
      if (( emp.Id) + 1 !==11)
      {

        this.interactionService.getEmployeDetail(( emp.Id) + 1).subscribe(
          emp =>{ 
            this.interactionService.sendreq(emp)
            this.empDetails=emp
          });
        this.index=( emp.Id) + 1;
        
        
      }
      else
      {
        alert('Length of Employe is Reached!')
      }
      
  }
  add(emp:Employe)
  {
    this.interactionService.sendreq(this.emptyemp)
    this.trigger=true;

  }
  del(emp:Employe)
  {
    alert('Are You Sure?')
    this.interactionService.getEmployeDelete(emp.Id).subscribe()

  }

  

}
