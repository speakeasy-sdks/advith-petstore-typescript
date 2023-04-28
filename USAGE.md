<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "";
import { CreatePetsResponse } from "/dist/sdk/models/operations";

const sdk = new SDK();

sdk.pets.createPets().then((res: CreatePetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->