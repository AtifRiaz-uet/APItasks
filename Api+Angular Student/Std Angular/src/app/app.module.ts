import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { InteractionService } from './interaction.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
