import { useState } from "react";
import AddComment from "./addComment";

const Comments = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <div>
      <button onClick={toggleIsOpen}>
        {isOpen ? "Hide Comments" : "Show Comments"}
      </button>
      {isOpen ? children : null}
    </div>
  );
};

export default Comments;
