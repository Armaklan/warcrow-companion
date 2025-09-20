import { Injectable } from '@angular/core';
import { PathLocationStrategy } from '@angular/common';

// A LocationStrategy that prevents URL updates in the browser address bar.
// It still allows the Router to work internally, but pushState/replaceState are no-ops.
@Injectable({ providedIn: 'root' })
export class NoopLocationStrategy extends PathLocationStrategy {
  // Avoid updating the URL when the Router navigates
  override pushState(state: any, title: string, url: string, queryParams: string): void {
    // no-op: keep current URL intact
  }

  override replaceState(state: any, title: string, url: string, queryParams: string): void {
    // no-op: keep current URL intact
  }
}
