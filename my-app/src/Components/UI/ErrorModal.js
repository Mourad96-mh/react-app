
import React from 'react';
import Button from './Button';
// import styles from './Button.module.css';
import styles from './ErrorModal.module.css'

const ErrorModal = (props)=> {


    return(
        <div>
        <div className={styles.drop} onClick={props.onClick}></div>
        <div className={styles.modal}>
            <header className={styles['modal-header']}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles['modal-content']}>
                <p>{props.content}</p>
            </div>
            <footer className={styles['modal-footer']}>
                <Button type='button' onClick={props.onClick}>Cancel</Button>
            </footer>
        </div>
        </div>
    )
}


export default ErrorModal;