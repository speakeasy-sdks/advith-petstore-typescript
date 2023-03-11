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