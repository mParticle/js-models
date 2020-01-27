import { DataPlanMatch } from './data_plan_match';

export interface DataPlanPointSchema {
    match: DataPlanMatch;
    // tslint:disable-next-line: no-any
    schema: { [key: string]: any };
}
