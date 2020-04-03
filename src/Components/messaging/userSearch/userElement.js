// @flow
import React from 'react';

const styles = {
    userElement:
    {
        height: `${8}hv`,
        padding: 10,
        borderStyle: ' inset',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '2% 0',
        borderColor: 'blue'

    }
}
 
const UserElement = ({idUser}:{idUser : number}) => {
    return (
        <span key={idUser} style={{ ...styles.userElement }}> User : {idUser} </span>
    );
};

export default UserElement;