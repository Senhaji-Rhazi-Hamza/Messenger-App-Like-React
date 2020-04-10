// @flow
import _ from "lodash";
import React from "react";
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

const UsersList = ({idsUsers} :{idsUsers: Array<number>}) => {
  const listItems = _.map(idsUsers, (id) => (
    <span key = {id}> <UserElement  idUser={id}> </UserElement> </span>
  ));

  return <div style={{ ...styles.userListContainer }}> {listItems} </div>;
};

export default UsersList;