import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstagramComponent } from './components/instagram/instagram.component'
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: 'instagram-analytics', component: InstagramComponent },
  { path: '', component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
