import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule ,MatInputModule, MatDividerModule,MatExpansionModule} from '@angular/material';
import { AppComponent } from './app.component';
import { CaseInfoComponent } from './case-info/case-info.component';
import { AddressComponent } from './case-info/address/address.component';
import { ContactComponent } from './case-info/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './case-info/group/group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseComponent } from './case-info/case/case.component';
import { MatTableModule, MatTabsModule, MatNativeDateModule } from '@angular/material';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { BrokersComponent } from './case-info/brokers/brokers.component';
import { BillingEntitiesComponent } from './case-info/billing-entities/billing-entities.component';
import { HeaderComponent } from './case-info/header/header.component';
import { AddsComponent } from './adds/adds.component';
import { CaseDetailsComponent } from './case-info/case-details/case-details.component';
import {MatIconModule} from '@angular/material/icon';


const routes : Routes = [
  { path: '', component : CaseComponent },
  { path: 'adds', component : AddsComponent },
  { path: 'caseInfo', component : CaseInfoComponent },
   { path: 'address', component : AddressComponent },
   { path: 'contact', component : ContactComponent },
   { path: 'groups', component : GroupComponent},
   { path: 'cases', component : CaseInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CaseInfoComponent,
    AddressComponent,
    ContactComponent,
    GroupComponent,
    CaseComponent,
    BrokersComponent,
    BillingEntitiesComponent,
    HeaderComponent,
    AddsComponent,
    CaseDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
