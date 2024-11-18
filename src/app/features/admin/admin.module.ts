import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostManagementComponent } from './pages/post-management/post-management.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { ReservationManagementComponent } from './pages/reservation-management/reservation-management.component';
import { ContactManagementComponent } from './pages/contact-management/contact-management.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostManagementComponent,
    MenuManagementComponent,
    ReservationManagementComponent,
    ContactManagementComponent,
    PostFormComponent,
  ],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
})
export class AdminModule {}
