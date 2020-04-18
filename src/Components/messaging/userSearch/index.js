import React from "react";
import SearchBar from "./searchBar";
import UsersList from "./usersList";

export { default as UserElement } from "./userElement";
export { default as SearchBar } from "./searchBar";
export { default as UsersList } from "./usersList";

const styles = {
  userSearchContainer: {
    display: "flex",
    flexDirection : 'column',
  },
};
type Props = {
  idMainUser : number, // foo is required.
  idsUsers : Array<number>,
  updateIdMainFriendUser ? :(updateIdMainFriendUser:nubmer) => void,
  idMainFriendUser ? : number
};
const UserSearch = ({idMainUser, idsUsers, updateIdMainFriendUser, idMainFriendUser}:Props) => {
  return (
      <div style = {{...styles.userSearchContainer}}> 
      <div style = {{ height : '45%'}}> <SearchBar idUser = {idMainUser}> </SearchBar></div>
      <div style = {{ height : '75%'}}> <UsersList idsUsers = {idsUsers} updateIdMainFriendUser = {updateIdMainFriendUser}  idMainFriendUser = {idMainFriendUser} > </UsersList></div>
      </div>
    );
}

export default UserSearch;
