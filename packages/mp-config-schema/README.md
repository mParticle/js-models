<img src="https://static.mparticle.com/sdk/mp_logo_black.svg" width="280"><br>

[![npm](https://img.shields.io/npm/v/@mparticle/mp-config-json-schema.svg?maxAge=2592000)](https://www.npmjs.com/package/@mparticle/mp-config-json-schema)

# MP Config JSON Schema

Provides a JSON Schema for validating an mp.config.json file

## Installation

```
npm install @mparticle/mp-config-json-schema
```

## Usage

Add `import mpConfigSchema from '@mparticle/mp-config-json-schema';` to the top of any file
where `mp.config.json` is meant to be read.

Pass `mpConfigSchema` into your validator to validate your config file.

### AJV example

As an example, `mp-config-json-schema` can be used with [AJV](https://github.com/ajv-validator/ajv).

```typescript
import Ajv from 'ajv';
import mpConfigSchema from '@mparticle/mp-config-json-schema';

const ajv = new Ajv();

const configObject = {
    global: {
        workspaceId: '1234',
        clientId: 'my_secret_id',
        clientSecret: 'SUPERSECRETKEY',
    },
    planningConfig: {
        dataPlanId: 'alex_demo_data_plan',
        dataPlanVersionFile: '.mp/data_plans/alex_demo_data_plan-v1.json',
        versionNumber: 2,
    },
};

const valid = ajv.validate(mpConfigSchema, configObject);

if (!valid) {
    console.error(ajv.errorsText());
}
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
