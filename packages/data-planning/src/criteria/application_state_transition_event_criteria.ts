import { DataPlanCriteriaBase } from './data_plan_criteria_base';

export interface ApplicationStateTransitionEventCriteria
    extends DataPlanCriteriaBase {
    application_transition_type: string;
}
