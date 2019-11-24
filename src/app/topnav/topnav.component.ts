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

  ngOnInit() {}

  ngOnDestroy() {}


}
