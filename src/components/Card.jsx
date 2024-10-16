// Imports:
import Badge from "./Badge";
import { Capitalize } from "../utils";
import Button from "./Button";
import axios from "axios";
import { entities } from "../config/entitites";

export default function Card(user) {
  
  const deleteHandler = async () => {
    await axios.delete(entities.base.concat(`/${user.id}`));
    window.location.reload();
  };

  return (
    <div className="max-w-sm overflow-hidden p-6 space-y-3 shadow-lg bg-slate-300 border border-slate-300 rounded-lg">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {Capitalize(user.name)}
      </h5>
      <div className="space-y-2">
        <Badge variant="Default" value={user.email} />
        <Badge variant="Green" value={user.phone} />
        <p className="mb-3 font-normal text-gray-700">
          {Capitalize(user.designation)}
        </p>
      </div>
      <div className="space-x-3 flex justify-end">
        <Button variant="Red" value="Delete" onClick={deleteHandler} />
      </div>
    </div>
  );
}
