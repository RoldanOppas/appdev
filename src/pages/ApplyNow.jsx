import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/ApplyNow.css';

// Import icons (you can replace these with actual icon components or imports)
const RequirementIcons = [
  '📄', // Document
  '📷', // Camera
  '📋', // Clipboard
  '👥', // Group
  '🏫', // School
  '📞', // Phone
];

const ApplyNow = () => {
  const { level } = useParams();
  const [formData, setFormData] = useState({
    studentName: '',
    studentAge: '',
    parentName: '',
    email: '',
    phoneNumber: '',
    additionalNotes: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.studentName || !formData.studentAge) {
      alert('Please fill in all required fields');
      return;
    }

    // Convert age to number and add validation
    const age = parseInt(formData.studentAge);
    if (isNaN(age) || age < 3 || age > 18) {
      alert('Please enter a valid age between 3 and 18');
      return;
    }

    // Simulate form submission
    console.log('Submitted Data:', formData);
    alert('Application submitted successfully! We will contact you soon.');
    
    // Reset form after submission
    setFormData({
      studentName: '',
      studentAge: '',
      parentName: '',
      email: '',
      phoneNumber: '',
      additionalNotes: ''
    });
  };

  // Requirements for different levels
  const requirementsByLevel = {
    preschool: [
      'Must be 5 years old before August 31 of the current school year',
      'Meet academic readiness through an interview',
      'Must be toilet-trained',
      'Provide recent health check documentation',
      'Attend a parent-child orientation session'
    ],
    kindergarten: [
      'Photocopy of Birth Certificate',
      'Two copies of 2x2 latest colored photos',
      'Photocopy of medical records',
      'Complete reservation/registration fee',
      'Attend mandatory intake interview',
      'Parent orientation attendance required'
    ],
    elementary: [
      'Photocopy of Birth Certificate',
      'Two copies of 2x2 latest colored photos',
      'Up-to-date medical records',
      'Previous academic transcripts',
      'Enrollment fee payment',
      'Mandatory parent-student interview'
    ],
    highschool: [
      'Official report cards from previous school',
      'Birth certificate copy',
      'Passport-sized photographs',
      'Recommendation letters',
      'Completed enrollment forms',
      'Academic and character assessment'
    ]
  };

  const renderRequirements = () => {
    const requirements = requirementsByLevel[level] || [];
    
    return (
      <div className="requirements-section">
        <h3>Application Requirements</h3>
        <div className="requirements-wrapper">
          {requirements.map((req, index) => (
            <div key={index} className="requirement-card">
              <div className="requirement-icon">
                {RequirementIcons[index % RequirementIcons.length]}
              </div>
              <div className="requirement-text">{req}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderForm = () => {
    switch (level) {
      case 'preschool':
      case 'kindergarten':
      case 'elementary':
      case 'highschool':
        return (
          <form onSubmit={handleSubmit} className="enrollment-form">
            <h2>{level.charAt(0).toUpperCase() + level.slice(1)} Application</h2>
            <p className="description">Prepare your child for a brighter future with our nurturing Montessori environment!</p>
            
            {renderRequirements()}

            <div className="form-section">
              <div className="form-group">
                <label htmlFor="studentName">Student Full Name *</label>
                <input 
                  type="text" 
                  id="studentName" 
                  value={formData.studentName}
                  onChange={handleInputChange}
                  placeholder="Enter student's full name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentAge">Student Age *</label>
                <input 
                  type="number" 
                  id="studentAge" 
                  value={formData.studentAge}
                  onChange={handleInputChange}
                  placeholder="Enter student's age" 
                  min="3" 
                  max="18"
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="parentName">Parent/Guardian Name</label>
                <input 
                  type="text" 
                  id="parentName" 
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="Enter parent/guardian name" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                  type="tel" 
                  id="phoneNumber" 
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter contact number" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="additionalNotes">Additional Notes</label>
                <textarea 
                  id="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  placeholder="Any additional information you'd like to share"
                  rows="4"
                />
              </div>
            </div>

            <div className="submit-section">
              <button type="submit" className="submit-btn">
                Submit Application
                <span className="btn-icon">➤</span>
              </button>
            </div>
          </form>
        );
      case 'job':
        return (
          <div className="placeholder">
            <h2>Job Application</h2>
            <p className="description">
              We are currently accepting applications for various positions. 
              Please email your resume to <strong>hr@pinesmontessori.com</strong>
            </p>
            <div className="job-contact-info">
              <h3>Contact HR</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hr@pinesmontessori.com</p>
            </div>
          </div>
        );
      default:
        return (
          <p className="default-message">
            Please select an application type from the Apply Now menu.
          </p>
        );
    }
  };

  return (
    <div className="apply-container">
      {renderForm()}
    </div>
  );
};

export default ApplyNow;