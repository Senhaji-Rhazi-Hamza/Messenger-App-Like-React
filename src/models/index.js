import {users} from './User'
export {default as Message} from './Message'
export {default as User, users} from './User'


export function getUser(id:number) {
    if (id < users.length) {
            return users[id]
    }
    return users[0]
}