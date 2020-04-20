import React, { useState }  from "react";
import {  useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";



//const userSendBarMutation = ({ idUser, idMainFriendUser, msg_txt}: { idUser: number , idMainFriendUser:number, msg_txt:string}) => {
  //return
  
const SEND_MSG =  gql`
   mutation ($id_sender:bigint, $id_receiver:bigint, $msg_txt: String!)
  {
    insert_messages (
      objects: [{
        id_sender: $id_sender,
        msg_txt :$msg_txt,
        id_receiver:$id_receiver
      }]
    )
    {
       returning 
      {
        creation_time_stmp
        id_message
        id_receiver
        id_sender
        msg_txt
      }
    }
  }

`

const styles = {
  senderBarContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    //minHeight: "20hv",
    border: "groove",
    borderRadius: "20px",
   // position: "fixed",
    //left: "0px",
    //bottom: "0px",
    minWidth: "100%",
    backgroundColor: "white",
  },
  senderBarInput: {
    width: "90%",
    height: "90%",
    minWidth: "90%",
    minHeight: "90%",
    borderRadius: "45px",
    border: "none",
  },
  buttonContainer: {
    backgroundColor: "gray",
    borderRadius: "40px",
    height: "90%",
    width: "10%",
    color: "white",
    marginRight: "5px",
    border: "none",
    justifyContenr: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize: "16px",
  },
};
const UserSendBar = ({ idUser, idMainFriendUser }: { idUser: number , idMainFriendUser:number}) => {
  const [input, setInput] = useState("")
  const [sendMsg, { data }] = useMutation(SEND_MSG);

  const handleOnChange = (event) => {
    setInput(event.target.value)
  }
  const handleSend = () => {
  setInput("")
  }

  return (
    <div style={{ ...styles.senderBarContainer }}>
      <input
        type="text"
        style={{ ...styles.senderBarInput }}
        placeholder="Envoyez un message"
        name="send"
        onChange={(e) => handleOnChange(e)}
        value = {input}
      ></input>
      <button type="submit" onClick={
        e => {
          e.preventDefault();
          sendMsg({variables: { id_sender:idUser, id_receiver:idMainFriendUser, msg_txt: input } });
          setInput("");
          console.log("sent data")
          console.log(data)
        }
      } style={{ ...styles.buttonContainer }}>Envoyer</button>
    </div>
  );
};

export default UserSendBar;
