// @flow
import _ from "lodash";
import React, {useState} from "react";
//import { getUser, getUserLastReceivedMessage } from "../../../models";
import UserElement from "./userElement";

const styles = {
  userListContainer: {
    display: "flex",
    flexDirection: "column",
    overflow :'auto',
    height: "75vh",

    

  },
};

const UsersList = ({idsUsers, updateIdMainFriendUser,  idMainFriendUser} :{idsUsers: Array<number>,  updateIdMainFriendUser ? :(updateIdMainFriendUser:nubmer) => void,  idMainFriendUser:number}) => {
  const [selectedItem, setSelectedItem] = useState(idMainFriendUser)
  const handleClick = (id:number, e) => {
    if (typeof updateIdMainFriendUser != 'undefined') {
       updateIdMainFriendUser(id)
       setSelectedItem(id)
      // console.log(id)
    }
    
  }
  const listItems = _.map(idsUsers, (id) => (
    <span key = {id} onClick={(e) => handleClick(id, e)}> <UserElement  selected = {selectedItem === id} idMainFriendUser = {idMainFriendUser} idUser={id}> </UserElement> </span>
  ));

  return <div style={{ ...styles.userListContainer }}> {listItems} </div>;
};

export default UsersList;