import { useState } from "react";

const AddComment = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <div>
      <button onClick={toggleIsOpen}>Leave a Comment!</button>
      {isOpen ? children : null}
    </div>
  );
};
export default AddComment;
