import { useState, useEffect } from "react";
function CurrentDate() {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <div id="date" className="flex items-center w-full justify-between">
      <div className=" tracking-wider uppercase">
        {date?.toLocaleString("es", { weekday: "long" })}
      </div>
      <div className=" uppercase mr-[5px]">
        {date?.toLocaleString("es", { day: "numeric" })}/
        {date?.toLocaleString("es", { month: "short" })}/
        {date?.toLocaleString("es", { year: "numeric" })}
      </div>
    </div>
  );
}

export default CurrentDate;
