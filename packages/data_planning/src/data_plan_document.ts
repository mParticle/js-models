import { DataPlanPoint } from './data_plan_point';
import { DataPlanSettings } from './data_plan_settings';

/**
 * This is a data plan document
 */
export interface DataPlanDocument {
    data_points?: DataPlanPoint[];
    // tslint:disable-next-line: no-any
    settings?: DataPlanSettings;
}
