import { users } from "./User";
import { messagesUsers } from "./Message";
export { default as Message, messagesUsers } from "./Message";
export { default as User, users } from "./User";

export function getUser(id: number) {
  if (id < users.length) {
    return users[id];
  }
  return users[0];
}

export function getUserLastReceivedMessage(id: number) {
  if (id < users.length) {
    if (id + 1 < users.length) {
      return messagesUsers[id][id + 1];
    } else {
      return messagesUsers[id][id - 1];
    }
  }
  return messagesUsers[id][0];
}



export function getUserMessages(id: number) {
  if (id < users.length) {
      return messagesUsers[id];
  }
  return messagesUsers[0];
}
