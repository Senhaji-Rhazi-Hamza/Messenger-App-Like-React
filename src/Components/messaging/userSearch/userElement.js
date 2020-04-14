// @flow
import React from "react";
import { getUser, getUserLastReceivedMessage } from "../../../models";

const styles = {
  userElementContainer: {
    height: `${8}hv`,
    maxHeight: `100px`,
    padding: 10,
    borderStyle: "ridge",
    margin: "1px 0",
    border: "1px dotted gray",
    with: "100%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
  },
  imgContainer: {
    overflow : 'hidden',
    maxHeight: "100%",
    maxWidth: "100%",
    float: "left",
    width: "10%",
    height: "auto",
    marginRight: "5%",
  },
  bxMsgContainer: {
      display : 'flex',
      flexDirection :'column',
      justifyContent:'space-between',
      margin : '5px 0px 5px 0',
      
  },
};
const UserElement = ({ idUser }: { idUser: number }) => {
  function enter(e) {
    if (e.target.classList.contains('hoverOnlyMe') === true)
    {
       e.target.style.backgroundColor = "gray";
    }
  }
  function leave(e) {
    if ((e.target.classList.contains('hoverOnlyMe') === true) && !(e.target.contains(e.relatedTarget)))
    {
       e.target.style.backgroundColor = "";
    }
  }
  const user = getUser(idUser);
  const lstMsgUser = getUserLastReceivedMessage(user.id)
  return (
    <div className = "hoverOnlyMe"  key={user.id} style={{ ...styles.userElementContainer }}  onMouseOver={enter} onMouseOut={leave}>
      <div style={{ ...styles.imgContainer }}>
      <img
        src={user.urlProfile}
        alt="Avatar"
        style = {{justifyContent : 'center', width : '100%', height : '100%', overFit : 'cover', borderRadius : '50%', overflow : 'hidden', }}
      ></img>
      </div>
      <div style={{ ...styles.bxMsgContainer }}>
      <div > User : {user.name} </div>
      <div  > Msg : {lstMsgUser.msgTxt }</div>
      </div>
    </div>
  );
};

export default UserElement;
