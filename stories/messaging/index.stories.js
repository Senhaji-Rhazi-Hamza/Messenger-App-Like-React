import React from 'react';

import  UserMessagingUI  from '../../src/components/messaging'

export default {
  title: 'UserMessagingUI',
  component: UserMessagingUI,
};
const idsUsers:Array<number> = [0,1,2,3,4,5,6,7]
const idMainUser:number = 0
export const Default = () => <UserMessagingUI idMainUser = {idMainUser} idsUsers = {idsUsers}></UserMessagingUI>;


