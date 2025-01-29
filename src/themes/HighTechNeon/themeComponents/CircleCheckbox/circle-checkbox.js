// circle-checkbox.js
import React from 'react';
import './circle-checkbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CircleCheckbox = ({ id, checked, onChange, iconChecked, iconUnchecked, iconColor, wholeEleClassName }) => {
    return (
        <div className={`circle-checkbox ${wholeEleClassName}`}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                hidden
            />
            <label htmlFor={id} className='circle-checkbox__label'>
                {checked ? (
                    <FontAwesomeIcon icon={iconChecked} color={iconColor} size="xs" />
                ) : (
                    <FontAwesomeIcon icon={iconUnchecked} color={iconColor} size="xs" />
                )}
            </label>
        </div>
    );
};

export default CircleCheckbox;
