import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { UsersComponent } from './components/users/users.component';


const routes: Route[] = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home', component: HomeComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'users', component: UsersComponent},
  {path:'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
