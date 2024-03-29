import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatTableModule } from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { UsersService } from '../../../../core/services/users.service';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CoursesComponent } from '../courses/courses.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserModalComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UserDetailComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ]),
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService,
    {
      provide: 'USER_TOKEN',
      useValue: '12345'
    }
  ]
})
export class UsersModule { }
