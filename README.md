# 

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreatePetsResponse
} from "/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "";
const sdk = new SDK();

sdk.pets.createPets().then((res: CreatePetsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### pets

* `createPets` - Create a pet
* `listPets` - List all pets
* `showPetById` - Info for a specific pet
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
