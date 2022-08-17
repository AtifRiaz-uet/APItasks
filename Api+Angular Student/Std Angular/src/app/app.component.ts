import { Component, Input } from '@angular/core';
import { Employe } from './Model/Employe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';
  getemployees! : Employe [];
  
  

  selected_emp! : Employe;
  ShowEmp(emp:Employe)
  {
    this.selected_emp=emp;
  }
  ShowListEmp(emplist:Employe[])
  {
    this.getemployees=emplist;

  }
}
