<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "";
import { CreatePetsResponse } from "/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK();

sdk.pets.createPets().then((res: CreatePetsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->