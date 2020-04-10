import React from 'react';

import  {UsersList}  from '../../../src/components/messaging'

export default {
  title: 'UsersList',
  component: UsersList,
};

const idsUsers:Array<number> = [0,1,2,3,4,5,6]

export const Default = () => <UsersList idsUsers = {idsUsers} ></UsersList>;


