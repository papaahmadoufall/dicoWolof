import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListWordComponent } from './components/list-word/list-word.component';
import { WordComponent } from './components/word/word.component';
import { SearchComponentComponent } from './components/components/search-component/search-component.component';
import { ResultsComponentComponent } from './components/components/results-component/results-component.component';
import { LoginComponentComponent } from './components/components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/components/register-component/register-component.component';
import { FavoritesComponentComponent } from './components/components/favorites-component/favorites-component.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ListWordComponent,
    WordComponent,
    SearchComponentComponent,
    ResultsComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    FavoritesComponentComponent,
    AuthComponent,
    SearchComponent,
    FavoritesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
