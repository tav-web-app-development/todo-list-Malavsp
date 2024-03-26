import { useState } from "react";

export default function List({ tasks, handleInputTextChange }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  function handleClick() {
    setShow(!show);
  }

  const a = handleInputTextChange(text);
  a.map((m) => console.log(m));
  // }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setText(e.target.value);
            // handleInputTextChange(e.target.value);
          }}
        />
        <label>
          <input type="checkbox" onClick={handleClick} />
          Show completed tasks
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.name}>
              {show || !task.completed ? (
                <>
                  <td>
                    <span
                      className="completed-task"
                      // style={{ textdecoration: "line-through" }}
                    >
                      {task.completed ? (
                        <del>{tasks[index].name}</del>
                      ) : (
                        tasks[index].name
                      )}
                    </span>
                  </td>
                  <td>
                    {task.completed ? (
                      <del>{tasks[index].dueDate}</del>
                    ) : (
                      tasks[index].dueDate
                    )}
                  </td>
                </>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
