import { DataPlanCriteriaBase } from './data_plan_criteria_base';
import { CustomEventDataCustomEventTypeEnum } from '@mparticle/event-models';

export interface CustomEventCriteria extends DataPlanCriteriaBase {
    event_name: string;
    custom_event_type: CustomEventDataCustomEventTypeEnum;
}
