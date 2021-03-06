import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PrestationsPage } from '../pages/prestations/prestations';
import { DemarchesAdministrativesPage } from '../pages/demarches-administratives/demarches-administratives';
import { ContactsPage } from '../pages/contacts/contacts';
import { EvaluationPensionInfoPage } from '../pages/evaluation-pension/evaluation-pension-info';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Acceuil', component: HomePage },
      { title: 'La CARFO', component: AboutPage },
      { title: 'Prestations', component: PrestationsPage },
      { title: 'Démarches Administratives', component: DemarchesAdministrativesPage },
      { title: 'Evaluation Pension', component: EvaluationPensionInfoPage },
      { title: 'Contacts', component: ContactsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
