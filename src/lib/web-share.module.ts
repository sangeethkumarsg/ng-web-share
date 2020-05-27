import { NgModule } from '@angular/core';
import { WebShareComponent } from './web-share.component';
import { WebShareService } from './web-share.service';



@NgModule({
  declarations: [WebShareComponent],
  imports: [
  ],
  exports: [WebShareComponent],
  providers: [WebShareService]
})
export class WebShareModule { }
