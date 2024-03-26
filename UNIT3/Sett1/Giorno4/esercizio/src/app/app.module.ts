import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EvidenceComponent } from './components/evidence/evidence.component';
import { RelatedComponent } from './components/related/related.component';
import { AdviseComponent } from './components/advise/advise.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'active',
        component: ActivePostsComponent,
    },
    {
        path: 'inactive',
        component: InactivePostsComponent,
    },
    {
        path: 'post/:id',
        component: PostDetailsComponent,
    },
    {
        path: 'editPost/:id',
        component: EditPostComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EvidenceComponent,
        RelatedComponent,
        AdviseComponent,
        NavbarComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        PostDetailsComponent,
        EditPostComponent,
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
