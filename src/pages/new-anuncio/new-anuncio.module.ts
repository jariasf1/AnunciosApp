import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAnuncioPage } from './new-anuncio';

@NgModule({
  declarations: [
    NewAnuncioPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAnuncioPage),
  ],
})
export class NewAnuncioPageModule {}
