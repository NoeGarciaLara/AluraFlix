import { useState, useEffect, useRef, useMemo } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from './Modal.module.css';
import categoryData from '../../data/CategoryData';
import OptionList from '../OptionList';
import { validateForm } from '../../utils/ValidateForm';
import FormButton from '../FormButton';
import ConfirmationDialog from '../ConfirmationDialog';

const Modal = ({ card, isOpen, onClose, onSave }) => {
    const initialFormData = useMemo(() => ({
        title: '',
        category: '',
        photo: '',
        link: '',
        description: '',
    }), []);

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const descriptionRef = useRef(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        if (isOpen && card) {
            setFormData({ ...card });
        } else {
            setFormData(initialFormData);
        }
        setErrors({});
    }, [card, isOpen, initialFormData]);

    useEffect(() => {
        const validate = async () => {
            const formErrors = await validateForm(formData);
            setErrors(formErrors);
            setIsButtonDisabled(Object.keys(formErrors).length > 0);
        };
        validate();
    }, [formData]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value.toString() });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formErrors = await validateForm(formData);
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            setShowConfirmation(true);
        }
    };

    const handleConfirmSave = () => {
        onSave(formData);
        setShowConfirmation(false);
    };

    const handleCancelSave = () => {
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setErrors({});
        setIsButtonDisabled(true);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <IoMdCloseCircleOutline className={styles.closeIcon} onClick={onClose} />
                <h1>EDITAR CARD:</h1>
                <form className={styles.modalForm} onSubmit={handleSave}>
                    <label className={styles.modalFormLabel}>Título:
                        <input
                            className={`${styles.modalFormInput} ${errors.title ? styles.error : ''}`}
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            maxLength="200"
                            required
                        />
                        {errors.title && <span className={styles.errorMessage}>{errors.title}</span>}
                    </label>
                    <OptionList
                        clase={`${styles.modalFormInput} ${styles.modalFormOption} ${errors.photo ? styles.error : ''}`}
                        clase2={styles.dropdownOption}
                        value={formData.category}
                        onChange={(e) => handleChange({ target: { name: 'category', value: e.target.value } })}
                        options={categoryData}
                    />
                    {errors.category && <span className={styles.errorMessage}>{errors.category}</span>}
                    <label className={styles.modalFormLabel}>Imagen:
                        <input
                            className={`${styles.modalFormInput} ${errors.photo ? styles.error : ''}`}
                            type="url"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            maxLength="200"
                            required
                        />
                        {errors.photo && <span className={styles.errorMessage}>{errors.photo}</span>}
                    </label>
                    <label className={styles.modalFormLabel}>Video:
                        <input
                            className={`${styles.modalFormInput} ${errors.link ? styles.error : ''}`}
                            type="url"
                            name="link"
                            value={formData.link}
                            onChange={handleChange}
                            maxLength="200"
                            required
                        />
                        {errors.link && <span className={styles.errorMessage}>{errors.link}</span>}
                    </label>
                    <label className={styles.modalFormLabel}>Descripción:
                        <textarea
                            className={`${styles.modalFormInput} ${styles.modalFormTextarea} ${errors.description ? styles.error : ''}`}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            ref={descriptionRef}
                            rows="1"
                            maxLength="500"
                            required
                        />
                        {errors.description && <span className={styles.errorMessage}>{errors.description}</span>}
                    </label>
                    <div className={styles.newVideoFormButtons}>
                        <FormButton
                            type="submit"
                            label="GUARDAR"
                            disabled={isButtonDisabled}
                            buttonType="--save"
                        />
                        <FormButton
                            type="button"
                            label="LIMPIAR"
                            onClick={handleCancel}
                            buttonType="--cancel"
                        />
                    </div>
                </form>
            </div>
            {showConfirmation && (
                <ConfirmationDialog
                    message={`¿Estás seguro de que deseas guardar los cambios?`}
                    onConfirm={handleConfirmSave}
                    onCancel={handleCancelSave}
                />
            )}
        </div>
    );
};

export default Modal;
