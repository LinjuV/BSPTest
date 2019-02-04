import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CaseInfoComponent } from './case-info/case-info.component';
import { AddressComponent } from './case-info/address/address.component';
import { ContactComponent } from './case-info/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './case-info/group/group.component';

const routes : Routes = [
   { path: 'address', component : AddressComponent },
   { path: 'contact', component : ContactComponent },
   { path: 'groups', component : GroupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CaseInfoComponent,
    AddressComponent,
    ContactComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
