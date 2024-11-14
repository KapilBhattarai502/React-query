import React, { useState } from "react";

import { useAddSuperHeroData, useFetch } from "../Hooks/FetchHook";

const RQSuperHerosPage = () => {
  const [name, setName] = useState<string>("");
  const [alterego, setAlterEgo] = useState<string>("");

  const queryName = "get-superheroes";

  const { isLoading, data, isError, error } = useFetch(queryName);
  const { mutate } = useAddSuperHeroData();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const hero = { name, alterego };
    mutate(hero);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="alter ego"
          value={alterego}
          onChange={(e) => {
            setAlterEgo(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <div>RQSuperHerosPage</div>
      {data?.data.map((hero: any) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHerosPage;
