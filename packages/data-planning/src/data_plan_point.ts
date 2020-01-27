import { DataPlanMatch } from './data_plan_match';
import { DataPlanValidator } from './data_plan_validator';

export interface DataPlanPoint {
    description?: string;
    match?: DataPlanMatch;
    validator?: DataPlanValidator;
}
