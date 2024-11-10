// components/ContactUsForm.tsx
import React, { useState } from 'react';
import FormField from './FormField';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      mobile: '',
    };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert('Form submitted successfully!');
      // Handle form submission (e.g., send data to an API)
      console.log(formData);
    }
  };

  return (
    <div
      id="contact-form"  // This ID makes it scrollable
      style={{
        border: '1px solid #ddd',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        maxWidth: '600px',
        margin: '2rem auto',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>
        Contact Us
      </h2>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && (
          <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.name}</p>
        )}

        <FormField
          label="Mobile Number"
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        {errors.mobile && (
          <p style={{ color: 'red', fontSize: '0.875rem' }}>{errors.mobile}</p>
        )}

        <FormField
          label="Email (Optional)"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '1rem',
            width: '100%',
            fontSize: '1rem',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
