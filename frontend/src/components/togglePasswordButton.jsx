import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const TogglePasswordButton = ({ onToggle }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
    onToggle && onToggle(!isPasswordVisible);
  };

  return (
    <button
      type="button"
      onClick={handleToggleClick}
      className="password-toggle-button py-2 mt-3 ml-3 text-center text-orange-500 font-bold text-xl md:text-left mb-1 md:mb-0 pr-4 bg-gray-200 rounded focus:outline-none focus:bg-white focus:border-orange-500"
    >
      <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
    </button>
  );
};

export default TogglePasswordButton;
