import React from "react";
import UserSearch from './userSearch'
import UserMessagesDisplay from './userMessagesDisplay'

export {default as UserSearch, UserElement, SearchBar, UsersList} from './userSearch'
export {default as UserMessagesDisplay,  UserHeaderSender} from './userMessagesDisplay'


const styles = {
  userMessagingUI: {
    display: "flex",
    flexDirection : 'row',
    height: '100vh',
    minHeight: '100vh',
  },
  userSearchContainer : {
      maxWidth : '35%',
      width : '35%',
      //position : 'fixed',
     // overflow : 'hidden'
      
   //   backgroundColor : 'red',
     // border: '2px dotted',
      //height : '100px'
  },
  userMessagingDisplayContainer : {
      maxWidth : '65%',
      width : '65%',
    //  minHeigh: '100vh'
  }
};
type Props = {
  idMainUser : number, // foo is required.
  idsUsers : Array<number>
};
const UserMessagingUI = ({idMainUser, idsUsers}:Props) => {
  return (
      <div style = {{...styles.userMessagingUI}}> 
        {/* <div style> IM HERE</div> */}
       <div style = {{...styles.userSearchContainer}}>
        <UserSearch idMainUser = {idMainUser} idsUsers = {idsUsers}> </ UserSearch>
       </div>
       <div style = {{...styles.userMessagingDisplayContainer}}>
        <UserMessagesDisplay idUser = {idMainUser} > </ UserMessagesDisplay>
       </div>
      </div>
    );
}

export default UserMessagingUI;
