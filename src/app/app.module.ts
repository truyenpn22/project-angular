import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanChitietComponent } from './duan-chitiet/duan-chitiet.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvChitietComponent } from './nv-chitiet/nv-chitiet.component';
import { TaskChitietComponent } from './task-chitiet/task-chitiet.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';
import { Moment } from 'moment';
import { DangKyComponent } from './dang-ky/dang-ky.component';

@NgModule({
  declarations: [
    AppComponent,
    DuanListComponent,
    DuanSuaComponent,
    DuanThemComponent,
    DuanChitietComponent,
    NvListComponent,
    NvSuaComponent,
    NvThemComponent,
    NvChitietComponent,
    TaskChitietComponent,
    TaskListComponent,
    TaskSuaComponent,
    TaskThemComponent,
    DangNhapComponent,
    DoiPassComponent,
    DangKyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
