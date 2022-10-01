import { DriverListResponseModel } from '../models/response-models/driver-list-response-model';
import { createAction, props } from "@ngrx/store";

export const invokeRetrieveAll = createAction('[Driver API] Invoke Retrieve All');

export const retrieveAllSuccess = createAction(
    '[Driver API] Retrieve All Success',
    props<{ drivers: DriverListResponseModel[] }>()
);