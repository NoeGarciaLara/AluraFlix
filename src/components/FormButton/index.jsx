import React from 'react';
import styles from'./FormButton.module.css';

const FormButton = ({ type, label, onClick, disabled, buttonType }) => {
    return (
        <button
            type={type}
            className={`${styles.formButton} ${styles['formButton' + buttonType]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default FormButton;
