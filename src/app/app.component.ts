import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  licenseKey = "r3nvXVWFWeMO2gOG-z3mSiQAqJdUso3RUEMX-qWaIRxxOu42sOMvb7Vuq8pb2ETA1HqxmJST2tpnb3_6-bGsk7zbog6Wzl16h_CGmfrg3qlpd1QiM4j3zPA_8oYhYETVaLuOyszbaVie_1Gs8IhRQr3-ZIEjS3yB4G1C-58HwpW8-fz1rGBPDXxHkueNnhCzpMhqUpelkRar0nE8tt5I-CplMbYS7vomLnlFwPpSxgYMIEZ7hICRH62urs8Jq5O9DrtE6zM1cjiVondHyyzC_7Qw2jwE2PKAAdRhLZFM7BQwQc3QHk4qQJQblXcpQt2XjLKE-Wll7ZpgJrnVnDaJoXVyYfePj3b2EaLy5UoigadsiDFscguv6PY_V0g2Uah-z3maRRqIxX7zjqcbP00wXIwbNCt1OCA3AmgtFm-p7sHsVHUCvwaHFmeMrXHUbuKf";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      PSPDFKitPlugin.setLicenseKey(this.licenseKey);
      PSPDFKitPlugin.present('assets/Elvis.pdf', {});
    });
  }
}

