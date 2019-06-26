import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedListComponent } from './feed-list/feed-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'feed', component: FeedListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
