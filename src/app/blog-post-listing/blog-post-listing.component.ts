import { Component, OnInit } from "@angular/core";
import { butterService } from "../services";

@Component({
  selector: "app-blog-post-listing",
  templateUrl: "./blog-post-listing.component.html",
  styleUrls: ["./blog-post-listing.component.scss"]
})
export class BlogPostListingComponent implements OnInit {
  public posts: any[];

  constructor() {}

  months: string[] = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  ngOnInit() {
    butterService.post
      .list({
        page: 1,
        page_size: 10
      })
      .then(res => {
        this.posts = res.data.data;
      });
  }

  getDay(post: any): string {
    let date: string = post.published as string;
    let dateSplit = date.split("-");
    let day = dateSplit[2];
    day = day.slice(0, 2);

    return day;
  }

  getMonth(post: any): string {
    let date: string = post.published as string;
    let dateSplit = date.split("-");
    let intNum = Number.parseInt(dateSplit[1]);
    let month = this.months[intNum] + " " + dateSplit[0];

    return month;
  }
}
