import faker from 'faker';

import { ActivatedEnvironment, DataPlanMatchType } from '../../src/types';

// tslint:disable-next-line: no-any
const MatchCombos: { [key: string]: any } = {
    [DataPlanMatchType.Unknown]: {
        type: DataPlanMatchType.Unknown,
    },
    [DataPlanMatchType.SessionStart]: {
        type: DataPlanMatchType.SessionStart,
    },
    [DataPlanMatchType.SessionEnd]: {
        type: DataPlanMatchType.SessionEnd,
    },
    [DataPlanMatchType.ScreenView]: {
        type: DataPlanMatchType.ScreenView,
        criteria: {
            screen_name: faker.lorem.slug(),
        },
    },
    [DataPlanMatchType.CustomEvent]: {
        type: DataPlanMatchType.CustomEvent,
        criteria: {
            event_name: faker.lorem.slug(),
            custom_event_type: 'other',
        },
    },
    [DataPlanMatchType.CrashReport]: {
        type: DataPlanMatchType.CrashReport,
    },
    [DataPlanMatchType.OptOut]: {
        type: DataPlanMatchType.OptOut,
    },
    [DataPlanMatchType.FirstRun]: {
        type: DataPlanMatchType.FirstRun,
    },
    [DataPlanMatchType.ApplicationStateTransition]: {
        type: DataPlanMatchType.ApplicationStateTransition,
        criteria: {
            application_transition_type: faker.lorem.slug(),
        },
    },
    [DataPlanMatchType.NetworkPerformance]: {
        type: DataPlanMatchType.NetworkPerformance,
    },
    [DataPlanMatchType.Breadcrumb]: {
        type: DataPlanMatchType.Breadcrumb,
    },
    [DataPlanMatchType.UserAttributes]: {
        type: DataPlanMatchType.UserAttributes,
    },
    [DataPlanMatchType.UserIdentities]: {
        type: DataPlanMatchType.UserIdentities,
    },
    [DataPlanMatchType.Uninstall]: {
        type: DataPlanMatchType.Uninstall,
    },
    [DataPlanMatchType.ProductAction]: {
        type: DataPlanMatchType.ProductAction,
        criteria: {
            action: faker.lorem.slug(),
        },
    },
    [DataPlanMatchType.PromotionAction]: {
        type: DataPlanMatchType.PromotionAction,
        criteria: {
            action: faker.lorem.slug(),
        },
    },
    [DataPlanMatchType.ProductImpression]: {
        type: DataPlanMatchType.ProductImpression,
    },
};

// tslint:disable-next-line: no-any
const getFakeDataPoint = (): { [key: string]: any } => {
    const key = faker.random.arrayElement(Object.keys(MatchCombos));
    const type = MatchCombos[key].type;
    const criteria = MatchCombos[key].criteria;

    return {
        description: faker.lorem.sentence(),
        match: {
            type,
            criteria,
        },
    };
};

// tslint:disable-next-line: no-any
const getFakeDocument = (): { [key: string]: any } => {
    return {
        data_points: [
            getFakeDataPoint(),
            getFakeDataPoint(),
            getFakeDataPoint(),
        ],
    };
};

// tslint:disable-next-line: no-any
const getFakeFullVersion = (index = 1): { [key: string]: any } => {
    const name = faker.company.bs();
    return {
        data_plan_id: faker.helpers.slugify(name),
        data_plan_name: name,

        version: index,
        version_description: faker.company.catchPhrase(),
        version_document: getFakeDocument(),

        activated_environment: faker.random.arrayElement([
            ActivatedEnvironment.Development,
            ActivatedEnvironment.Production,
        ]),

        activated: faker.random.boolean(),
        activated_on: faker.date.recent(),

        created_on: faker.date.recent(),
        created_by: faker.internet.exampleEmail(),
        last_modified_on: faker.date.recent(),
        last_modified_by: faker.internet.exampleEmail(),
    };
};

// tslint:disable-next-line: no-any
export const fake_version_list: Array<{ [key: string]: any }> = (() =>
    [...new Array(5)].map((version, index) => {
        const name = faker.company.bs();
        return {
            data_plan_id: faker.helpers.slugify(name),
            data_plan_name: name,

            version: index,
            version_description: faker.company.catchPhrase(),
            version_document: null,

            activated: faker.random.boolean(),
            activated_environment: faker.random.arrayElement([
                ActivatedEnvironment.Development,
                ActivatedEnvironment.Production,
            ]),
            activated_on: faker.date.recent(),

            created_on: faker.date.recent(),
            created_by: faker.internet.exampleEmail(),
            last_modified_on: faker.date.recent(),
            last_modified_by: faker.internet.exampleEmail(),
        };
    }))();

// tslint:disable-next-line: no-any
export const fake_plans: Array<{ [key: string]: any }> = (() =>
    [...new Array(5)].map(() => {
        const name = faker.company.bs();
        return {
            data_plan_id: faker.helpers.slugify(name),
            data_plan_name: name,
            data_plan_description: faker.company.catchPhrase(),
            data_plan_versions: fake_version_list,

            created_on: faker.date.recent(),
            created_by: faker.internet.exampleEmail(),
            last_modified_on: faker.date.recent(),
            last_modified_by: faker.internet.exampleEmail(),
        };
    }))();

// tslint:disable-next-line: no-any
export const fake_data_plan: { [key: string]: any } = (() => {
    const name = faker.company.bs();
    return {
        data_plan_id: faker.helpers.slugify(name),
        data_plan_name: name,
        data_plan_description: faker.company.catchPhrase(),

        data_plan_versions: [
            getFakeFullVersion(1),
            getFakeFullVersion(2),
            getFakeFullVersion(3),
        ],

        created_on: faker.date.recent(),
        created_by: faker.internet.exampleEmail(),
        last_modified_on: faker.date.recent(),
        last_modified_by: faker.internet.exampleEmail(),
    };
})();
