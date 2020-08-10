import { createAction, props } from '@ngrx/store';
import { Marks } from '../marksheet.interface';

export const deleteRecord = createAction(
    '[Marksheet] Delete Marks', 
    props<{
        id: number
    }>()
);

export const setEditId = createAction(
    '[Marksheet] Set Edit Id',
    props<{
        id: number
    }>()
);

export const saveRecord = createAction(
    '[Marksheet] Save Edit Record',
    props<{
        id: number,
        marks: Marks
    }>()
);

export const loadMarksheetAPI = createAction(
    '[Marksheet API] Load Marksheet'
);

export const loadMarksheetAPISuccess = createAction(
    '[Marksheet API] Load Marksheet Success',
    props<{
        markList: Marks[],
    }>()
);

export const loadMarksheetAPIFailure = createAction(
    '[Marksheet API] Load Marksheet Failed',
    props<{
        error: string,
    }>()
);

export const addRecordAPI = createAction(
    '[Marksheet API] Add Record',
    props<{
        marks: Marks
    }>()
);

export const addRecordAPISuccess = createAction(
    '[Marksheet API] Add Record Success',
    props<{
        success: string
    }>()
);

export const addRecordAPIFailure = createAction(
    '[Marksheet API] Add Record Failed',
    props<{
        error: string
    }>()
);