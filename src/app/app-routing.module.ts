import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuanChitietComponent } from './duan-chitiet/duan-chitiet.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { NvChitietComponent } from './nv-chitiet/nv-chitiet.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { TaskChitietComponent } from './task-chitiet/task-chitiet.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';
import { BaoveGuard } from './baove.guard';

const routes: Routes = [
  { path:'dangky', component:DangKyComponent},

  { path:'dangnhap', component:DangNhapComponent},
  
  { path: 'duan', component: DuanListComponent },
  { path: 'duan/:id', component: DuanChitietComponent },
  // { path: 'admin/sp', component: ProductDsComponent },
  { path: 'themDuan', component: DuanThemComponent },
  { path: 'suaDuan/:id', component: DuanSuaComponent },

  { path: 'nv', component: NvListComponent },
  { path: 'nv/:id', component: NvChitietComponent },
  // { path: 'admin/sp', component: ProductDsComponent },
  { path: 'themNV', component: NvThemComponent },
  { path: 'suaNV/:id', component: NvSuaComponent },

  { path: 'task', component: TaskListComponent },
  { path: 'task/:id', component: TaskChitietComponent },
  // { path: 'admin/sp', component: ProductDsComponent },
  { path: 'themTask', component: TaskThemComponent },
  { path: 'suaTask/:id', component: TaskSuaComponent },
  { path: 'doipass',
   component:DoiPassComponent,
   canActivate:[BaoveGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
