import { inject, Injectable } from '@angular/core';
import { DepartmentService } from '../service/department.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { loadDepartment, loadDepartmentSuccess } from './action';
import { error } from 'console';

@Injectable()
export class DepartmentEffects {
  action$ = inject(Actions);
  departmentService = inject(DepartmentService);
  
loadDepartments$ = createEffect(() =>
  this.action$.pipe(
    ofType(loadDepartment),
    mergeMap(() =>
      this.departmentService.getDepartments().pipe(
        map((departments: any) => loadDepartmentSuccess({ departments }))
      )
    )
  )
);

}
