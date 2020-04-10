import React from 'react';

import  {UserSearch}  from '../../../src/components/messaging'

export default {
  title: 'UserSearch',
  component: UserSearch,
};
const idsUsers:Array<number> = [0,1,2,3,4,5,6,7]
const idMainUser:number = 0
export const Default = () => <UserSearch idMainUser = {idMainUser} idsUsers = {idsUsers}></UserSearch>;


