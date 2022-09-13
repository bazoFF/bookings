import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthPage } from './auth.page';
import { RouterModule } from '@angular/router';
import { AndroidPermissions } from "@awesome-cordova-plugins/android-permissions/ngx";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: AuthPage}]),
  ],
  declarations: [AuthPage],
  providers: [AndroidPermissions]
})
export class AuthPageModule {
}
