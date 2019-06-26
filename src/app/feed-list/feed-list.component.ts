import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { Feed } from '../Feed';
import { FacebookService, LoginResponse, InitParams } from 'ngx-facebook';
import { Profile } from '../Profile';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

  feeds: Feed[];
  profile: any;

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '671068983320799',
      xfbml: true,
      version: 'v3.3'
    };

    fb.init(initParams);
    this.loginWithFacebook();
  }

  ngOnInit() {
  }

  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => {
        console.log(response);
        this.fb.api('/me/feed?fields=description,message,name,full_picture,created_time')
        .then((res) => {
          this.feeds = res.data;
        }).catch((error: any) => console.error(error));
        this.fb.api('/me?fields=picture,name')
        .then((res) => {
          this.profile = res;
        }).catch((error: any) => console.error(error));
      })
      .catch((error: any) => console.error(error));
  }

  fommatDate(date: string) {
    let d = new Date (date);
    return d.getDate() + ' Tháng ' + d.getMonth() + ' lúc ' + d.getHours() + ':' + d.getMinutes();
  }
}
