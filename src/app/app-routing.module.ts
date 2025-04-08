import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DecorComponent } from "./components/templates/decor/decor.component";
import { MainComponent } from "./components/main/main.component";
import * as firebase from "firebase";
import "firebase/analytics";
import "firebase/auth";
import { environment } from "src/environments/environment";
import { SareeComponent } from "./components/templates/saree/saree.component";
import { ChessPageComponent } from "./components/chess-ai/chess-page/chess-page.component";
import { TextClusteringComponent } from "./components/text-clustering/text-clustering.component";
firebase.initializeApp(environment.firebaseConfig);
firebase.analytics();
const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "templates/saree-store", component: SareeComponent },
  // { path: 'templates/decor-store', component: DecorComponent }
  { path: "chess", component: ChessPageComponent },
  { path: "text-clustering", component: TextClusteringComponent },

  // { path: "zighra-demo", component: ZighraDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
