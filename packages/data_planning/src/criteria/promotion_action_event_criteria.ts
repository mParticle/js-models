import { PromotionActionActionEnum } from '@mparticle/event-models';
import { DataPlanCriteriaBase } from './data_plan_criteria_base';

export interface PromotionActionEventCriteria extends DataPlanCriteriaBase {
    action: PromotionActionActionEnum;
}
