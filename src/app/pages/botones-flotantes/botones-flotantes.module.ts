import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BotonesFlotantesPage } from './botones-flotantes.page';

const routes: Routes = [
  {
    path: '',
    component: BotonesFlotantesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BotonesFlotantesPage]
})
export class BotonesFlotantesPageModule {}
