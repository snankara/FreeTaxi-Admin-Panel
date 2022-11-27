import { DriverListResponseModel } from './../models/response-models/driver-list-response-model';
import { DriverCreateResponseModel } from './../models/response-models/driver-create-response-model';
import { MappingPair, MapperConfiguration } from "@dynamic-mapper/mapper";

export const CreateResponseToListResponse = new MappingPair<DriverCreateResponseModel, DriverListResponseModel>();

export const mapper = new MapperConfiguration(configure => {
    configure.createAutoMap(CreateResponseToListResponse, {});
    
}).createMapper();