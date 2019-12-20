import { DataPlanCriteriaBase } from './data_plan_criteria_base';

export interface ProductActionEventCriteria extends DataPlanCriteriaBase {
    action: string;
}
