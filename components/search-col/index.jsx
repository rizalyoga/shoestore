import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchCol = () => {
  const [term, setTerm] = useState();

  return (
    <form className="flex items-center mx-5 lg:mx-0">
      <input className="w-full rounded-lg h-10 p-5 bg-white" type="search" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search your favorite shoes..." /> <BsSearch className="-ml-8" />
    </form>
  );
};

export default SearchCol;
