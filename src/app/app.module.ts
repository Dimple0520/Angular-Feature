import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProfileComponent } from './modules/profile/components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandBarComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
