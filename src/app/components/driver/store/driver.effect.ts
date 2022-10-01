import { selectDrivers } from './driver.selectors';
import { invokeRetrieveAll, retrieveAllSuccess } from './driver.actions';
import { DriverService } from './../service/driver.service';
import { Injectable } from "@angular/core";
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';

@Injectable()
export class DriverEffect {

    constructor(
        private driverService: DriverService,
        private store: Store,
        private actions$: Actions
    ) { }

    retrieveAllDrivers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(invokeRetrieveAll),
            withLatestFrom(this.store.pipe(select(selectDrivers))),
            mergeMap(([, driversInStore]) => {
                return driversInStore.length > 0 ? EMPTY : this.driverService
                    .retrieveAll()
                    .pipe(map((response) => retrieveAllSuccess({ drivers: response })));
            })
        )
    );
}
