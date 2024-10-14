// Imports:
import PropTypes from "prop-types";

export default function Main({ children }) {
  return (
    <div className="max-w-full overflow-hidden">
      <div className="m-5 grid grid-cols-4 gap-4 max-w-full">{children}</div>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
