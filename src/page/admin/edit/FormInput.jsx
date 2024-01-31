// Trong file FormInput.js
import React from 'react';

const FormInput = ({ label, value, onChange, error }) => {
    return (
        <div className="mb-3">
            <label className="form-label font-mono font-semibold">
                {label} <span className="text-red-500">*</span>
            </label>
            <input
                value={value}
                onChange={onChange}
                type="text"
                className="form-control"
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
};

export default FormInput;
