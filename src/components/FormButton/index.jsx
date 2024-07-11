import PropTypes from 'prop-types';
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

FormButton.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    buttonType: PropTypes.string.isRequired
};

FormButton.defaultProps = {
    onClick: null,
    disabled: false
};

export default FormButton;
