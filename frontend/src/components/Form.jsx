import React, { useState } from 'react';
import './Form.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    degree: '',
    institution: '',
    graduationYear: '',
    companyName: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Successfully completed');
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2 className="form-title">Apply for a Job</h2>
        
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName}
          onChange={handleChange}
          className="form-input"
          required 
        />
        
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName}
          onChange={handleChange}
          className="form-input"
          required 
        />
        
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required 
        />
        
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          value={formData.phone}
          onChange={handleChange}
          className="form-input"
          required 
        />
        
        <input 
          type="text" 
          name="address" 
          placeholder="Address" 
          value={formData.address}
          onChange={handleChange}
          className="form-input"
          required 
        />
        
        <input 
          type="date" 
          name="dob" 
          value={formData.dob}
          onChange={handleChange}
          className="form-input"
          required 
        />
        
        <select 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange}
          className="form-input"
          required
        >
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        <select 
          name="degree" 
          value={formData.degree} 
          onChange={handleChange}
          className="form-input"
          required
        >
          <option value="" disabled>Select Degree</option>
          <option value="btech">B.Tech</option>
          <option value="mtech">M.Tech</option>
          <option value="me">ME</option>
          <option value="be">BE</option>
          <option value="bsc">B.Sc</option>
          <option value="msc">M.Sc</option>
        </select>
        
        <input 
          type="text" 
          name="institution" 
          placeholder="Institution" 
          value={formData.institution}
          onChange={handleChange}
          className="form-input"
          required 
        />
        
        <input 
          type="text" 
          name="graduationYear" 
          placeholder="Graduation Year" 
          value={formData.graduationYear}
          onChange={handleChange}
          className="form-input"
          required 
        />
        
        <input 
          type="text" 
          name="companyName" 
          placeholder="Company Name" 
          value={formData.companyName}
          onChange={handleChange}
          className="form-input"
          required 
        />
        
        <input 
          type="file" 
          name="resume" 
          onChange={handleFileChange}
          className="form-input"
          required 
        />
        
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
