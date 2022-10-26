import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PgNotFoundComponent } from './pg-not-found/pg-not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'signup',component:SignupComponent},
{path:'admin', 
canActivate:[AuthGuard],
loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule)

},
{path:'**',component:PgNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
