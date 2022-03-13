import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchCol = () => {
  const [term, setTerm] = useState();

  return (
    <form className="flex items-center mx-5 lg:mx-0">
      <input className="w-full rounded-lg h-10 p-5 bg-white" type="search" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search your favorite shoes..." />
      <button type="submit" className=" text-navy ">
        <BsSearch className="-ml-9 text-navy p-2 text-4xl" />
      </button>
    </form>
  );
};

export default SearchCol;
