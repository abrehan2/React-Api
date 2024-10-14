// Imports:
import PropTypes from "prop-types";

export default function Badge({ variant = "Default", value }) {
  const variants = {
    Default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    Red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    Green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  };

  const selector = variants[variant] ?? variants.Default;

  return (
    <span
      className={`${selector} text-xs font-medium me-2 px-2.5 py-0.5 rounded-full`}
    >
      {value}
    </span>
  );
}

Badge.propTypes = {
  variant: PropTypes.oneOf(["Default", "Dark", "Red", "Green"]),
  value: PropTypes.string.isRequired,
};
