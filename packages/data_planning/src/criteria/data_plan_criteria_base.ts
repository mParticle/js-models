import { DataPlanMatchType } from '../types';
import { CustomEventCriteria } from './custom_event_criteria';
import {
    ApplicationStateTransitionEventCriteria,
    BreadcrumbEventCriteria,
    CrashReportEventCriteria,
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
} from '.';

export interface DataPlanCriteriaBase {}

export type DataPlanCriteria =
    | ApplicationStateTransitionEventCriteria
    | BreadcrumbEventCriteria
    | CrashReportEventCriteria
    | CustomEventCriteria
    | FirstRunEventCriteria
    | NetworkPerformanceEventCriteria
    | OptOutEventCriteria
    | ScreenViewEventCriteria
    | ProductActionEventCriteria
    | ProductImpressionEventCriteria
    | PromotionActionEventCriteria
    | SessionEndEventCriteria
    | SessionStartEventCriteria
    | UninstallEventCriteria
    | UserAttributesCriteria
    | UserIdentitiesCriteria;
