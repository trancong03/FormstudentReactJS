import React from "react";

export default function InfoStudent({ student }) {
    return <div>
        Họ Tên: {`${student.firstName || ""} ${student.lastName || ""}`}
        <div>Mô tả:{student.about}</div>
        <br />
        <br />
        <i> Email: {student.email}</i>
        <br />
        <h3>Contact : {student.contact}</h3>
        <h3>Gender: {student.gender}</h3>
        <h3>Subject:  {student.subject?.join(" - ")} </h3>
        <img src={student.avatar} alt="Logo" />

    </div>
}