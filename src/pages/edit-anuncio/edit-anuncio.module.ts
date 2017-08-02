import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAnuncioPage } from './edit-anuncio';

@NgModule({
  declarations: [
    EditAnuncioPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAnuncioPage),
  ],
})
export class EditAnuncioPageModule {}
