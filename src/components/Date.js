import { useState, useEffect } from "react";
function CurrentDate() {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <div id="date" className="flex items-center w-full justify-between">
      <div className="ml-[7px] tracking-wider uppercase">
        {date?.toLocaleString("es", { weekday: "long" })}
      </div>
      <div className="ml-[7px]">
        {date?.toLocaleString("es", { day: "numeric" })}
      </div>
      <div className="ml-[7px] text-[20px] uppercase justify-end">
        {date?.toLocaleString("es", { month: "short" })}
      </div>
      <div className="font-bold ml-[7px] text-[20px] justify-end">
        {date?.toLocaleString("es", { year: "numeric" })}
      </div>
    </div>
  );
}

export default CurrentDate;
