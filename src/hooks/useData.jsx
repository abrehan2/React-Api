// Imports:
import axios from "axios";
import { useEffect, useState } from "react";
import { entities } from "../config/entitites";
import { toast } from "react-toastify";

export default function useData() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
         entities.base
        );
        setUsers(response.data);
      } catch {
        toast.error('Error in useData hook');
      }
    })();
  }, []);

  return users;
}
