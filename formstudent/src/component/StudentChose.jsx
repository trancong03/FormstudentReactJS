import React from "react";
export default function StudentChose() {
    return <div>
        <label>Gender*</label>
        <div className="gender">
            <input type="radio" id="male" name="gender" value="male" required />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" required />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" required />
            <label htmlFor="other">Other</label>
        </div>

        <label>Your best Subject</label>
        <div className="subject">
            <input type="checkbox" id="english" name="subject" value="english" />
            <label htmlFor="english">English</label>
            <input type="checkbox" id="maths" name="subject" value="maths" />
            <label htmlFor="maths">Maths</label>
            <input type="checkbox" id="physics" name="subject" value="physics" />
            <label htmlFor="physics">Physics</label>
        </div>

    </div>
}