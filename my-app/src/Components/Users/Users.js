import React from 'react';
import UserItem from './UserItem';

import styles from './Users.module.css';
const Users = (props)=> {

    return(
        <div className={styles.users}>
            <ul className={styles['users-list']}>
                {props.users.map(user =>
                    <UserItem userdata={user} key={user.id}/>
                )}
            </ul>
        </div>
    )
};


export default Users;