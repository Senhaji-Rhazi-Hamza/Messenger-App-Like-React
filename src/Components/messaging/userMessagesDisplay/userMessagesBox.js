// @flow
import React from "react";
import _ from "lodash";
import {getUserMessages } from "../../../models";

const styles = {
    messagesBoxContainer : {
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems: "flex-end",
    overflow : 'auto'
    //float : 'right'
    },
    messageBubbleContainer : {
        backgroundColor : 'silver',
        //justifyContent : 'flex-end',
        border : 'solid 1px gray',
        borderRadius : '25px',
        width : '50%',
        minWidth : '50%',
        MaxWidth : '50%',
        minHeight : '50px',
        padding : '10px',
        margin : '10px'
    }


  
};
const UserMessageBox = ({ idUser }: { idUser: number }) => {
  const messages = getUserMessages(idUser)
  const listItems = _.map(messages, (msg, index) => (
    <span key ={index} style = {{...styles.messageBubbleContainer}}>  {msg.msgTxt} </span>
  ));
  
  return (
    <div style = {{...styles.messagesBoxContainer}}> 
      {listItems}
    </div>


      
  );
};

export default  UserMessageBox;
