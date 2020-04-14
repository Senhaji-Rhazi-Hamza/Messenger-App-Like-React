import React from "react";
import { getUser, getUserQuery,getUsersQuery } from "../../../models";
//import { client} from "../../../../src";

import { useQuery } from '@apollo/react-hooks';


const styles = {
  userElementHeaderContainer: {
    paddingTop : '0',
    overflow: 'hidden',
    backgroundColor : 'white',
    display: "flex",
    flexDirection: "row",
    height: "100%",
    border: "ridge",
    minHeight : "20px",
  },
  userElementContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100px",
    height: "100%",
    maxHeight: '150px',
    margin :  '5px',
    minHeight : '10px',
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
  const { loading, error, data } = useQuery(getUserQuery(idUser));


  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  //console.log(data.users[0])
  return (
    <div style={{ ...styles.userElementHeaderContainer }}>
      <div style={{ ...styles.userElementContainer }}>
        <img
          //src={data.users[0].url_profile}
          src = {data.users[0].url_profile}
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
