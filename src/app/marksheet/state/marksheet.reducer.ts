import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as MarksheetActions from './marksheet.actions';
import * as AppState from '../../state/app.state';
import { Marks } from '../marksheet.interface';

export interface MarksheetState {
    markList: Marks[];
    editId : null | number;
    error: null | string,
    success: null | string
}

// Extend the current state with root state as module is lazy loaded
export interface State extends AppState.State {
    marksheet: MarksheetState
}

const initialState: MarksheetState = {
    markList: [],
    editId : null,
    error: null,
    success: null
}

const marksheetReducer = createReducer<MarksheetState>(
    initialState,
    // on(MarksheetActions.addRecordAPI, (state, action): MarksheetState => {
    //    return { 
    //        ...state,
    //         markList: [...state.markList, action.marks]
    //    }
    // }),
    on(MarksheetActions.deleteRecord, (state, action): MarksheetState => {
        let records = [...state.markList];      //create a copy
        records.splice(action.id, 1);           //update the copy
        return {
            ...state,
            markList: [...records]             //assign the copy back again
        }
    }),
    on(MarksheetActions.setEditId, (state, action): MarksheetState => {
        return {
            ...state,
            editId: action.id
        }
    }),
    on(MarksheetActions.saveRecord, (state, action): MarksheetState => {
        let records = [...state.markList];
        records.splice(action.id, 1, action.marks);
        return {
            ...state,
            markList: [...records]
        }
    }),
    on(MarksheetActions.loadMarksheetAPISuccess, (state, action): MarksheetState => {
        return {
            ...state,
            markList: action.markList,
            error: null,
            success: null
        }
    }),
    on(MarksheetActions.loadMarksheetAPIFailure, (state, action): MarksheetState => {
        return {
            ...state,
            markList: [...state.markList],
            error: action.error
        }
    }),
    on(MarksheetActions.addRecordAPISuccess, (state, action): MarksheetState => {
        return {
            ...state,
            success: action.success
        }
    }),
    on(MarksheetActions.addRecordAPIFailure, (state, action): MarksheetState => {
        return {
            ...state,
            error: action.error
        }
    })
);

//selector for feature slice only
const getMarksheetFeatureState = createFeatureSelector<MarksheetState>('marksheet');

export const getMarkList = createSelector(
    getMarksheetFeatureState,   //feature slice,
    state => state.markList     //projector function
);

export const getEditId = createSelector(
    getMarksheetFeatureState,   //feature slice,
    state => state.editId     //projector function
);

export const getError = createSelector(
    getMarksheetFeatureState,   //feature slice,
    state => state.error     //projector function
);

export const getSuccess = createSelector(
    getMarksheetFeatureState,   //feature slice,
    state => state.success     //projector function
);


export function reducer(state: MarksheetState | undefined, action: Action) {
    return marksheetReducer(state, action);
}

export const featureKey = 'marksheet';
