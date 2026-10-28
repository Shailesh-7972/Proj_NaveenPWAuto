import {test, expect} from "../src/Fixtures/apiFixture";


const Token = process.env.API_TOKEN!;

let authHeaders = {'Authorization': `Bearer ${Token}`}

let userid:number; //Declare userid variable to store the created userid

// API POST request to create user details using POST method.

test.describe.serial("E2E Go Rest API Test Serially execute",() => {

test ("Post API Test", async ({apiHelper}) => {

let data = 

{
'name': 'Tukaram Munde',
//email: 'siya123444@example.com',  
'email': `siyaram_${Date.now()}@example.com`,  
'gender': 'female',
'status': 'Active'
}

    let response = await apiHelper.post("/public/v2/users",data,authHeaders);

       console.log("API Response : ",response);
    
    expect(response.status).toBe(201);
    userid= response.body.id;
    console.log("User ID is",userid);
    //expect(response.body.gender).toBe("data.gender");

    });

    // API GET request to get user details using GET method.
    test ("Get API Test", async ({apiHelper}) => {


    let response = await apiHelper.get(`/public/v2/users/${userid}`,authHeaders);

       console.log("API Response : ",response);
    
    expect(response.status).toBe(200);
    //expect(response.body.gender).toBe("Data.gender");

    });

// API PUT request to update user details using PUT method.

    test ("Put API Test", async ({apiHelper}) => {

let data = 

{
name: 'Rammm Mundekar',
status: 'Inactive'  

}

    let response = await apiHelper.put(`/public/v2/users/${userid}`,data,authHeaders);

       console.log("API Response : ",response);
    
    expect(response.status).toBe(200);
    //expect(response.body.email).toBe("data.email");
});


// API DELETE request to delete user details using DELETE method.
      test ("Delete API Test", async ({apiHelper}) => {


    let response = await apiHelper.delete(`/public/v2/users/${userid}`,authHeaders);

       console.log("API Response : ",response);
    
    expect(response.status).toBe(204);
    //expect(response.body.gender).toBe("Data.gender");

    });

   });
   
