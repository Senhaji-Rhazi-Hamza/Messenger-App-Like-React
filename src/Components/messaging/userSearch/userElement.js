// @flow
import React from "react";
import { getUser } from "../../../models";

const styles = {
  userElementContainer: {
    height: `${8}hv`,
    maxHeight: `100px`,
    padding: 10,
    borderStyle: " inset",
    // justifyContent: 'center',
    // textAlign: 'center',
    margin: "2% 0",
    borderColor: "blue",
    with: "100%",
    //minWidth:'100%',
    display: "flex",
    flexDirection: "row",
  },
  imgContainer: {
    borderRadius: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    float: "left",
    width: "10%",
    height: "10%",
    marginRight : "5%"
  },
  bxMsgContainer: {
      
  },
};

const UserElement = ({ idUser }: { idUser: number }) => {
  const user = getUser(idUser);
  return (
    <div style={{ ...styles.userElementContainer }}>
      <img
        src={user.urlProfile}
        alt="Avatar"
        style={{ ...styles.imgContainer }}
      ></img>

      <div key={user.id}> User : {user.id} </div>
    </div>
  );
};

export default UserElement;
