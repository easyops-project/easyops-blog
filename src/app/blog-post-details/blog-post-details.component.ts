import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewChecked,
  SimpleChanges
} from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { butterService } from "../services";
import { map, take } from "rxjs/operators";
import * as Prism from "prismjs";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-blog-post-details",
  templateUrl: "./blog-post-details.component.html",
  styleUrls: ["./blog-post-details.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostDetailsComponent implements OnInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    this.rehighlightCode();
  }

  constructor(
    protected route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  protected slug$: Observable<string>;
  public post = {
    meta: null,
    data: null
  };

  ngOnInit() {
    this.spinner.show();
    this.slug$ = this.route.paramMap.pipe(map(params => params.get("slug")));

    this.slug$.pipe(take(1)).subscribe(slug => {
      butterService.post
        .retrieve(slug)
        .then(res => {
          this.post = res.data;
          this.spinner.hide();
        })
        .catch(res => {
          console.log(res);
        });
    });
  }

  rehighlightCode() {
    let codes = document.getElementsByTagName("code");
    for (let i = 0; i < codes.length; i++) {
      const currentCode = codes.item(i);
      const parent = currentCode.parentElement;
      const className = parent.className.trim();
      console.log(className);
      currentCode.className = className;
      console.log(currentCode);
      Prism.highlightElement(currentCode);
    }
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }

  getYear(): string {
    return new Date().getFullYear().toString();
  }
}
