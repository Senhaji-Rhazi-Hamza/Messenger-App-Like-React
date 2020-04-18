// @flow
import React from "react";
import {
  getUser,
  getUserLastReceivedMessage,
  getUserQuery,
  getUsersQuery,
} from "../../../models";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const userElementQuery = (idUser: number) => {
  return gql`
       query {
        messages(where: {id_receiver: {_eq: ${idUser}}}, order_by: {creation_time_stmp: desc}) {
          creation_time_stmp
          id_message
          id_receiver
          id_sender
          msg_txt
        }
        users(where: {id_user: {_eq: ${idUser}}}) {
          email
          id_user
          name
          password
          url_profile
        }
      }
      `;
};
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
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
    float: "left",
    width: "10%",
    height: "auto",
    marginRight: "5%",
  },
  bxMsgContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "5px 0px 5px 0",
  },
};
const UserElement = ({
  idUser,
  idMainFriendUser,
  selected = false,
}: {
  idUser: number,
  idMainFriendUser: number,
  selected: boolean,
}) => {
  function enter(e) {
    if (e.target.classList.contains("hoverOnlyMe") === true) {
      e.target.style.backgroundColor = "gray";
    }
  }
  function leave(e) {
    if (
      e.target.classList.contains("hoverOnlyMe") === true &&
      !e.target.contains(e.relatedTarget)
    ) {
      if (selected) {
        e.target.style.backgroundColor = "silver";
      } else {
        e.target.style.backgroundColor = "";
      }
    }
  }
  const { loading, error, data } = useQuery(userElementQuery(idUser));
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  
  return (
    <div
      className="hoverOnlyMe"
      style={{
        ...styles.userElementContainer,
        backgroundColor: selected ? "silver" : "",
      }}
      onMouseOver={enter}
      onMouseOut={leave}
    >
      <div style={{ ...styles.imgContainer }}>
        <img
          src={data.users[0].url_profile}
          alt="Avatar"
          style={{
            justifyContent: "center",
            width: "100%",
            height: "100%",
            overFit: "cover",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        ></img>
      </div>
      <div style={{ ...styles.bxMsgContainer }}>
        <div> User : {data.users[0].name} </div>
        {data.messages.length > 0 ? (
          <div> Msg : {data.messages[0].msg_txt}</div>
        ) : (
          <div> Msg : not recieved message yet </div>
        )}
      </div>
    </div>
  );
};

export default UserElement;
