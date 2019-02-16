import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalGridComponent } from './journal-grid/journal-grid.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: ':id', component: JournalGridComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JournalGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
