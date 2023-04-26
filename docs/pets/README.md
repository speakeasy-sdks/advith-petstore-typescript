# pets

### Available Operations

* [createPets](#createpets) - Create a pet
* [listPets](#listpets) - List all pets
* [showPetById](#showpetbyid) - Info for a specific pet

## createPets

Create a pet

### Example Usage

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

## listPets

List all pets

### Example Usage

```typescript
import { SDK } from "";
import { ListPetsRequest, ListPetsResponse } from "/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK();

const req: ListPetsRequest = {
  limit: 548814,
};

sdk.pets.listPets(req).then((res: ListPetsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## showPetById

Info for a specific pet

### Example Usage

```typescript
import { SDK } from "";
import { ShowPetByIdRequest, ShowPetByIdResponse } from "/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK();

const req: ShowPetByIdRequest = {
  petId: "provident",
};

sdk.pets.showPetById(req).then((res: ShowPetByIdResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
