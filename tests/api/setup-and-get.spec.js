import { expect, test } from '@playwright/test';

test('GET Method Example', async ({ request }) => {

    //const baseURL = "https://spartan-app-new-nonsecure.onrender.com";
    //const endPoint = "/api/v2/spartans";

    //let response = await request.get(`${baseURL}${endPoint}`);
    let response = await request.get("/api/v2/spartans");

    console.log(response);

    console.log(response.json());

    // verify that status code is 200.
    test.expect(response.status()).toBe(200);

    // verify that the content type is application/json.
    test.expect(response.headers()['content-type']).toContain('application/json');


});

test('GET Method Example With Path Parameters', async ({ request  }) => {

    let id = 1162;
    
    let response = await request.get(`/api/v2/spartans/${id}`);

    // verify that status code is 200.
    test.expect(response.status()).toBe(200);

    // verify that the content type is application/json.
    test.expect(response.headers()['content-type']).toContain('application/json');


    let responseBody = await response.json(); // converted the json to javascript object

    //console.log(responseBody);


    expect(responseBody.message).toBe("Successfully retrieved the Spartan.");

    expect(responseBody.data.name).toBe("Muhtar Mahmut");

    expect(responseBody.data.id).toBe(id);
    


});
