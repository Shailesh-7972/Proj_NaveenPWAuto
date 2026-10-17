import {test,expect} from  "@playwright/test";

let auth_token = { Authorization: "Bearer 5b2547fac2df8ee870419f6a813630a07578a4cd667f2db85dbb996d9cbd6771" };

//API request to get user details using GET method.

test('API test in single test', async ({request}) => {

    let response = await request.get("https://gorest.co.in/public/v2/users/8612626", {
        headers: auth_token
        
    });

let responseBody = await response.json();

console.log("API Response : ",responseBody);
console.log("Status code : ",response.status());
console.log("Status text : ",response.statusText());

});



let body = 

{
gender: 'MALE',
status: 'InActive'
}

//API request to create user details using POST method.

test('API Create test in single test', async ({request}) => {

    let response = await request.post("https://gorest.co.in/public/v2/users", {
        headers: auth_token,
        data: body
    });

let responseBody = await response.json();

console.log("API Response : ",responseBody);
const statusCode = response.status();
console.log("Status Code : ",statusCode);
expect(statusCode).toBe(201); // Assertion to check if the status code is 201 (Created)

});

//API request to update user details using PUT method.

test('API Update test(Full details send) in single test', async ({request}) => {

    let response = await request.put("https://gorest.co.in/public/v2/users/8667755", {
        headers: auth_token,
        data: body
    });

let responseBody = await response.json();

console.log("API Response : ",responseBody);
const statusCode = response.status();
console.log("Status Code : ",statusCode);
expect(statusCode).toBe(200); // Assertion to check if the status code is 200 (OK)

});

let apibody = 

{
name: 'Tukaram Munde',
email: 'tukaram@example.com',
}

//API request to update user details using PATCH method.

test('API Update test(Partial required details send) in single test', async ({request}) => {

    let response = await request.patch("https://gorest.co.in/public/v2/users/8667755", {
        headers: auth_token,
        data: apibody
    });

let responseBody = await response.json();

console.log("API Response : ",responseBody);
const statusCode = response.status();
console.log("Status Code : ",statusCode);
expect(statusCode).toBe(200); // Assertion to check if the status code is 200 (OK)

});

// API request to delete user details using DELETE method.

test('API Delete test in single test', async ({request}) => {

    let response = await request.delete("https://gorest.co.in/public/v2/users/8612626", {
        headers: auth_token,
    });

//let responseBody = await response.json();

//console.log("API Response : ",responseBody);
const statusCode = response.status();
console.log("Status Code : ",statusCode);
expect(statusCode).toBe(204); // Assertion to check if the status code is 204 (No Content)

});