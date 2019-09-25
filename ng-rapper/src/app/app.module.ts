import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { RappersComponent } from './rappers/rappers.component';
import { RappersService} from './rappers.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    RappersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [ RappersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
