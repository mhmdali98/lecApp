import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IsmPage } from '../pages/ism/ism';
import { Ism1Page } from '../pages/ism1/ism1';
import { Ism2Page } from '../pages/ism2/ism2';
import { BitPage } from '../pages/bit/bit';
import { Bit1Page } from '../pages/bit1/bit1';
import { Bit2Page } from '../pages/bit2/bit2';
import { Bit3Page } from '../pages/bit3/bit3';
import { Bit4Page } from '../pages/bit4/bit4';
import { Ism3Page } from '../pages/ism3/ism3';
import { Ism4Page } from '../pages/ism4/ism4';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IsmPage,
Ism1Page,
Bit1Page,
Bit2Page,
BitPage,
Ism2Page,
Bit4Page,
Bit3Page,
Ism4Page,
Ism3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IsmPage,
    Ism1Page,
    Bit1Page,
    Bit2Page,
    BitPage,
    Ism2Page,
    Bit4Page,
Bit3Page,
Ism4Page,
Ism3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
