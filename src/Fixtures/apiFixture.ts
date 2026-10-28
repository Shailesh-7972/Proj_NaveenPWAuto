import { APIRequestContext } from "@playwright/test";
import { test as baseTest } from "@playwright/test";

type apiFixture = {
  apiHelper: ApiHelper;
};

export let test = baseTest.extend<apiFixture>({
  apiHelper: async ({ request }, use) => {
    const apiHelper = new ApiHelper(
        request, process.env.API_BASE_URL!);
    await use(apiHelper);
  },
});

export class ApiHelper {

    private readonly request: APIRequestContext;
    private readonly baseURL: string;
    

    constructor(request: APIRequestContext,baseURL: string) 
    {

        this.request = request;
        this.baseURL = baseURL;

    }

    //Get method to make GET API request
    async get(endpoint: string,headers?: Record<string, string>) {

        const response = await this.request.get(`${this.baseURL}${endpoint}`,{
             headers: headers
        });
       
         return {
            status: response.status(),
            body: await response.json()
}
    }

    //Post method to make POST API request
    async post(endpoint: string,data: object,headers?: Record<string, string>) {
        const response = await this.request.post(`${this.baseURL}${endpoint}`,{
            headers: headers,
            data: data
        });
        return {
            status: response.status(),
            body: await response.json()
        }
    }

//Put method to make PUT API request

    async put(endpoint: string,data: object,headers?: Record<string, string>) {
        const response = await this.request.put(`${this.baseURL}${endpoint}`,{
            headers: headers,
            data: data
        });
        return {
            status: response.status(),
            body: await response.json()
        }
    }

async delete(endpoint: string,headers?: Record<string, string>) {
        const response = await this.request.delete(`${this.baseURL}${endpoint}`,{
            headers: headers
        });
        return {
            status: response.status(),
            //body: await response.json()
        }

    }
    }
    export { expect } from "@playwright/test";