// @flow

import { gql } from "apollo-boost";

class User {
  id: number;
  name: string;
  urlProfile: string;
  email: string;
  password: string;

  constructor(
    id: number,
    name: string,
    urlProfile: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.urlProfile = urlProfile;
    this.email = email;
  }
}

export default User;

const url1 =
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const url2 =
  "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const imageUsersUrls = [url1, url2];

export let users: Array<User> = [];

// function makeid(length:number) {
//    let result:string           = '';
//    let characters:string       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    let charactersLength:number = characters.length;

//    for (let i:number = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return result;
// }

for (let step: number = 0; step < 10; step++) {
  users.push(
    new User(step, "user_" + step.toString(), imageUsersUrls[step % 2])
  );
}

export function getUser(id: number) {
  if (id < users.length) {
    return users[id];
  }
  return users[0];
}

export function getUserQuery(id: number) {
return  gql`
        query {
            users(where: {id_user: {_in: [${id}]}}) {
            email
            name
            url_profile
            id_user
            password
            }
        }
      `
    
}

export function getUsersQuery() {

return gql`
        query {
          users {
            id_user
            email
            name
            url_profile
            password
          }
        }
      `
    
}

