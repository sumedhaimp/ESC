import { useState } from "react";
import { Doctors } from "./Doctors";
import DMapData from "./DMapData";
// Data

// Dashboard components

function DMaps() {
  const [query, setQuery] = useState("");
  const [filterData, setData] = useState("");

  // console.log(query)

  const search = (data) => {
    const k = data.filter(
      (item) =>
        item.DoctorName.toLowerCase().includes(query.toLowerCase()) ||
        item.facilities.toLowerCase().includes(query.toLowerCase())
    );
    // setData(k);
    return k;
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          className="search"
          placeholder="search.."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <DMapData data={search(Doctors)} />
    </div>
  );
}

export default DMaps;
