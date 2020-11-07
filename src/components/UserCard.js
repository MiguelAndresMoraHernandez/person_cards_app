import React from 'react';

const UserCard = (props) => {
    return(
        <h2
            style={{backgroundColor:props.color}}
        >
            {props.name}
        </h2>
    );
}
export default UserCard;