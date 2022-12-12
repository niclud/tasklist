import { useState, useEffect } from "react";
function CurrentDate() {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <div id="date" className="flex items-center justify-between w-full">
      <div id="dateRigth" className="flex items-center">
        <div id="dateNumber" className="text-[50px] font-bold">
          <div>
            {date?.toLocaleString("es", { day: "numeric" })}
            <div className="ml-[7px] text-[20px]">
              {date?.toLocaleString("es", { year: "numeric" })}
            </div>
            <div className="font-bold ml-[7px] text-[20px]">
              {date?.toLocaleString("es", { month: "short" })}
            </div>
          </div>
        </div>
        <div id="dateText" className="uppercase ml-[10px] tracking-[3px]">
          {date?.toLocaleString("es", { weekday: "long" })}
        </div>
      </div>
    </div>
  );
}

export default CurrentDate;
