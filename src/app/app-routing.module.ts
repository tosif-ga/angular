import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { RoleType } from './shared/model/role.model';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthenticationGuard],
    // data: {
    //   roleType: [ RoleType.PM, RoleType.Admin, RoleType.SME ]
    // }
  },
  {
    path: 'googlemap',
    loadChildren: './googlemap/googlemap.module#GooglemapModule',
    canActivate: [AuthenticationGuard],
    // data: {
    //   roleType: [ RoleType.PM, RoleType.Admin, RoleType.SME ]
    // }
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    canActivate: [AuthenticationGuard],
    data: {
      roleType: [ RoleType.PM, RoleType.Admin ]
    }
  },
  {
    path: 'quesiton',
    loadChildren: './quesiton/quesiton.module#QuesitonModule',
    canActivate: [AuthenticationGuard],
    data: {
      roleType: [ RoleType.Admin ]
    }
  },
  {
    path: 'quiz',
    loadChildren: './quiz/quiz.module#QuizModule',
    canActivate: [AuthenticationGuard],
    data: {
      roleType: [RoleType.Admin]
    }
  },
  {
    path: 'categories-skills',
    loadChildren: './categories-skills/categories-skills.module#CategoriesSkillsModule',
    canActivate: [AuthenticationGuard],
    data: {
      roleType: [ RoleType.PM ]
    }
  },
  {
    path: 'report',
    loadChildren: './report/report.module#ReportModule',
    canActivate: [AuthenticationGuard],
    data: {
      roleType: [ RoleType.SME ]
    }
  },
  {
    path: 'not-found',
    loadChildren: './not-found/not-found.module#NotFoundModule',
    canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
