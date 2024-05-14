import React from "react";
import Spinner from "../Spinner/Spinner";

type ButtonProps = {
  onLogin: () => void;
  isLoading: boolean;
  title: string;
};

const Button = ({ onLogin, isLoading, title }: ButtonProps) => {
  return (
    <button onClick={onLogin}>{isLoading ? <Spinner /> : <>{title}</>}</button>
  );
};

export default Button;
