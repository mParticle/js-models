import { ValidationActionType } from './validation_action_type';

export interface DataPlanValidationAction {
    event: ValidationActionType;
    event_attribute: ValidationActionType;
    user_attribute: ValidationActionType;
}
