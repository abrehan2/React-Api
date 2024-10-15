// Imports:
import PropTypes from "prop-types";

export default function Button({ variant = "Default", value, onClick, type = "button" }) {
  const variants = {
    Default: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300",
    Alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100",
    Dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300",
    Light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100",
    Green: "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300",
    Red: "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300",
    Yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300",
    Purple: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300",
  };

  const selector = variants[variant] ?? variants.Default;

  return (
    <button
      type={type}
      className={`focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 ${selector}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["Default", "Alternative", "Dark", "Light", "Green", "Red", "Yellow", "Purple"]),
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};