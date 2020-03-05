import { DataPlanMatch } from '../src/data_plan_match';
import { DataPlanMatchType } from '../src/types';
import { CustomEventCriteria } from '../src/criteria';
import { CustomEventDataCustomEventTypeEnum } from '../../events/src';

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
            custom_event_type: CustomEventDataCustomEventTypeEnum.location,
        };

        const match: DataPlanMatch = {
            type: DataPlanMatchType.CustomEvent,
            criteria,
        };

        expect(match.type).toBe('custom_event');
        expect(criteria.event_name).toBe('My Custom Event');
        expect(criteria.custom_event_type).toBe('location');
    });
});
