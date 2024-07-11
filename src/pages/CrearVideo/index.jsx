import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './CrearVideo.module.css';
import categoryData from '../../data/CategoryData';
import { validateForm } from '../../utils/ValidateForm';
import OptionList from '../../components/OptionList';
import { useVideoContext } from '../../context';
import FormButton from '../../components/FormButton';
import Notification from '../../components/Notification';
import ConfirmationDialog from '../../components/ConfirmationDialog';

function CrearVideo() {
    const { addVideo } = useVideoContext();
   
    const initialFormData = {
        title: '',
        category: '',
        photo: '',
        link: '',
        description: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({
        title: false,
        category: false,
        photo: false,
        link: false,
        description: false,
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const descriptionRef = useRef(null);
    const navigateTo = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        validateFormAndSetErrors();
    }, [formData]);

    const validateFormAndSetErrors = async () => {
        const formErrors = await validateForm(formData);
        setErrors(formErrors);
        setIsButtonDisabled(Object.keys(formErrors).length > 0 || !isFormFilled(formData));
    };

    const isFormFilled = (formData) => {
        return (
            formData.title.trim() !== '' &&
            formData.category.trim() !== '' &&
            formData.photo.trim() !== '' &&
            formData.link.trim() !== '' &&
            formData.description.trim() !== ''
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFieldBlur = (field) => {
        setTouchedFields({ ...touchedFields, [field]: true });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        await validateFormAndSetErrors();
        if (isFormFilled(formData) && Object.keys(errors).length === 0) {
            setShowConfirmation(true); 
        }
    };

    const handleConfirmSave = () => {
        addVideo(formData);
        setNotificationMessage('El video se ha guardado exitosamente.');
        setShowConfirmation(false);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
            navigateTo('/');
        }, 3000); 
    };

    const handleCancelSave = () => {
        setShowConfirmation(false);
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setErrors({});
        setTouchedFields({
            title: false,
            category: false,
            photo: false,
            link: false,
            description: false,
        });
    };

    return (
        <div className={style.newVideoPage}>
            <div className={style.containerNewVideo}>
                <header className={style.newVideoHeader}>
                    <h1 className={style.newVideoTitle}>NUEVO VIDEO</h1>
                    <p className={style.newVideoDescription}>
                        COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
                    </p>
                </header>
                <form className={style.newVideoForm} onSubmit={handleSave}>
                    <div className={style.formSection}>
                        <div className={style.formSectionLeft}>
                            <h2 className={style.newVideoFormTitle}>Crear Tarjeta</h2>
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <div className={style.formSectionLeft}>
                        <label className={`${style.newVideoFormLabel} ${errors.title && touchedFields.title ? style.errorLabel : ''}`}>
                                Título:
                                <input
                                    className={`${style.newVideoFormInput} ${errors.title && touchedFields.title ? style.error : ''}`}
                                    type="text"
                                    placeholder='Ingresar título del video'
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    onBlur={() => handleFieldBlur('title')}
                                    maxLength="200"
                                    required
                                />
                                {errors.title && touchedFields.title && <span className={style.errorMessage}>{errors.title}</span>}
                            </label>
                        </div>
                        <div className={style.formSectionRight}>
                            <OptionList
                                clase={`${style.newVideoFormInput} ${style.newVideoFormOption} ${errors.category && touchedFields.category ? style.errorLabel : ''}`}
                                clase2={style.newVideoDropdownOption}
                                value={formData.category}
                                onChange={(e) => {
                                    handleChange({ target: { name: 'category', value: e.target.value } });
                                    handleFieldBlur('category');
                                }}
                                options={categoryData}
                            />
                            {errors.category && touchedFields.category && <span className={style.errorMessage}>{errors.category}</span>}
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <div className={style.formSectionLeft}>
                            <label className={`${style.newVideoFormLabel} ${errors.photo && touchedFields.photo ? style.errorLabel : ''}`}>
                                Imagen:
                                <input
                                    className={`${style.newVideoFormInput} ${errors.photo && touchedFields.photo ? style.error : ''}`}
                                    type="url"
                                    placeholder='Ingresar enlace de la imagen'
                                    name="photo"
                                    value={formData.photo}
                                    onChange={handleChange}
                                    onBlur={() => handleFieldBlur('photo')}
                                    maxLength="200"
                                    required
                                />
                                {errors.photo && touchedFields.photo && <span className={style.errorMessage}>{errors.photo}</span>}
                            </label>
                        </div>
                        <div className={style.formSectionRight}>
                            <label className={`${style.newVideoFormLabel} ${errors.link && touchedFields.link ? style.errorLabel : ''}`}>
                                Video:
                                <input
                                    className={`${style.newVideoFormInput} ${errors.link && touchedFields.link ? style.error : ''}`}
                                    type="url"
                                    placeholder='Ingresar enlace del video'
                                    name="link"
                                    value={formData.link}
                                    onChange={handleChange}
                                    onBlur={() => handleFieldBlur('link')}
                                    maxLength="200"
                                    required
                                />
                                {errors.link && touchedFields.link && <span className={style.errorMessage}>{errors.link}</span>}
                            </label>
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <div className={style.formSectionLeft}>
                            <label className={`${style.newVideoFormLabel} ${errors.description && touchedFields.description ? style.errorLabel : ''}`}>
                                Descripción:
                                <textarea
                                    className={`${style.newVideoFormInput} ${style.newVideoFormTextarea} ${errors.description && touchedFields.description ? style.error : ''}`}
                                    name="description"
                                    placeholder='¿De qué se trata este vídeo?'
                                    value={formData.description}
                                    onChange={handleChange}
                                    onBlur={() => handleFieldBlur('description')}
                                    ref={descriptionRef}
                                    rows="4"
                                    maxLength="300"
                                    required
                                />
                                {errors.description && touchedFields.description && <span className={style.errorMessage}>{errors.description}</span>}
                            </label>
                        </div>
                    </div>
                    <div className={style.newVideoFormButtons}>
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
            {showNotification && (
                <Notification
                    message={notificationMessage}
                    onClose={() => setShowNotification(false)}
                />
            )}
            {showConfirmation && (
                <ConfirmationDialog
                    message={`¿Estás seguro de que deseas guardar este nuevo video?`}
                    onConfirm={handleConfirmSave}
                    onCancel={handleCancelSave}
                />
            )}
        </div>
    );
}

export default CrearVideo;