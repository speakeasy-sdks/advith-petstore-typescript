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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [pets](docs/pets/README.md)

* [createPets](docs/pets/README.md#createpets) - Create a pet
* [listPets](docs/pets/README.md#listpets) - List all pets
* [showPetById](docs/pets/README.md#showpetbyid) - Info for a specific pet
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
