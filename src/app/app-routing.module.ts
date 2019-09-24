import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'test-page', loadChildren: './pages/test-page/test-page.module#TestPagePageModule' },
  { path: 'iconos', loadChildren: './pages/iconos/iconos.module#IconosPageModule' },
  { path: 'textos', loadChildren: './pages/textos/textos.module#TextosPageModule' },
  { path: 'botones-flotantes', loadChildren: './pages/botones-flotantes/botones-flotantes.module#BotonesFlotantesPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
