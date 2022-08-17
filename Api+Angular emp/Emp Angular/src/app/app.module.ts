import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { inputformComponent } from './inputform/inputform.component';
import { HttpClientModule } from '@angular/common/http';
import { InteractionService } from './interaction.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ButtonsComponent,
    inputformComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
