// @flow
import React from "react";
import _ from "lodash";
import {getUserMessages } from "../../../models";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost"

const userMessagesBoxQuery = (idUser: number) => {
  return gql`
       query {
        messages(where: {id_receiver: {_eq: ${idUser}}}, order_by: {creation_time_stmp: asc}) {
          creation_time_stmp
          id_message
          id_receiver
          id_sender
          msg_txt
        }
        
      }
      `
};



const styles = {
    messagesBoxContainer : {
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems: "flex-end",
    overflow : 'auto'
    },
    messageBubbleContainer : {
        backgroundColor : 'silver',
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
const UserMessageBox = ({ idUser, idMainFriendUser }: { idUser: number , idMainFriendUser:number}) => {
  const { loading, error, data } = useQuery(userMessagesBoxQuery(idMainFriendUser), {pollInterval: 1000});
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log("refetching query")
  const listItems = _.map(data.messages, (msg, index) => (
    <span key ={index} style = {{...styles.messageBubbleContainer}}>  {msg.msg_txt} </span>
  ));
  
  return (
    <div style = {{...styles.messagesBoxContainer}}> 
      {listItems}
    </div>


      
  );
};

export default  UserMessageBox;
