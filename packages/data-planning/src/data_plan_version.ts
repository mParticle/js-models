import { ActivatedEnvironment } from './types';
import { DataPlanDocument } from './data_plan_document';

/**
 * This is a data plan version
 */
export interface DataPlanVersion {
    created_on?: string;
    created_by?: string;
    last_modified_by?: string;
    last_modified_on?: string;

    data_plan_id?: string;
    data_plan_name?: string;

    version?: number;
    version_description?: string | null;
    version_document?: DataPlanDocument;

    activated_on?: string;
    activated_environment?: ActivatedEnvironment;
    activated?: boolean;
}
