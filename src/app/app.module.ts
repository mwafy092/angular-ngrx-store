import { EnvironmentInjector, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostsModule } from './posts/posts/posts.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PostsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: true,
      traceLimit: 75,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
