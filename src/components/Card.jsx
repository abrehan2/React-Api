// Imports:
import { Link } from "react-router-dom";
import Badge from "./Badge";

export default function Card() {
  return (
    <div className="max-w-sm overflow-hidden p-6 space-y-3 shadow-lg bg-slate-300 border border-slate-300 rounded-lg">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Abdul Rehan
      </h5>
      <div className="space-y-2">
        <Badge variant="Default" value={"abc@gmail.com"} />
        <Badge variant="Green" value={"123456"} />
        <p className="mb-3 font-normal text-gray-700">Software Engineer</p>
      </div>
      <div className="space-x-3 flex justify-end">
        <Link
          to="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View
        </Link>
        <Link
          to="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}
