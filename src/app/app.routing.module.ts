import { NgModule } from '@angular/core';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: TeamComponent },
    { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
