import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';


export function createUser(navigate, e, email, password, name) {

    e.preventDefault();

    const ID = "unique()";
    const user = account.create(ID, email, password, name);

    user.then(function (response) {
        console.log(response); // Success
        navigate('/');
    }, function (error) {
        console.log(error); // Failure
    });
}