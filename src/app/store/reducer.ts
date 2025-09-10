import { createReducer, on } from "@ngrx/store";
import { Department } from "./model";
import { loadDepartment, loadDepartmentSuccess } from "./action";


export interface DepartmentState {
    departments: Department[];
    loading: boolean 
}

export const intialState : DepartmentState = {
    departments : [],
    loading : false
}

export const departmentReducer = createReducer(
    intialState,
    on(loadDepartment , state => ({
        ...state,
        loading : false
    })),
    on(loadDepartmentSuccess , (state , {departments}) => ({
        ...state,
        departments,
        loading :true
    })),
);