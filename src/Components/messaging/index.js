import React from "react";
import UserSearch from './userSearch'
import UserMessagesDisplay from './userMessagesDisplay'

export {default as UserSearch, UserElement, SearchBar, UsersList} from './userSearch'
export {default as UserMessagesDisplay,  UserHeaderSender} from './userMessagesDisplay'


const styles = {
  userMessagingUI: {
    display: "flex",
    flexDirection : 'row',
    height: '100%',
    minHeight: '100%',
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
      
      height : '100%',
     
    //  minHeigh: '100vh'
  }
};
type Props = {
  idMainUser : number, // foo is required.
  idsUsers : Array<number>,
  idMainFriendUser? : number,
  updateIdMainFriendUser ? :(idMainFriendUser:nubmer) => void
};
const UserMessagingUI = ({idMainUser, idsUsers, idMainFriendUser, updateIdMainFriendUser}:Props) => {
  return (
      <div style = {{...styles.userMessagingUI}}> 
        {/* <div style> IM HERE</div> */}
       <div style = {{...styles.userSearchContainer}}>
        <UserSearch idMainUser = {idMainUser} idsUsers = {idsUsers}  idMainFriendUser = {idMainFriendUser} updateIdMainFriendUser = {updateIdMainFriendUser}> </ UserSearch>
       </div>
       <div style = {{...styles.userMessagingDisplayContainer}}>
        <UserMessagesDisplay idUser = {idMainUser}  idMainFriendUser = {idMainFriendUser}> </ UserMessagesDisplay>
       </div>
      </div>
    );
}

export default UserMessagingUI;
