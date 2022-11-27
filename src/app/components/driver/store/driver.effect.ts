import { CreateResponseToListResponse, mapper } from './../profiles/mapping.profiles';
import { selectDrivers } from './driver.selectors';
import { createDataActions, getDataActions } from './driver.actions';
import { DriverService } from './../service/driver.service';
import { Injectable } from "@angular/core";
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, withLatestFrom, of, exhaustMap } from 'rxjs';

@Injectable()
export class DriverEffect {

    constructor(
        private driverService: DriverService,
        private store: Store,
        private actions$: Actions
    ) { }

    retrieveAllDrivers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getDataActions.invokeRetrieveAll),
            withLatestFrom(this.store.pipe(select(selectDrivers))),
            mergeMap(([, driversInStore]) => {
                return driversInStore.data && driversInStore.data.length > 0 ? EMPTY : this.driverService
                    .retrieveAll()
                    .pipe(
                        map((response) => {
                            return getDataActions.retrieveAllSuccess({ drivers: response });
                        }),
                        catchError((error) => {
                            return of(getDataActions.retrieveAllFail({error}))
                        })
                    )
            }),
        )
    );

    createDriver$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createDataActions.invokeCreate),
            exhaustMap((action) => {
                return this.driverService.create(action.driverToBeCreated).pipe(
                    map((data) => {
                        let mappedResponseModel = mapper.map(CreateResponseToListResponse, data)
                        return createDataActions.createSuccess({ createdDriver: mappedResponseModel })
                    }),
                    catchError((error) => {
                        return of(createDataActions.createFail({error}))
                    })
                )
            })
        )
    )
}
