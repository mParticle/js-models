import { DataPlanPoint } from '../src/data_plan_point';
import { DataPlanMatchType, DataPlanValidatorType } from '../src/types';

describe('Data Plan Point', () => {
    it('returns a valid DataPoint', () => {
        const point: DataPlanPoint = {};

        expect(point.description).toBeUndefined();
        expect(point.match).toBeUndefined();
        expect(point.validator).toBeUndefined();
    });

    it('returns a valid DataPoint with full parameters', () => {
        const point: DataPlanPoint = {};
        point.description = 'This is a test data point';
        point.match = {
            type: DataPlanMatchType.OptOut,
        };
        point.validator = {
            type: DataPlanValidatorType.JSONSchema,
        };

        expect(point.description).toBe('This is a test data point');
        expect(point.match).toEqual({
            type: 'opt_out',
        });
        expect(point.validator).toEqual({
            type: 'json_schema',
        });
    });
});
