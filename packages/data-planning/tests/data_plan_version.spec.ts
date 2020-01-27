import { DataPlanVersion } from '../src/data_plan_version';
import { ActivatedEnvironment } from '../src/types';

describe('Data Plan Versions', () => {
    it('should be a valid DataPlanVersion', () => {
        const dataPlanVersion: DataPlanVersion = {};
        dataPlanVersion.version = 1;
        dataPlanVersion.version_description =
            'This is a test data plan version';
        dataPlanVersion.version_document = {};
        dataPlanVersion.data_plan_id = 'test-id';
        dataPlanVersion.data_plan_name = 'This is a test plan';

        dataPlanVersion.activated = true;
        dataPlanVersion.activated_on = '2019-11-03T05:00:00.000Z';
        dataPlanVersion.activated_environment =
            ActivatedEnvironment.Development;

        dataPlanVersion.created_on = '2019-11-04T05:00:00.000Z';
        dataPlanVersion.created_by = 'someuser@mparticle.com';
        dataPlanVersion.last_modified_on = '2019-11-05T05:00:00.000Z';
        dataPlanVersion.last_modified_by = 'anotheruser@mparticle.com';

        expect(dataPlanVersion.activated).toBeTruthy();
        expect(dataPlanVersion.activated_environment).toBe('development');
        expect(dataPlanVersion.activated_on).toBe('2019-11-03T05:00:00.000Z');
        expect(dataPlanVersion.data_plan_id).toBe('test-id');
        expect(dataPlanVersion.version).toBe(1);
        expect(dataPlanVersion.version_description).toBe(
            'This is a test data plan version'
        );
        expect(dataPlanVersion.version_document).toEqual({});
        expect(dataPlanVersion.data_plan_name).toBe('This is a test plan');
        expect(dataPlanVersion.created_on).toBe('2019-11-04T05:00:00.000Z');
        expect(dataPlanVersion.created_by).toBe('someuser@mparticle.com');
        expect(dataPlanVersion.last_modified_on).toBe(
            '2019-11-05T05:00:00.000Z'
        );
        expect(dataPlanVersion.last_modified_by).toBe(
            'anotheruser@mparticle.com'
        );
    });
});
