import { DataPlanVersion } from './data_plan_version';

/**
 * DataPlan is the primary class that will contain everyting about a Data Plan
 */
export interface DataPlan {
    created_on?: string;
    created_by?: string;
    last_modified_by?: string;
    last_modified_on?: string;

    data_plan_id?: string;
    data_plan_name?: string;
    data_plan_description?: string;

    data_plan_versions?: DataPlanVersion[];
}
