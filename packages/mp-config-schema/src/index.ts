import { JSONSchema4 } from 'json-schema';

export const mpConfigSchema: JSONSchema4 = {
    properties: {
        global: {
            additionalProperties: false,
            required: ['workspaceId', 'clientId', 'clientSecret'],
            properties: {
                workspaceId: {
                    type: 'string',
                },
                clientId: {
                    type: 'string',
                },
                clientSecret: { type: 'string' },
            },
        },
        planningConfig: {
            properties: {
                dataPlanId: { type: 'string' },
                dataPlanFile: { type: 'string' },
                dataPlanVersionFile: { type: 'string' },
                versionNumber: { type: 'integer' },
            },
        },
    },
};
