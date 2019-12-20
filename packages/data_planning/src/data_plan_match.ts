import { DataPlanMatchType } from './types';
import {
    DataPlanCriteriaBase,
    CustomEventCriteria,
    BreadcrumbEventCriteria,
    DataPlanCriteria,
} from './criteria';

export interface DataPlanMatch {
    type: DataPlanMatchType;
    criteria?: DataPlanCriteria;
}
