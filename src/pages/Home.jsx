"use server";

// Imports:
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import useData from "../hooks/useData";
import Main from "../layouts/Main";

export default function Home() {
  const users = useData();

  return users ? (
    <Main>
      {users?.map((user) => <Card key={user?.id} {...user} />)}
    </Main>
  ) : (
    <Spinner />
  );
}
