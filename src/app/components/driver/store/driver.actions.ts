import { DriverCreateRequestModel } from './../models/request-models/driver-create-request-model';
import { DriverCreateResponseModel } from './../models/response-models/driver-create-response-model';
import { DriverListResponseModel } from '../models/response-models/driver-list-response-model';
import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const getDataActions = createActionGroup({
    source: 'Driver API',
    events: {
        'Invoke Retrieve All': emptyProps(),
        'Retrieve All Success' : props<{ drivers: DriverListResponseModel[] }>(),
        'Retrieve All Fail': props<{ error: Error }>()
    }
})

export const createDataActions = createActionGroup({
    source: 'Driver API',
    events: {
        'Invoke Create': props<{ driverToBeCreated: DriverCreateRequestModel }>(),
        'Create Success': props<{ createdDriver: DriverCreateResponseModel }>(),
        'Create Fail': props<{ error: Error }>()
    }
})
