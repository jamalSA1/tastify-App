import db from " /db";
import React from "react";

export default async function Products() {
  const userName = await db.userTastify.findMany()
  return <div>
    {userName.map(name => (
      <p>{name.name}</p>
    ))}
  </div>;
}
