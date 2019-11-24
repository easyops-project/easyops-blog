import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogPostListingComponent } from "./blog-post-listing/blog-post-listing.component";
import { BlogPostDetailsComponent } from "./blog-post-details/blog-post-details.component";

const appRoutes: Routes = [
  { path: "blog", component: BlogPostListingComponent },
  { path: "blog/:slug", component: BlogPostDetailsComponent },
  { path: "**", redirectTo: "blog" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
