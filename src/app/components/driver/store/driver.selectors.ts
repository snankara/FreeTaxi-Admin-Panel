import { DriverListResponseModel } from './../models/response-models/driver-list-response-model';
import { createFeatureSelector } from "@ngrx/store";

export const selectDrivers = createFeatureSelector<DriverListResponseModel[]>('drivers')