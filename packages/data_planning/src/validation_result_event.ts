import { DataPlanMatch } from './data_plan_match';
import { ValidationError } from './validation_error';

export interface ValidationResultEvent {
    event_type?: string;
    // tslint:disable-next-line: no-any
    data?: { [key: string]: any };
    match?: DataPlanMatch;
    validation_errors?: ValidationError[];
}
