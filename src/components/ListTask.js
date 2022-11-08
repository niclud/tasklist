import Button from "./Button";
function ListTask(){
    const date = new Date();
    return (
        <div className="bg-white justify-center m-0 p-2  rounded-lg">
            <div className="grid grid-flow-col justify-start w-full">
                <p className="uppercase">
                    {date.toLocaleString("es", { day: "numeric" })}
                    {date.toLocaleString("es", { weekday: "long" })}
                    {date.toLocaleString("es", { month: "short" })}
                    {date.toLocaleString("es", { year: "numeric" })}
                </p>
            </div>
            <form>
                <input type="text" name="taskText" className="rounded-lg bg-slate-300 px-2" placeholder="agregar tarea"></input>
                <button className="bg-cyan-500 hover:bg-cyan-600 rounded-full">+</button>
                <Button>ordenar</Button>
            </form>
        </div>
    )
}

export default ListTask;