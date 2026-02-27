import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ 
  label, type, value, placeholder, required = true, onChange 
}) => {
  return (
    <div style={{ marginBottom: '15px', textAlign: 'left' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        {label}:
      </label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          boxSizing: 'border-box' // สำคัญเพื่อให้ padding ไม่ดันขนาด input
        }}
      />
    </div>
  );
};

export default FormInput;