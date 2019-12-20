import { DataPlanDocument } from '../src/data_plan_document';

describe('Data Plan Document', () => {
    it('should be a valid Document', () => {
        const document: DataPlanDocument = {};

        document.data_points = [];
        document.settings = {};

        expect(document.data_points).toHaveLength(0);
        expect(document.settings).toEqual({});
    });
    it('should accept settings', () => {
        const document: DataPlanDocument = {};

        document.data_points = [];
        document.settings = {
            validation_actions: {
                event: 'allow',
                event_attribute: 'allow',
                user_attribute: 'allow',
            },
        };

        expect(document.data_points).toHaveLength(0);
        expect(document.settings).toEqual({
            validation_actions: {
                event: 'allow',
                event_attribute: 'allow',
                user_attribute: 'allow',
            },
        });
    });
});
