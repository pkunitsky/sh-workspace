import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  {path: '', loadChildren: () => import('./features/entities/entities/entities.module').then(m => m.EntitiesModule)}
];

const devRoutes: Routes = [
  ...routes,
  {path: 'test', loadChildren: () => import('./features/test/test/test.module').then(m => m.TestModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(environment.production ? routes : devRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
