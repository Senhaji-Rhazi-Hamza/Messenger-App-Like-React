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
  idsUsers : Array<number>
};
const UserSearch = ({idMainUser, idsUsers}:Props) => {
  return (
      <div style = {{...styles.userSearchContainer}}> 
      <div style = {{ height : '25vh'}}> <SearchBar idUser = {idMainUser}> </SearchBar></div>
      <div style = {{ height : '75vh'}}>   <UsersList idsUsers = {idsUsers}> </UsersList></div>
      </div>
    );
}

export default UserSearch;
