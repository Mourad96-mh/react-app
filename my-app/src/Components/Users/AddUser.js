import React, {useState} from 'react';

import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';


import styles from './AddUser.module.css'

const AddUser = (props)=> {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState('');

    const inputUserNameHandler = (e)=> {
        setUserName(e.target.value)
    }

    const inputUserAgeHandler = (e)=> {
        setUserAge(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(userName.trim().length=== 0 || userAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please Enter A Valid input'
            })
        }else if(parseInt(userAge) <= 0){
            setError({
                title: 'Invalid Age',
                message: 'Please set a valid age (> 0)'
            })
        }
        else{
            props.onAddUser({userName, userAge});
            setUserName('');
            setUserAge('');
        }
    }

    const clickHandler = ()=> {
        setError(null);
    }


    return (
        <div>
            {error && <ErrorModal title={error.title} content={error.message} onClick={clickHandler}/>}
            <form className={styles['user-form']} onSubmit={submitHandler}>
                <div className={styles['user-form-control']}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username'onChange={inputUserNameHandler} value={userName}/>
                </div>
                <div className={styles['user-form-control']}>
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' onChange={inputUserAgeHandler} value={userAge}/>
                </div>
                <div className={styles['user-form-actions']}>
                <Button type='submit'>Add User</Button>
                </div>
            </form>
        </div>
    )
};


export default AddUser