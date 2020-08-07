import { Action, createReducer, on } from '@ngrx/store';
import * as MarksheetActions from './marksheet.actions';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

export interface State {
    markList: Array<object>
}

export const initialState: State = {
    markList: []
};

const marksheetReducer = createReducer(
    initialState,
    on(MarksheetActions.addMarks, state => ({ 
        ...state, 
        markList: [{name:'rachit', marks: 100}]
    })
    ),
);

function addMarks(state){
    console.log(state);
    // list.push(item);
    // return list;
}
    
export function reducer(state: State | undefined, action: Action) {
    return marksheetReducer(state, action);
}

export const scoreboardFeatureKey = 'marksheet';
