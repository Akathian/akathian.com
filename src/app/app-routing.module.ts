import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstagramComponent } from './components/instagram/instagram.component'
import { MainComponent } from './components/main/main.component';
import * as firebase from 'firebase';
import 'firebase/analytics'
import "firebase/auth";
import { environment } from 'src/environments/environment';
import { SareeComponent } from './components/templates/saree/saree.component';

firebase.initializeApp(environment.firebaseConfig);
firebase.analytics();
const routes: Routes = [
  // { path: 'instagram-analytics', component: InstagramComponent },
  { path: '', component: MainComponent },
  { path: 'templates/saree-store', component: SareeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
