"use server";

// Imports:
import Card from "../components/Card";
import useData from "../hooks/useData";
import Main from "../layouts/Main";

export default function Home() {
  const users = useData();

  return users ? (
    <Main>
      {users && users?.map((user) => <Card key={user?.id} {...user} />)}
    </Main>
  ) : (
    <p>Loading...</p>
  );
}
