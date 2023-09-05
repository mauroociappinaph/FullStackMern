import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Componente TogglePasswordButton
const TogglePasswordButton = ({ isPasswordVisible, onToggle }) => {
  // Simplificamos la función para manejar el clic en el botón
  const handleToggleClick = () => {
    onToggle && onToggle(); // Llamamos a la función onToggle sin argumentos
  };

  return (
    <button
      type="button"
      onClick={handleToggleClick}
      className={`password-toggle-button py-2 mt-3 ml-3 text-center font-bold text-xl md:text-left mb-1 md:mb-0 pr-4 rounded-lg ${
        isPasswordVisible
          ? "text-orange-500"
          : "text-gray-400"
      } focus:outline-none focus:ring focus:ring-orange-200 focus:ring-opacity-50`}
    >
      <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
    </button>
  );
};

export default TogglePasswordButton;
