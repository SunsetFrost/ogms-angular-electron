import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ServerComponent } from './content/server/server.component';
import { ServiceComponent } from './content/service/service.component';
import { FileComponent } from './content/file/file.component';
import { ToolComponent } from './content/tool/tool.component';
import {ServerService} from './server.service';
import { MapComponent } from './map/map.component';
import { ShortModelMenuComponent } from './short/short-model-menu/short-model-menu.component';

const routeConfig: Routes = [
  {path: '', redirectTo: '/server', pathMatch: 'full'},
  {path: 'server', component: ServerComponent },
  {path: 'service', component: ServiceComponent},
  {path: 'file', component: FileComponent},
  {path: 'tool', component: ToolComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    ServerComponent,
    ServiceComponent,
    FileComponent,
    ToolComponent,
    FooterComponent,
    MapComponent,
    ShortModelMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
