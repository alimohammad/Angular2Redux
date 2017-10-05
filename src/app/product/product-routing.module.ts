import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  }
];

export const productRouting = RouterModule.forChild(routes);
