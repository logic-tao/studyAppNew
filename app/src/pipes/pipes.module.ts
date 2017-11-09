import { NgModule } from '@angular/core';
import { PipeFilterPipe } from './../pipes/pipe-filter/pipe-filter';
@NgModule({
	declarations: [PipeFilterPipe],
	imports: [],
	exports: [PipeFilterPipe]
})
export class PipesModule {}
