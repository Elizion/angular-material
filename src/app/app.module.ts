import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling'

import { AppComponent } from './app.component';
import { SalesComponent } from './containers/sales/sales.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { LayoutComponent } from './layout/panel-main/layout.component';
import { HomeComponent } from './containers/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import { ButtonComponent } from './components/button/button.component';

import { MenuService } from './services/menu.service';
import { DummyService } from './services/dummy.service';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { ButtonReusableComponent } from './components/button-reusable/button-reusable.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sales',
        component: SalesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ScrollingModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({counter:counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),    
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuItemComponent,
    PageHeaderComponent,
    HomeComponent,
    SalesComponent,
    ButtonComponent,
    ButtonReusableComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    importProvidersFrom(HttpClientModule),
    DummyService,
    MenuService
  ]
})
export class AppModule {}
