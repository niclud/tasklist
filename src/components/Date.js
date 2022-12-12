import { useState, useEffect } from "react";
function CurrentDate() {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <div className="grid grid-flow-col justify-start w-full">
      <div id="dateRigth">
        <div id="dateNumber">
          <div>
            {date?.toLocaleString("es", { day: "numeric" })}
            <div>{date?.toLocaleString("es", { month: "short" })}</div>
            <div>{date?.toLocaleString("es", { year: "numeric" })}</div>
          </div>
        </div>
        <div id="dateText">
          {date?.toLocaleString("es", { weekday: "long" })}
        </div>
      </div>
    </div>
  );
}

export default CurrentDate;
