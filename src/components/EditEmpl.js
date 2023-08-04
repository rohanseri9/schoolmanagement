import React, { useState, useEffect } from 'react';
import { useNavigate, Redirect,Route, useParams  } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc } from "firebase/firestore";

const EditEmpl = () => {     
    const [employeeName, setEmployeeName] = useState('');
    const [dob, setDob] = useState('');
    const [Grade, setGrade] = useState('');
    const [email,setemail] =useState('');
    const [FeesStatus, setFeesStatus] = useState('');

    const {id} = useParams();

    useEffect(()=>{
        const docRef = doc(db, "employees", id);
        getDoc(docRef).then((docSnap)=>{
            if (docSnap.exists()) {
                const empdata = docSnap.data();
                setEmployeeName(empdata.name)
                // setDob(new Date(empdata.dateOfBirth))
                 setemail(empdata.email)
                setGrade(empdata.Grade)
                console.log("Document data:", docSnap.data());
                } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
                }
        })
        },[])

 let navigate = useNavigate();

const handleSubmit = async (event)=>{
    event.preventDefault();
    // const ref = collection(db,'employees')
    await setDoc(doc(db,"employees",id), {
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
          <h1> student Details</h1>
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
              type="tri"
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

            <button type="submit">Update Employee</button>
          </form>
          </div>
  );
};

export default EditEmpl;