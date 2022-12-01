import { useState } from "react";

function Task(props) {
  const [enabled, setEnabled] = useState(true);
  const className = enabled ? "" : "uppercase";
  return (
    <div className=" bg-yellow-400 rounded-lg p-3">
      <strong onClick={() => setEnabled(!enabled)} className={className}>
        {props.name}
      </strong>
    </div>
  );
}

export default Task;
