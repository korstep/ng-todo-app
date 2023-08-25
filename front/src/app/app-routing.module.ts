import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedLayoutComponent } from '@layouts/authenticated-layout/authenticated-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AppGuard } from './core/guards/app.guard';

const routes: Routes = [
  // AUTH
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // App routes
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    canActivate: [AppGuard],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
