// Imports:
import Badge from "./Badge";
import Button from "./Button";

// Card will have dynamic values along with a delete handler.
export default function Card() {
  return (
    <div className="max-w-sm overflow-hidden p-6 space-y-3 shadow-lg bg-slate-300 border border-slate-300 rounded-lg">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Abdul Rehan
      </h5>
      <div className="space-y-2">
        <Badge variant="Default" value={'abc@email.com'} />
        <Badge variant="Green" value={'1234567'} />
        <p className="mb-3 font-normal text-gray-700">
         Software Engineer
        </p>
      </div>
      <div className="space-x-3 flex justify-end">
        <Button variant="Red" value="Delete" onClick={() => {}} />
      </div>
    </div>
  );
}
