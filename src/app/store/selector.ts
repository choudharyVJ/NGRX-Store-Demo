import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DepartmentState } from "./reducer";


export const selectDepartmentState = createFeatureSelector<DepartmentState>('departments')

export const selectDepartments = createSelector(
    selectDepartmentState,
    (state: any) => state.departments
);

export const selectLoading = createSelector(
    selectDepartmentState,
    (state: any) => state.loading
);