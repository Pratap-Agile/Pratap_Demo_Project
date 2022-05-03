import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

let AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((s) => s?.auth?.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  return <>{children};</>;
};

export default AuthGuard;
