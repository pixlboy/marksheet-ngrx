import { createAction, props } from '@ngrx/store';
import { IMarks } from '../marksheet.interface';

export const addMarks = createAction('[Marksheet] Add Marks', props<{
    value: IMarks
}>());