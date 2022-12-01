function Date() {
  const date = new Date();
  return (
    <div className="grid grid-flow-col justify-start w-full">
      <p className="uppercase">
        {date.toLocaleString("es", { day: "numeric" })}
        {date.toLocaleString("es", { weekday: "long" })}
        {date.toLocaleString("es", { month: "short" })}
        {date.toLocaleString("es", { year: "numeric" })}
      </p>
    </div>
  );
}

export default Date;
