import React, { useState, useEffect } from 'react';
import { useNavigate, Redirect,Route  } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const Employee = () => {     
    const [employeeName, setEmployeeName] = useState('');
    const [dob, setDob] = useState('');
    const [Grade, setGrade] = useState('');
    const [email, setemail] = useState('');

    const [FeesStatus, setFeesStatus] = useState('');

    let navigate = useNavigate();

const handleSubmit = async (event)=>{
    event.preventDefault();
    const ref = collection(db,'employees')
    await addDoc(ref, {
        dateOfBirth:dob,
        Grade:Grade,
        email:email,
        name:employeeName,
        FeesStatus:FeesStatus
    });    
    navigate('/employees');
}
  return (
    <div>
          <h1>student</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
            <input
              type="Grade"
              placeholder="Grade"
              value={Grade}
              onChange={(event) => setGrade(event.target.value)}
            />
           <input
              type="try"
              placeholder="email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
           
            <input
              type="FeesStatus"
              placeholder="FeesStatus"
              value={FeesStatus}
              onChange={(event) => setFeesStatus(event.target.value)}
            />
            <button type="submit">Add student</button>
          </form>
          </div>
  );
};

export default Employee;