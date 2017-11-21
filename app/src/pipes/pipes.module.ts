import { NgModule } from '@angular/core';
import { PipeFilterPipe } from './../pipes/pipe-filter/pipe-filter';
import { OrderByPipe } from './order-by/order-by';
@NgModule({
	declarations: [PipeFilterPipe,
    OrderByPipe,
    OrderByPipe],
	imports: [],
	exports: [PipeFilterPipe,
    OrderByPipe,
    OrderByPipe]
})
export class PipesModule {}
