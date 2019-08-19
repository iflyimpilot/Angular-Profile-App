import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProfileService } from "./services/profile.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "edit", component: EditComponent },
  { path: "**", redirectTo: "profile" }
];

@NgModule({
  declarations: [AppComponent, ProfileComponent, EditComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
