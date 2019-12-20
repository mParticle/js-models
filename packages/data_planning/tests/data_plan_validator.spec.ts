import { DataPlanValidator } from '../src/data_plan_validator';
import { DataPlanValidatorType } from '../src/types';

describe('DataPlanValidator', () => {
    it('returns a valid DataPlanValidator', () => {
        const validator: DataPlanValidator = {
            type: DataPlanValidatorType.JSONSchema,
            definition: {
                properties: {
                    data: {
                        additionalProperties: false,
                        properties: {
                            event_name: {
                                const: 'This is a test',
                            },
                            custom_event_type: {
                                const: 'location',
                            },
                        },
                        required: ['custom_event_type', 'event_name'],
                    },
                },
            },
        };

        expect(validator.type).toBe('json_schema');
        expect(validator.definition).toEqual({
            properties: {
                data: {
                    additionalProperties: false,
                    properties: {
                        event_name: {
                            const: 'This is a test',
                        },
                        custom_event_type: {
                            const: 'location',
                        },
                    },
                    required: ['custom_event_type', 'event_name'],
                },
            },
        });
    });
});
