import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostListingComponent } from './blog-post-listing/blog-post-listing.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogPostListingComponent },
  { path: 'blog/:slug', component: BlogPostDetailsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
