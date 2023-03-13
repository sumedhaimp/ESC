
import { useState } from "react";
import MapData from "./MapData";
import { Hospitals } from "./Hospital";
// Data

// Dashboard components

function Maps() {
  const [query, setQuery] = useState("");
  const [filterData, setData] = useState("");

  // console.log(query)

  const search = (data) => {
    const k = data.filter(
      (item) =>
        item.HospitalName.toLowerCase().includes(query.toLowerCase()) ||
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
        <MapData data={search(Hospitals)} />
      </div>
  );
}

export default Maps;
