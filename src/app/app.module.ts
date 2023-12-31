
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from'@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http'

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { DialogEditWrapperComponent } from './components/student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { DialogUpdateWrapperComponent } from './components/student-editor/dialog-update-wrapper/dialog-update-wrapper.component';
import { TablestylingComponent } from './components/tablestyling/tablestyling.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DialogEditWrapperComponent,
    DialogUpdateWrapperComponent,
    TablestylingComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    RouterModule
  ],

  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
