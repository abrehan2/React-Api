// Imports:
import PropTypes from "prop-types";
import Button from "../components/Button";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Main({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="m-5 max-w-full overflow-hidden space-y-3">
        <Button
          variant="Default"
          value="Create User"
          onClick={() => setOpen(!open)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full">
          {children}
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node,
};
