import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'empresas',
    loadChildren: () => import('./componets/empresas/empresas.module').then(m => m.EmpresasModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'empresas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
