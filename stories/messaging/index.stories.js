import React from 'react';

import  UserMessagingUI  from '../../src/components/messaging'

export default {
  title: 'UserMessagingUI',
  component: UserMessagingUI,
};
const idsUsers:Array<number> = [1,2,3,4,5,6,7]
const idMainUser:number = 1
export const Default = () => <UserMessagingUI idMainUser = {idMainUser} idsUsers = {idsUsers}></UserMessagingUI>;


