import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { InteractionService } from '../interaction.service';
import { Employe } from '../Model/Employe';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class inputformComponent implements OnInit {


  constructor(private interactionService:InteractionService) {}
  



  

  ngOnInit(): void {
  }

  
  

}

