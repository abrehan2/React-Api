// Imports:
import PropTypes from "prop-types";
export default function Modal() {
  return (
    <div
      tabIndex="-1"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative rounded-lg shadow-lg bg-white">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-black">
            <h3 className="text-xl font-normal text-black">
              User Creation Form
            </h3>
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* Input fields will go here. */}
              </div>
            </form>
          </div>

          <div className="flex justify-end space-x-3 items-center border-black p-4 md:p-5 border-t rounded-b">
            {/* Buttons will go here. */}
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
