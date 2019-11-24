import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogPostDetailsComponent } from "./blog-post-details/blog-post-details.component";
import { BlogPostListingComponent } from "./blog-post-listing/blog-post-listing.component";
import { TopnavComponent } from "./topnav/topnav.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppMaterialModule } from "./shared/app-material.module";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostDetailsComponent,
    BlogPostListingComponent,
    TopnavComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    NgxSpinnerModule
  ],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
