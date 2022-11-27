import { DriverListResponseModel } from './../models/response-models/driver-list-response-model';
import { createFeature, createReducer, on } from '@ngrx/store';
import { getDataActions, createDataActions } from './driver.actions';

export const DRIVER_FEATURE_KEY = 'driver'

export interface DriverListState {
    data: DriverListResponseModel[] | null
    loading: boolean
    loaded: boolean
}

const initialState: DriverListState = {
    data: null,
    loading: false,
    loaded: false
}

export const driverFeature = createFeature({
    name: DRIVER_FEATURE_KEY,
    reducer: createReducer(
        initialState,
        on(getDataActions.invokeRetrieveAll, (state) => ({ ...state, loading: true, loaded: false })),
        on(getDataActions.retrieveAllSuccess, (state, { ...data }) => ({ ...state, ...data, loading: false, loaded: true })),
        on(getDataActions.retrieveAllFail, (state) => ({ ...state, loading: false, loaded: false })),

        on(createDataActions.invokeCreate, (state) => ({ ...state, loading: true, loaded: false })),
        on(createDataActions.createSuccess, (state, { createdDriver }) => {
            let newState = [...state.data];
            newState.unshift(createdDriver)
            return { data: newState, loading: false, loaded: true };
        }),

        on(createDataActions.createFail, (state) => ({ ...state, loading: false, loaded: false }))
    )

})