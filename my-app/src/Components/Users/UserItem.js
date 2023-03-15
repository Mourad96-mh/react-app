
import React from 'react';
import styles from './UserItem.module.css'

const UserItem = (props)=> {

    return(
        <li className={styles['users-list--item']}>{props.userdata.name} {props.userdata.age} (old)</li>
    )

};


export default UserItem;