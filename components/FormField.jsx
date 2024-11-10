// components/FormField.tsx
import React from 'react';



const FormField = ({
  label,
  type,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div style={{ marginBottom: '1rem', width: '100%' }}>
      <label
        htmlFor={name}
        style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: '100%',
          padding: '0.8rem',
          borderRadius: '8px',
          border: '1px solid #ddd',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
};

export default FormField;
