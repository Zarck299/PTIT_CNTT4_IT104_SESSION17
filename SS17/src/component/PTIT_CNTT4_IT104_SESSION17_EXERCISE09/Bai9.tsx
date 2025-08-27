import { useEffect, useState } from "react";

type Task = {
  id: number;
  taskName: string;
  completed: boolean;
};

export default function TodoListEx09() {
  const [taskName, setTaskName] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]") || [];
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = () => {
    if (taskName.trim() === "") {
      alert("Tên công việc không được để trống!");
      return;
    }
    if (tasks.some((t) => t.taskName === taskName && t.id !== editId)) {
      alert("Tên công việc đã tồn tại!");
      return;
    }
    if (isEdit && editId !== null) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editId ? { ...t, taskName: taskName } : t
        )
      );
      setTaskName("");
      setIsEdit(false);
      setEditId(null);
    } else {
      const newTask: Task = {
        id: Date.now(),
        taskName,
        completed: false,
      };
      setTasks((prev) => [...prev, newTask]);
      setTaskName("");
    }
  };

  const handleEdit = (id: number) => {
    const editTask = tasks.find((t) => t.id === id);
    if (editTask) {
      setTaskName(editTask.taskName);
      setIsEdit(true);
      setEditId(id);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div>
      <h1>DANH SÁCH CÔNG VIỆC</h1>
      <input
        type="text"
        placeholder="Thêm công việc"
        value={taskName}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        {isEdit ? "Cập nhật" : "Thêm"}
      </button>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            {item.completed ? (
              <span style={{ textDecoration: "line-through" }}>
                {item.taskName}
              </span>
            ) : (
              <span>{item.taskName}</span>
            )}
            <button onClick={() => handleEdit(item.id)}>Sửa</button>
            <button onClick={() => handleDelete(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>

      <p>
        Số lượng công việc hoàn thành: {completedCount}/{tasks.length}
      </p>
    </div>
  );
}
