import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Pets {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * createPets - Create a pet
  **/
  createPets(
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePetsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pets";
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreatePetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listPets - List all pets
  **/
  listPets(
    req: operations.ListPetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pets";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListPetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.pets = plainToInstance(
                ,
                httpRes?.data as ,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * showPetById - Info for a specific pet
  **/
  showPetById(
    req: operations.ShowPetByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ShowPetByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ShowPetByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/pets/{petId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ShowPetByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.pet = plainToInstance(
                shared.Pet,
                httpRes?.data as shared.Pet,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
