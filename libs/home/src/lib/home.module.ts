import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MomentModule } from 'ngx-moment';
import { SharedModule } from '@ngx-starter-kit/shared';
import { AppConfirmModule } from '@ngx-starter-kit/app-confirm';
import { DraggableModule } from '@ngx-starter-kit/draggable';
import { NgxPipesModule } from '@ngx-starter-kit/ngx-pipes';

import { ThemePickerModule } from '@ngx-starter-kit/theme-picker';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { LandingComponent } from './containers/landing/landing.component';
import { BlogComponent } from './containers/blog/blog.component';
import { AboutComponent } from './containers/about/about.component';
import { ScrollToTopModule } from '@ngx-starter-kit/scroll-to-top';
import { SvgViewerModule } from '@ngx-starter-kit/svg-viewer';

import { VehiclesComponent } from './containers/vehicles/vehicles.component';
import { CoordBikeshareService } from './services/coord-bikeshare.service';

import { CoordmapComponent } from './containers/coordmap/coordmap.component';
import { FeaturesComponent } from './containers/features/features.component';




@NgModule({
  imports: [
    SharedModule,

    DraggableModule,
    AppConfirmModule,
    NgxPipesModule,
    MomentModule,

    ScrollToTopModule,
    ThemePickerModule,
    SvgViewerModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: HomeLayoutComponent,
        data: { animation: 'home' },
        children: [
          {
            path: '',
            component: LandingComponent,
            data: { animation: 'home' }
          },
          {
            path: 'blog',
            component: BlogComponent,
            data: { animation: 'blog' }
          },
          {
            path: 'about',
            component: AboutComponent,
            data: { animation: 'about' }
          },

          /* temp - okay for BlogComponent, needs to use VehiclesComponent 
          Also uncomment below in declarations.
          */
          {
            path: 'vehicles',
            component: VehiclesComponent,
            data: { animation: 'vehicles' }
          },

          {
            path: 'coordmap',
            component: CoordmapComponent,
            data: { animation: 'features' }
          },
          {
            path: 'features',
            component: FeaturesComponent,
            data: { animation: 'features' }
          }
        ]
      }
    ])
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeLayoutComponent,
    LandingComponent,
    AboutComponent,
    BlogComponent,
    
    VehiclesComponent,
    
    CoordmapComponent,
    FeaturesComponent
  ],
  providers: [CoordBikeshareService]
})
export class HomeModule {}
