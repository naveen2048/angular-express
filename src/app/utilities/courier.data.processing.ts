import { Injectable } from '@angular/core';
import { delhiveryModel } from '../models/delhivery.model';
import { aramaxCodModel } from '../models/aramax.cod.model';
import { aramaxPP } from '../models/aramax.pp.model';

@Injectable()
export class CourierDataProcessing {

    processForDelhivery(data:any): delhiveryModel[] {

        return data;
    }

    processAramaxCod(data:any) : aramaxCodModel[] {

        return data;
    }

    processAramaxPP(data:any): aramaxPP[] {
        
        return data;
    }
}