import { createAction, props } from '@ngrx/store';
import { Marks } from '../marksheet.interface';

export const addRecord = createAction(
    '[Marksheet] Add Marks', 
    props<{
        marks: Marks
    }>()
);

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