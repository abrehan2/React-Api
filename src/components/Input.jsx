// Imports:
import PropTypes from "prop-types";

export default function Input({ placeholder, inputType, onChange, name }) {
  return (
 
      <input
        type={inputType}
        name={name}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired
};
