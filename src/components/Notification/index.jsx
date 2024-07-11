import { useState } from 'react';
import PropTypes from 'prop-types';
import style from'./Notification.module.css';
import { BsCheckCircle } from "react-icons/bs";

const Notification = ({ message, onClose, color }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <div className={`${style.notification} ${show ? style.show : ''}`} style={{ backgroundColor: color }}>
            <div className={style.notificationContent}>
                <div className={style.notificationIcons}>
                    <BsCheckCircle className={style.notificationIcon} />
                </div>
                <p>{message}</p>
                <button className={style.closeButton} onClick={handleClose}>X</button>
            </div>
        </div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    color: PropTypes.string
};

Notification.defaultProps = {
    color: 'var(--color-white)' 
};

export default Notification;