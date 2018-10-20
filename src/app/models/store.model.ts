import { courierDataModel } from './courier.model';
import { vendorModel } from './vendor.model';

export interface IStore {
    store:string,
    couriers: courierDataModel[],
    vendors: vendorModel[]
  }