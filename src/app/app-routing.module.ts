import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IsloginGuard } from './islogin.guard';
import { AuthGuard } from './auth.guard';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  
  {path:'albums',component:AlbumsComponent},
  {path:'photos',component:PhotosComponent},
  {path:'dasboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'posts',component:PostsComponent},
  {path:'login',component:LoginComponent,canActivate:[IsloginGuard]},
  {path:'todos',component:TodosComponent},
  {path:'users',component:UsersComponent},
  {path:'comments',component:CommentsComponent},
  {path:'*',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
