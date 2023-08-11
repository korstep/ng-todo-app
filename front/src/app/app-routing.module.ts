import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedLayoutComponent } from '@layouts/authenticated-layout/authenticated-layout.component';
import { UnauthenticatedLayoutComponent } from '@layouts/unauthenticated-layout/unauthenticated-layout.component';

const routes: Routes = [
  // App routes
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./modules/tasks/tasks.module').then((m) => m.TasksModule),
      },
      {
        path: 'stickers',
        loadChildren: () =>
          import('./modules/stickers/stickers.module').then(
            (m) => m.StickersModule
          ),
      },
    ],
  },
  { path: '', component: UnauthenticatedLayoutComponent, children: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
