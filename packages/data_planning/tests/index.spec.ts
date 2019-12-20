import { fake_plans, fake_data_plan } from './fixtures/data_plans';
import { sample_data_plan } from './fixtures/sample_data_plan';
import { sample_data_plans } from './fixtures/sample_data_plans';
import {
    DataPlan,
    DataPlanVersion,
    DataPlanDocument,
    DataPlanPoint,
} from '../src';

describe('DataPlanning', () => {
    it('should build a single data plan with real data', () => {
        const dataPlan: DataPlan = {};
        dataPlan.data_plan_id = sample_data_plan.data_plan_id;
        dataPlan.data_plan_name = sample_data_plan.data_plan_name;
        dataPlan.data_plan_description = sample_data_plan.data_plan_description;
        dataPlan.created_by = sample_data_plan.created_by;
        dataPlan.created_on = sample_data_plan.created_on;
        dataPlan.last_modified_by = sample_data_plan.last_modified_by;
        dataPlan.last_modified_on = sample_data_plan.last_modified_on;

        dataPlan.data_plan_versions = [];

        sample_data_plan.data_plan_versions.forEach(
            (planVersion: DataPlanVersion) => {
                const version: DataPlanVersion = {};
                version.data_plan_id = planVersion.data_plan_id;
                version.data_plan_name = planVersion.data_plan_name;
                version.version = planVersion.version;
                version.version_description = planVersion.version_description;
                version.created_by = planVersion.created_by;
                version.created_on = planVersion.created_on;
                version.last_modified_by = planVersion.last_modified_by;
                version.last_modified_on = planVersion.last_modified_on;
                version.activated = planVersion.activated;
                version.activated_environment =
                    planVersion.activated_environment;
                version.activated_on = planVersion.activated_on;

                const document: DataPlanDocument = {};
                document.data_points = [];
                planVersion?.version_document?.data_points?.forEach(
                    (point: DataPlanPoint) => {
                        const dataPoint: DataPlanPoint = {};
                        dataPoint.description = point.description;
                        dataPoint.match = point.match;
                        dataPoint.validator = point.validator;

                        document.data_points?.push(dataPoint);
                    }
                );
                if (
                    planVersion.version_document &&
                    planVersion.version_document.settings
                ) {
                    document.settings = planVersion.version_document.settings;
                }

                version.version_document = document;

                dataPlan?.data_plan_versions?.push(version);
            }
        );

        expect(dataPlan).toEqual(sample_data_plan);
    });

    it('should build a data plan with fake data', () => {
        const dataPlan: DataPlan = {};
        dataPlan.data_plan_id = fake_data_plan.data_plan_id;
        dataPlan.data_plan_name = fake_data_plan.data_plan_name;
        dataPlan.data_plan_description = fake_data_plan.data_plan_description;
        dataPlan.created_by = fake_data_plan.created_by;
        dataPlan.created_on = fake_data_plan.created_on;
        dataPlan.last_modified_by = fake_data_plan.last_modified_by;
        dataPlan.last_modified_on = fake_data_plan.last_modified_on;
        dataPlan.data_plan_versions = [];

        fake_data_plan.data_plan_versions.forEach(
            (planVersion: DataPlanVersion) => {
                const version: DataPlanVersion = {};
                version.data_plan_id = planVersion.data_plan_id;
                version.data_plan_name = planVersion.data_plan_name;
                version.version = planVersion.version;
                version.version_description = planVersion.version_description;
                version.created_by = planVersion.created_by;
                version.created_on = planVersion.created_on;
                version.last_modified_by = planVersion.last_modified_by;
                version.last_modified_on = planVersion.last_modified_on;
                version.activated = planVersion.activated;
                version.activated_environment =
                    planVersion.activated_environment;
                version.activated_on = planVersion.activated_on;

                const document: DataPlanDocument = {};
                document.data_points = [];

                planVersion?.version_document?.data_points?.forEach(
                    (point: DataPlanPoint) => {
                        const dataPoint: DataPlanPoint = {};
                        dataPoint.description = point.description;
                        dataPoint.match = point.match;
                        dataPoint.validator = point.validator;

                        document.data_points?.push(dataPoint);
                    }
                );

                version.version_document = document;

                dataPlan.data_plan_versions?.push(version);
            }
        );

        expect(dataPlan).toEqual(fake_data_plan);
    });

    it('should build data plans with real data', () => {
        sample_data_plans.forEach(plan => {
            const dataPlan: DataPlan = {};
            dataPlan.data_plan_id = plan.data_plan_id;
            dataPlan.data_plan_name = plan.data_plan_name;
            dataPlan.data_plan_description = plan.data_plan_description;
            dataPlan.created_by = plan.created_by;
            dataPlan.created_on = plan.created_on;
            dataPlan.last_modified_by = plan.last_modified_by;
            dataPlan.last_modified_on = plan.last_modified_on;
            dataPlan.data_plan_versions = [];

            plan.data_plan_versions?.forEach((planVersion: DataPlanVersion) => {
                const version: DataPlanVersion = {};
                version.data_plan_id = planVersion.data_plan_id;
                version.version = planVersion.version;
                version.version_description = planVersion.version_description;
                version.created_by = planVersion.created_by;
                version.created_on = planVersion.created_on;
                version.last_modified_by = planVersion.last_modified_by;
                version.last_modified_on = planVersion.last_modified_on;
                version.activated_environment =
                    planVersion.activated_environment;

                dataPlan?.data_plan_versions?.push(version);
            });

            expect(dataPlan).toEqual(plan);
        });
    });

    it('should build data plans with fake data', () => {
        fake_plans.forEach(plan => {
            const dataPlan: DataPlan = {};
            dataPlan.data_plan_id = plan.data_plan_id;
            dataPlan.data_plan_name = plan.data_plan_name;
            dataPlan.data_plan_description = plan.data_plan_description;
            dataPlan.created_by = plan.created_by;
            dataPlan.created_on = plan.created_on;
            dataPlan.last_modified_by = plan.last_modified_by;
            dataPlan.last_modified_on = plan.last_modified_on;
            dataPlan.data_plan_versions = [];

            plan.data_plan_versions.forEach((planVersion: DataPlanVersion) => {
                const version: DataPlanVersion = {};
                version.data_plan_id = planVersion.data_plan_id;
                version.data_plan_name = planVersion.data_plan_name;
                version.version = planVersion.version;
                version.version_description = planVersion.version_description;
                version.version_document = planVersion.version_document;
                version.created_by = planVersion.created_by;
                version.created_on = planVersion.created_on;
                version.last_modified_by = planVersion.last_modified_by;
                version.last_modified_on = planVersion.last_modified_on;
                version.activated = planVersion.activated;
                version.activated_environment =
                    planVersion.activated_environment;
                version.activated_on = planVersion.activated_on;

                dataPlan.data_plan_versions?.push(version);
            });

            expect(dataPlan).toEqual(plan);
        });
    });
});
