import { NgModule } from '@angular/core';

import { ViewsModule } from './views/views.module';

@NgModule({
  imports:[ViewsModule],
  exports: [ViewsModule]
})
export class SemanticUiModule { }
