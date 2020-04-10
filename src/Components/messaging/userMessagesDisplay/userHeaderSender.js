import React from "react";
import { getUser } from "../../../models";

const styles = {
  userElementHeaderContainer: {
    paddingTop : '0',
    overflow: 'hidden',
    backgroundColor : 'white',
    display: "flex",
    flexDirection: "row",
    //height: "25hv",
    height: "inherit",
    border: "ridge",
  },
  userElementContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100px",
    Height: "inherit",
    margin :  '5px'
  },
  imgContainer: {
    borderRadius: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    float: "left",
    // width: "100%",
    // height: "100%",
    // MaxWidth: "100%",
    // MaxHeight: "100%",

    marginRight: "5%",
  },
};
const UserHeaderSender = ({ idUser }: { idUser: number }) => {
  const user = getUser(idUser);
  // const lstMsgUser = getUserLastReceivedMessage(user.id)
  return (
    <div style={{ ...styles.userElementHeaderContainer }}>
      <div style={{ ...styles.userElementContainer }}>
        <img
          src={user.urlProfile}
          alt="Avatar"
          style={{ ...styles.imgContainer }}
        ></img>
        <div style={{ display: "flex", flexDirection: "column", width :'100%' }}>
          <h4> {user.name} </h4>
          <span> last connected</span>
        </div>
      </div>
      <div style = {{marginLeft : 'auto'}}>
      </div>
    </div>
  );
};

export default UserHeaderSender;
