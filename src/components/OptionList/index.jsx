import { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import styles from './OptionList.module.css';

const OptionList = ({ value, onChange, options, clase, clase2 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        onChange({ target: { name: 'category', value: option } });
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.optionList} ref={dropdownRef}>
            Categoría:
            <div className={styles.inputWithIcon} onClick={handleToggleDropdown}>
                <div className={`${clase}`}>
                    {value || "Seleccionar categoría"}
                </div>
                <IoMdArrowDropdown className={`${styles.dropdownIcon} ${styles.dropdownIconVideo}`} />
            </div>
            {isOpen && (
                <ul className={styles.dropdownOptions}>
                    {options.map((option) => (
                        <li
                            key={option.id}
                            className={`${clase2}`}
                            onClick={() => handleSelectOption(option.name)}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OptionList;
