import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Formbox from "@components/Formbox";
import Button from "@components/Button";

const Userhomepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* ฝั่งซ้าย: แสดงรายการที่มีอยู่แล้ว */}
      <div
        className="list-container"
        style={{ flex: 2, border: "1px solid #ddd", padding: "15px" }}
      >
        <h3>My Tasks</h3>
        <p>รายการที่ต้องทำจะแสดงตรงนี้...</p>
      </div>

      {/* ฝั่งขวา: ฟอร์มเพิ่มรายการใหม่ */}
      <div
        className="list-form"
        style={{
          flex: 1,
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <Formbox />
      </div>
    </div>
  );
};

export default Userhomepage;
