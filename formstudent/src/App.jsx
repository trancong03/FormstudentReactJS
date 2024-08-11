import { useState } from 'react'
import './App.css'
import StudentInfo from './component/InfoStudent';
import InfoStudent from './component/InfoStudent';
const initstudent = {};
function App() {
  const [student, setStudent] = useState(initstudent);
  const handelChange = (event) =>{
    const{name,value,type} = event.target; 
    if (type === "checkbox"){
      const newSubject = student?.subject? [...student?.subject]:[];
      if(newSubject.includes(value)){
        const indexDel = newSubject.indexOf(value);
        newSubject.splice(indexDel,1);
      }
      else{
        newSubject.push(value);
      }
      
      setStudent({
        ...student,
        [name]: newSubject,
      });
    }
    else{
      setStudent({
        ...student,
        [name]: value,
      });
    }
  };
  console.log("=====================================");
  console.log(student);
  console.log("=====================================");
  return (
    <div style={{display: "flex", justifyContent: "center", gap:20}}>
      <div className="form-container" >
        <h2>Form in React</h2>
        <form>
          <label htmlFor="firstName">First Name*</label>
          <input onChange={handelChange} type="text" id="firstName" name="firstName" placeholder="Enter First Name" />

          <label htmlFor="lastName">Last Name*</label>
          <input onChange={handelChange} type="text" id="lastName" name="lastName" placeholder="Enter Last Name" />

          <label htmlFor="email">Enter Email*</label>
          <input onChange={handelChange} type="email" id="email" name="email" placeholder="Enter email" />

          <label htmlFor="contact">Contact*</label>
          <input onChange={handelChange} type="tel" id="contact" name="contact" placeholder="Enter Mobile number" />
          <label>Gender*</label>
          <div className="gender">
            <input onChange={handelChange} type="radio" id="male" name="gender" value="male" required />
            <label htmlFor="male">Male</label>
            <input onChange={handelChange}  type="radio" id="female" name="gender" value="female" required />
            <label htmlFor="female">Female</label>
            <input onChange={handelChange}  type="radio" id="other" name="gender" value="other" required />
            <label htmlFor="other">Other</label>
          </div>

          <label>Your best Subject</label>
          <div className="subject">
            <input onChange={handelChange}  type="checkbox" id="english" name="subject" value="english" />
            <label htmlFor="english">English</label>
            <input onChange={handelChange}  type="checkbox" id="maths" name="subject" value="maths" />
            <label htmlFor="maths">Maths</label>
            <input onChange={handelChange}  type="checkbox" id="physics" name="subject" value="physics" />
            <label htmlFor="physics">Physics</label>
          </div>

          <label htmlFor="resume">Upload Resume*</label>
          <input onChange={handelChange}  type="file" id="resume" name="resume" required />

          <label htmlFor="url">Enter URL*</label>
          <input onChange={handelChange}  type="url" id="url" name="url" placeholder="Enter url" required />

          <label htmlFor="choice">Select your choice</label>
          <select id="choice" name="choice">
            <option value="">Select your Ans</option>
          </select>

          <label htmlFor="about">About</label>
          <textarea onChange={handelChange} id="about" name="about" placeholder="About your self"></textarea>

          <div className="buttons">
            <button type="reset" className="reset-button">Reset</button>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
      <InfoStudent student={student}/>
    </div>
  )
}

export default App
