import { DriverListState, DRIVER_FEATURE_KEY } from './driver.reducer';
import { createFeatureSelector } from "@ngrx/store";

export const selectDrivers = createFeatureSelector<DriverListState>(DRIVER_FEATURE_KEY)

