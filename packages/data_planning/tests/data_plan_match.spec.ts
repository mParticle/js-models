import { DataPlanMatch } from '../src/data_plan_match';
import { DataPlanMatchType } from '../src/types';
import { CustomEventCriteria } from '../src/criteria';

describe('Data Plan Match', () => {
    it('should be a valid DataPlanMatch', () => {
        const match: DataPlanMatch = {
            type: DataPlanMatchType.Breadcrumb,
        };

        expect(match.type).toBe('breadcrumb');
        expect(match.criteria).toBeUndefined();
    });

    it('should allow criteria', () => {
        const criteria: CustomEventCriteria = {
            event_name: 'My Custom Event',
            custom_event_type: 'location',
            match_type: DataPlanMatchType.CustomEvent,
        };

        const match: DataPlanMatch = {
            type: DataPlanMatchType.CustomEvent,
        };

        match.criteria = criteria as CustomEventCriteria;

        expect(match.type).toBe('custom_event');
        expect(match.criteria.match_type).toBe('custom_event');
        expect(match.criteria.event_name).toBe('My Custom Event');
        expect(match.criteria.custom_event_type).toBe('location');
    });
});
