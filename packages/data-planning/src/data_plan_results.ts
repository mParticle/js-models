import { Batch } from '@mparticle/event-models';
import { ValidationResultEvent } from './validation_result_event';

export interface DataPlanResults {
    results?: ValidationResultEvent[];
    batch?: Batch;
}
