import { mpConfigSchema } from '../src';
import Ajv from 'ajv';

let ajv: Ajv.Ajv;

beforeEach(() => {
    ajv = new Ajv();
});

describe('schema', () => {
    it('should have valid attributes', () => {
        expect(mpConfigSchema).toBeDefined();
        expect(mpConfigSchema.properties?.global).toBeDefined();
        expect(mpConfigSchema.properties?.planningConfig).toBeDefined();
    });

    it('should validate when data matches schema', () => {
        const goodSample = {
            global: {
                workspaceId: '3707',
                clientId: 'my_secret_id',
                clientSecret: 'SUPERSECRETKEY',
            },
            planningConfig: {
                dataPlanId: 'alex_demo_data_plan',
                dataPlanVersionFile:
                    '.mp/data_plans/alex_demo_data_plan-v1.json',
                versionNumber: 2,
            },
        };

        const valid = ajv.validate(mpConfigSchema, goodSample);

        expect(valid).toBeTruthy();
    });

    it('should error if schema is invalid', () => {
        const badSample = {
            global: {
                workspaceId: '3707',
                clientId: 'my_secret_id',
                clientSecret: 'SUPERSECRETKEY',
            },
            planningConfig: {
                dataPlanId: 'alex_demo_data_plan',
                dataPlanVersionFile:
                    '.mp/data_plans/alex_demo_data_plan-v1.json',
                versionNumber: 'two',
            },
        };

        const valid = ajv.validate(mpConfigSchema, badSample);

        expect(valid).toBeFalsy();
        expect(ajv.errorsText()).toBe(
            'data.planningConfig.versionNumber should be integer'
        );
    });
    describe('global', () => {
        it('should have all required attributes', () => {
            expect(
                ajv.validate(mpConfigSchema, {
                    global: {},
                })
            ).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                "data.global should have required property 'workspaceId'"
            );

            expect(
                ajv.validate(mpConfigSchema, {
                    global: {
                        workspaceId: 'XXXX',
                    },
                })
            ).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                "data.global should have required property 'clientId'"
            );

            expect(
                ajv.validate(mpConfigSchema, {
                    global: {
                        workspaceId: 'XXXX',
                        clientId: 'XXXXXX',
                    },
                })
            ).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                "data.global should have required property 'clientSecret'"
            );

            expect(
                ajv.validate(mpConfigSchema, {
                    global: {
                        workspaceId: 'XXXX',
                        clientId: 'XXXXXX',
                        clientSecret: 'XXXXX',
                    },
                })
            ).toBeTruthy();
            expect(ajv.errorsText()).toBe('No errors');
        });
        it('should require workspaceId to be a string', () => {
            const valid = ajv.validate(mpConfigSchema, {
                global: {
                    workspaceId: 2345,
                },
            });
            expect(valid).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                'data.global.workspaceId should be string'
            );
        });
        it('should require clientId to be a string', () => {
            const valid = ajv.validate(mpConfigSchema, {
                global: {
                    workspaceId: '1234',
                    clientId: [],
                },
            });
            expect(valid).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                'data.global.clientId should be string'
            );
        });
        it('should require clientSecret to be a string', () => {
            const valid = ajv.validate(mpConfigSchema, {
                global: {
                    workspaceId: '1234',
                    clientId: 'XXXXX',
                    clientSecret: false,
                },
            });
            expect(valid).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                'data.global.clientSecret should be string'
            );
        });
    });
    describe('planningConfig', () => {
        it('should require dataPlanId to be a string', () => {
            expect(
                ajv.validate(mpConfigSchema, {
                    planningConfig: {
                        dataPlanId: 12345,
                    },
                })
            ).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                'data.planningConfig.dataPlanId should be string'
            );
        });

        it('should require dataPlanFile to be a string', () => {
            expect(
                ajv.validate(mpConfigSchema, {
                    planningConfig: {
                        dataPlanFile: 12345,
                    },
                })
            ).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                'data.planningConfig.dataPlanFile should be string'
            );
        });

        it('should require dataPlanVersionFile to be a string', () => {
            expect(
                ajv.validate(mpConfigSchema, {
                    planningConfig: {
                        dataPlanVersionFile: 12345,
                    },
                })
            ).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                'data.planningConfig.dataPlanVersionFile should be string'
            );
        });

        it('should require versionNumber to be an integer', () => {
            expect(
                ajv.validate(mpConfigSchema, {
                    planningConfig: {
                        versionNumber: 'two',
                    },
                })
            ).toBeFalsy();
            expect(ajv.errorsText()).toBe(
                'data.planningConfig.versionNumber should be integer'
            );
        });
    });
});
