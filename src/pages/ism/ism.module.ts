import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsmPage } from './ism';

@NgModule({
  declarations: [
    IsmPage,
  ],
  imports: [
    IonicPageModule.forChild(IsmPage),
  ],
})
export class IsmPageModule {}
