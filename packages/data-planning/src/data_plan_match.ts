import { DataPlanMatchType } from './types';
import { DataPlanCriteria } from './criteria';

export interface DataPlanMatch {
    type: DataPlanMatchType;
    criteria?: DataPlanCriteria;
}
