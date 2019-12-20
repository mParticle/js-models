import { DataPlanValidatorType } from './types';

export interface DataPlanValidator {
    type: DataPlanValidatorType.JSONSchema;
    // tslint:disable-next-line: no-any
    definition?: { [key: string]: any };
}
