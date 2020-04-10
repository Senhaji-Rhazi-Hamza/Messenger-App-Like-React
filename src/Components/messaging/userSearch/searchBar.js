// @flow
import React from "react";
import { getUser } from "../../../models";

const styles = {
  searchBarContainer: {
    border: "groove",
    display: "flex",
    flexDirection: "column",
    height: "25vh",
    borderRadius: "15px",
    //margin : '10px'
  },
  searchBar: {
    width: "100%",
    height: "90%",
    borderRadius: "10px",
    display: "flex",
    border: "0px",
    backgroundColor: "silver",
    outline: "none",
  },
  searchBarFooter: {
    display: "flex",
    border: "solid 2px",
    maxHeight: "50%",
    height: "35%",
    borderRadius: "15px",
    backgroundColor: "silver",
  },
  userHeader: {
    display: "flex",
    flexDirection: "row",
    //maxHeight: "200px",
    // justifyContent : "space-between"
  },
  userHeaderImg: {
    borderRadius: "50%",
    maxHeight: "100%",
    maxWidth: "20%",
    float: "left",
    width: "100%",
    height: "100%",
    marginRight: "5%",
  },
};
const SearchBar = ({ idUser }: { idUser: number }) => {
  const user = getUser(idUser);
  return (
    <div style={{ ...styles.searchBarContainer }}>
      <div style={{ ...styles.userHeader }}>
        <img
          src={user.urlProfile}
          alt="Avatar"
          style={{ ...styles.userHeaderImg }}
        ></img>
        <h2> Discussion </h2>
        <div style={{ width: "20%", marginLeft: "auto" }}>
          <div style={{ display: "inline-block" }}>
            <div style={{ width: "100%" }}>
              <img
                style={{ width: "50%", height: "50%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR12sS8u7WQVWVt7zjUD9FrfZrly099Xg_4FR3dwSNCnQdQqqlu&usqp=CAU"
                alt="Avatar"
              ></img>
              <img
                style={{ width: "50%", height: "50%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR12sS8u7WQVWVt7zjUD9FrfZrly099Xg_4FR3dwSNCnQdQqqlu&usqp=CAU"
                alt="Avatar"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          ...styles.searchBarFooter,
        }}
      >
        <div style={{ width: "10%", maxHeight: "100%" }}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "70%",
              height : "100%",
              marginBottom: "0px",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR12sS8u7WQVWVt7zjUD9FrfZrly099Xg_4FR3dwSNCnQdQqqlu&usqp=CAU"
            alt="Avatar"
          ></img>
        </div>
        <input
          type="text"
          style={{ ...styles.searchBar }}
          placeholder="Search.."
          name="search"
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
