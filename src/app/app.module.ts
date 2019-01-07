import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home.component';
import { ContactComponent } from './shared/contact.component';
import { FavoriteService } from './products/favorite.service';
import { routing  } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,       
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
