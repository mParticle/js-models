import {
    ApplicationStateTransitionEventCriteria,
    BreadcrumbEventCriteria,
    CrashReportEventCriteria,
    CustomEventCriteria,
    FirstRunEventCriteria,
    NetworkPerformanceEventCriteria,
    OptOutEventCriteria,
    ScreenViewEventCriteria,
    ProductActionEventCriteria,
    ProductImpressionEventCriteria,
    PromotionActionEventCriteria,
    SessionEndEventCriteria,
    SessionStartEventCriteria,
    UninstallEventCriteria,
    UserAttributesCriteria,
    UserIdentitiesCriteria,
} from '../src/criteria';
import { EventType, DataPlanMatchType } from '../src/types';
import {
    CustomEventDataCustomEventTypeEnum,
    PromotionActionActionEnum,
} from '@mparticle/event-models';

describe('Data Plan Criteria', () => {
    it('returns a ApplicationStateTransition', () => {
        const criteria: ApplicationStateTransitionEventCriteria = {
            application_transition_type: 'application_initialized',
        };
        expect(criteria.application_transition_type).toBe(
            'application_initialized'
        );
    });
    it('returns a Breadcrumb', () => {
        const criteria: BreadcrumbEventCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns a CrashReport', () => {
        const criteria: CrashReportEventCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns a CustomEvent', () => {
        const criteria: CustomEventCriteria = {
            event_name: 'foo',
            custom_event_type: CustomEventDataCustomEventTypeEnum.other,
        };
        expect(criteria.event_name).toBe('foo');
        expect(criteria.custom_event_type).toBe('other');
    });
    it('returns a FirstRun', () => {
        const criteria: FirstRunEventCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns a NetworkPerformance', () => {
        const criteria: NetworkPerformanceEventCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns an OptOut', () => {
        const criteria: OptOutEventCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns a ScreenView', () => {
        const criteria: ScreenViewEventCriteria = {
            screen_name: 'foo',
        };
        expect(criteria.screen_name).toBe('foo');
    });
    it('returns a ProductAction', () => {
        const criteria: ProductActionEventCriteria = {
            action: 'add_to_cart',
        };
        expect(criteria.action).toBe('add_to_cart');
    });
    it('returns a ProductImpression', () => {
        const criteria: ProductImpressionEventCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns a PromotionAction', () => {
        const criteria: PromotionActionEventCriteria = {
            action: PromotionActionActionEnum.click,
        };
        expect(criteria.action).toBe('click');
    });
    it('returns a SessionEnd', () => {
        const criteria: SessionEndEventCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns a SessionStart', () => {
        const criteria: SessionStartEventCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns a UninstallCriteria', () => {
        const criteria: UninstallEventCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns a UserAttributes', () => {
        const criteria: UserAttributesCriteria = {};
        expect(criteria).toEqual({});
    });
    it('returns a UserIdentities', () => {
        const criteria: UserIdentitiesCriteria = {};
        expect(criteria).toEqual({});
    });
});
