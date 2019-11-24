import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Topnav } from "../models";

@Component({
  selector: "app-topnav",
  templateUrl: "./topnav.component.html",
  styleUrls: ["./topnav.component.scss"]
})
export class TopnavComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  topNav: Topnav;
  private subscription: Subscription;

  ngOnInit() {
    this.createTopNavItems();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private createTopNavItems() {
    this.topNav = {
      home: [
        {
          textContent: "Home",
          icon: "home",
          svg: true,
          click: () => this.gotoBlogPosts()
        }
      ],
      commonItems: []
    };
  }

  gotoBlogPosts() {
    this.router.navigate([`/blog`]);
  }
}
