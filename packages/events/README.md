<img src="https://static.mparticle.com/sdk/mp_logo_black.svg" width="280"><br>

[![npm](https://img.shields.io/npm/v/@mparticle/event-models.svg?maxAge=2592000)](https://www.npmjs.com/package/@mparticle/event-models)

# mParticle-event-models

A collection of event interfaces for mParticle Services using TypeScript.

## Installation

```
npm install @mparticle/event-models
```

## Usage

```typescript
import { CustomEvent } from '@mparticle/event-models';

const sampleCustomEvent: CustomEvent = {
    event_type: 'custom_event',
    data: {
        custom_event_type: 'other',
        event_name: 'My custom event',
        custom_flags: {
            custom: 'flag',
        },
        custom_attributes: { key: 'locke' },
    },
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
