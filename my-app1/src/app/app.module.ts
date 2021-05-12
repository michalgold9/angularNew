import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component/my-component.component';
import {MyComponentService} from './my-component/my-component/my-component.component.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { InfoComponentComponent } from './my-component/info-component/info-component.component';
import {InfoComponentService} from './my-component/info-component/info-component.component.service';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {DemoMaterialModule} from './my-component/info-component/materialModule';
import {MatNativeDateModule} from '@angular/material/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [


  { path: 'myapp', component: MyComponentComponent },
  { path: 'info', component: InfoComponentComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    InfoComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule
  ],
  entryComponents: [InfoComponentComponent],
  providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' }}, MyComponentService, InfoComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
