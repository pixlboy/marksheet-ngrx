import * as MarksheetActions from './marksheet.actions';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { MarksheetService } from '../marksheet.service';
import { Marks } from '../marksheet.interface';

@Injectable()

export class MarksheetEffects {

    constructor(
        private actions$: Actions,
        private marksheetService: MarksheetService
    ){}

    loadMarksheet$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(MarksheetActions.loadMarksheetAPI),
            mergeMap(() => this.marksheetService.getMarksheet().pipe(
                map((markList: Marks[]) => MarksheetActions.loadMarksheetAPISuccess({ markList })),
                catchError((error: string) => of(MarksheetActions.loadMarksheetAPIFailure({ error })))
            ))
        )
    });

    addRecord$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(MarksheetActions.addRecordAPI),
            mergeMap((action) => this.marksheetService
                .addRecord(action.marks)
                .pipe(
                    map((success: string) => MarksheetActions.addRecordAPISuccess({ success })),
                    catchError((error: string) => of(MarksheetActions.addRecordAPIFailure({ error }))
                ))
            ))
    });

}