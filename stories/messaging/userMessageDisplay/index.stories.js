import React from 'react';

import  {UserMessagesDisplay}  from '../../../src/components/messaging'

export default {
  title: 'UserMessagesDisplay',
  component: UserMessagesDisplay,
};
const idMainUser:number = 0
export const Default = () => <UserMessagesDisplay idUser = {idMainUser} ></UserMessagesDisplay>;


