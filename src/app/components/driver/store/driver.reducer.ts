import { DriverListResponseModel } from './../models/response-models/driver-list-response-model';
import { createReducer, on } from '@ngrx/store';
import { retrieveAllSuccess } from './driver.actions';

export const initialState: DriverListResponseModel[] = []

export const driverReducer = createReducer(
    initialState,
    on(retrieveAllSuccess, (state, { drivers }) => {
        return drivers;
    })
);