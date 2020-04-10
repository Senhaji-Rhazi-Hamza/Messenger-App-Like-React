import React from "react";

const styles = {
  senderBarContainer: {
    display: "flex",
    flexDirection: "row",
    height: "inherit",
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
const UserSendBar = () => {
  return (
    <div style={{ ...styles.senderBarContainer }}>
      <input
        type="text"
        style={{ ...styles.senderBarInput }}
        placeholder="Envoyez un message"
        name="send"
      ></input>
      <button style={{ ...styles.buttonContainer }}>Envoyer</button>
    </div>
  );
};

export default UserSendBar;
