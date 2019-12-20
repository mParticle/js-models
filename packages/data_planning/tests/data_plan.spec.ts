import { DataPlan } from '../src/data_plan';

describe('DataPlan', () => {
    it('should be valid', () => {
        const dataPlan: DataPlan = {};

        dataPlan.data_plan_id = 'test-id';
        dataPlan.data_plan_name = 'This is a test plan name';
        dataPlan.data_plan_description = 'This is a test plan description';
        dataPlan.data_plan_versions = [];

        dataPlan.created_on = '2019-11-04T05:00:00.000Z';
        dataPlan.created_by = 'someuser@mparticle.com';
        dataPlan.last_modified_on = '2019-11-05T05:00:00.000Z';
        dataPlan.last_modified_by = 'anotheruser@mparticle.com';

        expect(dataPlan.data_plan_id).toBe('test-id');
        expect(dataPlan.data_plan_name).toBe('This is a test plan name');
        expect(dataPlan.data_plan_description).toBe(
            'This is a test plan description'
        );
        expect(dataPlan.created_on).toBe('2019-11-04T05:00:00.000Z');
        expect(dataPlan.created_by).toBe('someuser@mparticle.com');
        expect(dataPlan.last_modified_on).toBe('2019-11-05T05:00:00.000Z');
        expect(dataPlan.last_modified_by).toBe('anotheruser@mparticle.com');
        expect(dataPlan.data_plan_versions).toEqual([]);
    });
});
