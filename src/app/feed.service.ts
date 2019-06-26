import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Feed } from './Feed';
import { ObjTest } from './ObjTest';
import { Profile } from 'selenium-webdriver/firefox';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class FeedService {
  private feedUrl = 'https://graph.facebook.com/v3.3/me/feed?fields=description,message,name,full_picture,created_time&access_token=EAAJiVWxe4N8BAIkD5X8u196EoUANScZBGooVKT4Os1MZBPT7GOe02lez3BE2wtUJqHAGzDxpY7hX0vAuo6uY1HxA94yqYwbozwI0JPJETCCJGAtgV3c1t68V2v24YdJdw1xZBzUwiZCD2KbyV9VqjBOrWmJ7Ae86mN4G6Q0tnQZDZD';  // URL to web api
  private profileUrl = 'https://graph.facebook.com/v3.3/me?fields=picture,name&access_token=EAAJiVWxe4N8BAIkD5X8u196EoUANScZBGooVKT4Os1MZBPT7GOe02lez3BE2wtUJqHAGzDxpY7hX0vAuo6uY1HxA94yqYwbozwI0JPJETCCJGAtgV3c1t68V2v24YdJdw1xZBzUwiZCD2KbyV9VqjBOrWmJ7Ae86mN4G6Q0tnQZDZD'
  constructor(private http: HttpClient, private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '671068983320799',
      xfbml: true,
      version: 'v3.3'
    };
    fb.init(initParams);
   }

  /** GET heroes from the server */
  getFeeds(token: string): Observable<ObjTest> {
  console.log("TCL: FeedService -> token", token)
    return this.http.get<ObjTest>(this.feedUrl)
      .pipe(
        tap(_ => console.log('fetched feeds')),
      );
  }

  getProfile(token: string): Observable<Profile> {
    return this.http.get<Profile>(this.profileUrl)
      .pipe(
        tap(_ => console.log('fetched profile')),
      );
  }



}
