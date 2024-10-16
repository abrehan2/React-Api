// Imports:
import PropTypes from "prop-types";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { entities } from "../config/entitites";

export default function Modal({ open, setOpen }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    designation: "",
    phone: null,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createHandler = async (e) => {
    e.preventDefault();

    if (Object.values(values).some((value) => value === "" || value === null)) {
      toast.error("Please fill all the fields");
    }

    try {
      await axios.post(entities.base, values);
      setOpen(!open);
      window.location.reload();
    } catch(err) {
      console.log('ERROR: ', err);
      toast.error("Something went wrong");
    }
  };

  return (
    open && (
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
                  <Input
                    name={"name"}
                    inputType={"text"}
                    placeholder="Name"
                    onChange={changeHandler}
                  />
                  <Input
                    name={"email"}
                    inputType={"text"}
                    placeholder="Email"
                    onChange={changeHandler}
                  />
                  <Input
                    name={"designation"}
                    inputType={"text"}
                    placeholder="Designation"
                    onChange={changeHandler}
                  />
                  <Input
                    name={"phone"}
                    inputType={"number"}
                    placeholder="Phone"
                    onChange={changeHandler}
                  />
                </div>
              </form>
            </div>

            <div className="flex justify-end space-x-3 items-center border-black p-4 md:p-5 border-t rounded-b">
              <Button
                variant="Default"
                value="Create"
                type="submit"
                onClick={createHandler}
              />
              <Button
                variant="Red"
                value="Close"
                type="button"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
