import React from "react";
import UserHeaderSender from "./userHeaderSender";
import UserMessagesBox from "./userMessagesBox";
import UserSendBar from "./userSendBar";

export { default as UserHeaderSender } from "./userHeaderSender";
export { default as UserMessagesBox } from "./userMessagesBox";

const styles = {
  userMessageDisplayContainer: {
    height : '100%'
  },
};
const UserMessagesDisplay = ({ idUser }: { idUser: number }) => {
  return (
    <div style={{ ...styles.UserMessagesDisplayContainer }}>
      <div style={{ height: "20vh", width: "100%" }}>
        <UserHeaderSender idUser={idUser}> </UserHeaderSender>
      </div>
      <div style={{ overflow: "auto", height: "70vh",width: "100%" }}>
        <UserMessagesBox idUser={idUser}> </UserMessagesBox>
      </div>
      <div  style={{ height: "10vh",  width: "100%", marginTop : '10px'}}>
        <UserSendBar> </UserSendBar>
      </div>
    </div>
  );
};

export default UserMessagesDisplay;
