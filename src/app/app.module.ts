import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BloodCampComponent } from './home/blood-camp/blood-camp.component';
import { BloodSearchComponent } from './home/blood-search/blood-search.component';
import { EditProfileComponent } from './home/edit-profile/edit-profile.component'; // <-- NgModel lives here
import { UserNameService} from './services/user-name.service' ;
import { TempDataService} from './services/temp-data.service' ;
import { HttpClient, HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'signUp', component: SignUpComponent,
 },
  { path: 'login',      component: LoginComponent ,
 },
  { path: 'home',      component: HomeComponent,
  children: [
    { path: 'camp',      component: BloodCampComponent, outlet: 'sidebar',
      },
    { path: 'search',      component: BloodSearchComponent, outlet: 'sidebar',
       },
    { path: 'profile',      component: EditProfileComponent, outlet: 'sidebar',
       },

  ],
  /*canActivate: [
    AuthGuard
  ]*/},
    {
    path: 'welcome',
    component: WelcomeComponent,

  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    WelcomeComponent,
    HomeComponent,
    BloodCampComponent,
    BloodSearchComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule ,
    HttpClientModule ,
  ],
  providers: [ UserNameService, TempDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
