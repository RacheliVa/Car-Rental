import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersServerService } from './services/users-server.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { GroupDitailsComponent } from './components/details/group-ditails/group-ditails.component';
import { HomeButtonsComponent} from './components/home-buttons/home-buttons.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderDitailsComponent } from './components/details/order-ditails/order-ditails.component';
import { CarDitailsComponent } from './components/details/car-ditails/car-ditails.component';
import { UserDitailsComponent } from './components/details/user-ditails/user-ditails.component';
import { RequestDitailsComponent } from './components/details/request-ditails/request-ditails.component';
import { DisposableRentDitailsComponent } from './components/details/disposable-rent-ditails/disposable-rent-ditails.component';
import { ConstantRentDitailsComponent } from './components/details/constant-rent-ditails/constant-rent-ditails.component';
import { ManagingComponent } from './components/managing/managing.component';
import { OrderingComponent } from './components/ordering/ordering.component';
import { RouterModule } from '@angular/router';
import { routDefinition } from './routing/routDefinition';
import { DaysOptionPipe } from './pipes/days-option.pipe';
import { RentingComponent } from './components/renting/renting.component';
import { CarsListComponent } from './components/private-area/cars-list/cars-list.component';
import { AddRentComponent } from './components/renting/add-rent/add-rent.component';
import { Time } from "@angular/common";
import { OpenNewGroupComponent } from './components/open-new-group/open-new-group.component';
import { Galleria, GalleriaModule } from 'primeng/galleria';
import {ButtonModule} from 'primeng/button';
import { Browser } from 'protractor';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem, MessageService} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { PrivateAreaComponent } from './components/private-area/private-area.component';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GroupDitailsComponent,
    HomeButtonsComponent,
    RegisterComponent,
    CarDitailsComponent,
    OrderDitailsComponent,
    UserDitailsComponent,
    RequestDitailsComponent,
    DisposableRentDitailsComponent,
    ConstantRentDitailsComponent,
    OrderingComponent,
    ManagingComponent,
    DaysOptionPipe,
    RentingComponent,
    CarsListComponent,
    AddRentComponent,
    OpenNewGroupComponent,Galleria,PrivateAreaComponent
    
  ],
  imports: [
    BrowserModule ,ToastModule ,  FormsModule,HttpClientModule,ButtonModule,TabMenuModule,SidebarModule,DialogModule,ScrollPanelModule
   
  ,RouterModule.forRoot( routDefinition) ],
  providers: [UsersServerService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
