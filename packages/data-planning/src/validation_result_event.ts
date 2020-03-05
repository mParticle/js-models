import { DataPlanMatch } from './data_plan_match';
import { ValidationError } from './validation_error';
import { EventTypeEnum } from '@mparticle/event-models';

export enum ValidationResultEventEventTypeEnum {
    ValidationResult = 'validation_result',
}

export type ValidationResultEventEventType = ValidationResultEventEventTypeEnum.ValidationResult;

export interface ValidationResultEventData {
    match?: DataPlanMatch;
    validation_errors?: ValidationError[];
}

export interface ValidationResultEvent {
    event_type?: EventTypeEnum.validationResult;
    data?: ValidationResultEventData;
}
