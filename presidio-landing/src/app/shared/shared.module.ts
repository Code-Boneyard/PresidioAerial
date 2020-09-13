import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { MaterialModule } from './vendors/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCYTxkREIgB7sNozUDIhlVNNDwXg9SS3wk' }),
    NgxPageScrollCoreModule.forRoot({ duration: 800 }),
    NgxPageScrollModule
  ],
  exports: [
    YouTubePlayerModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ]
})
export class SharedModule { }
