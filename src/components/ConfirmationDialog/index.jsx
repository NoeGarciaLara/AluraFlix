import style from './ConfirmationDialog.module.css';

const ConfirmationDialog = ({ message, primaryColor, onConfirm, onCancel }) => {
    return (
        <div className={style.confirmationDialog}>
            <p className={style.confirmationDialogMessage}>
                {message} <span className={style.confirmationDialogTitle} style={{ color: primaryColor }}></span>
            </p>
            <button className={style.confirmationYes} onClick={onConfirm}>Sí</button>
            <button className={style.confirmationNo} onClick={onCancel}>No</button>
        </div>
    );
};

export default ConfirmationDialog;
