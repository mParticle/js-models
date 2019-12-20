import { Batch } from '@mparticle/event-models';

export interface DataPlanResults {
    // tslint:disable-next-line: no-any
    results?: Array<{ [key: string]: any }>;
    batch?: Batch;
}
