import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = "/sritan_resume.pdf";
  }, []);

  return null;
};

export default Resume;