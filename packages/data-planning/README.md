<img src="https://static.mparticle.com/sdk/mp_logo_black.svg" width="280"><br>

[![npm](https://img.shields.io/npm/v/@mparticle/data-planning-models.svg?maxAge=2592000)](https://www.npmjs.com/package/@mparticle/data-planning-models)

# mParticle-data-planning-models

A collection of Data Planning interfaces for mParticle Services using TypeScript.

## Installation

```
npm install @mparticle/data-planning-models
```

## Usage

```typescript
import { DataPlan, DataPlanMatchType, DataPlanValidatorType } from '@mparticle/data-planning-models';

const samplePlan: DataPlan = {
    data_plan_id: 'test-XXXXXXX',
    data_plan_name: 'This is a test data plan',
    data_plan_description: 'Ipsum Lorem',
    data_plan_versions: [
        {
            version: 1,
            version_document: {
                data_points: [
                    {
                        match: {
                            type: DataPlanMatchType.CustomEvent,
                            criteria: {
                                event_name: 'My Custom Event',
                                custom_event_type: 'navigation',
                            },
                        },
                        validator: {
                            type: DataPlanValidatorType.JSONSchema,
                            definition: {
                                properties: {},
                            },
                        },
                    },
                ],
            },
        },
    ],
};
```

## License

Copyright 2019 mParticle, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
