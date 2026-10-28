import { format } from "path";
import {test,expect} from "../src/Fixtures/apiFixture";

const Token = process.env.API_TOKEN!;

let authHeaders = {'Authorization': `Bearer ${Token}`}


//Create User Helper

async function createuser(apiHelper:any)
{

let data =

{

'name': 'Siya Ram',
//email: 'siya123444@example.com',  
'email': `SiyaRam_${Date.now()}@example.com`,  
'gender': 'female',
'status': 'InActive'

};

let response = await apiHelper.post("/public/v2/users",data,authHeaders);
console.log("Post API Response Details",response);
expect(response.status).toBe(201);
return response.body;
}

//test-1- Get the user details

test("Get the user details",async({apiHelper}) => {

    //Create New User
    let responcebody = await createuser(apiHelper);

    //GET the User details
    let getresponse = await apiHelper.get(`/public/v2/users/${responcebody.id}`,authHeaders);
    expect(getresponse.status).toBe(200);
    expect(getresponse.body.name).toBe('Siya Ram');

});

//test-2- Create New User, Update the user details and verify it updated or not.

test("Update the user details",async({apiHelper}) => {

    let dataa =
{

'name': 'Bajrang Bali Jai Hanuman raya',  
'gender': 'male',
};

    //Create New User
    let responcebody = await createuser(apiHelper);

    //UPDATE the User details
    let getresponse = await apiHelper.put(`/public/v2/users/${responcebody.id}`,dataa,authHeaders);
    expect(getresponse.status).toBe(200);
    expect(getresponse.body.name).toBe(dataa.name);
    console.log("Updated API Response details",getresponse);

    //Verify the user details using the get
    let gettresponse = await apiHelper.get(`/public/v2/users/${responcebody.id}`,authHeaders);
    expect(gettresponse.status).toBe(200);
    expect(getresponse.body.gender).toBe(dataa.gender);
 

});


//test-3- Create New User, delete the user details and verify it deleted or not using GET.

test("Delete the user details",async({apiHelper}) => {


    //Create New User
    let responcebody = await createuser(apiHelper);

    //Delete the User details
    let getresponse = await apiHelper.delete(`/public/v2/users/${responcebody.id}`,authHeaders);
    expect(getresponse.status).toBe(204);
    console.log("Deleted Response details",getresponse);

    //Verify the the deleted user details using the get
    let gettresponse = await apiHelper.get(`/public/v2/users/${responcebody.id}`,authHeaders);
    expect(gettresponse.status).toBe(404); 
    console.log("GET status responce after Deleted it",gettresponse);

});

/*
test("Generating tokens",async({apiHelper}) => {

    //Create New User
    let responcebody = await createuser(apiHelper);

    //GET the User details
    let getresponse = await apiHelper.post("/public/v2/users/",authHeaders);

form:
{
grant_type:
client _id:
client_secret:
}

});

*/