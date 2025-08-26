import { useEffect, useState } from "react";

type Task = {
  id: number;
  taskName: string;
  completed: boolean;
};

export default function TodoList() {
  const [taskName, setTaskName] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]") || [];
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = () => {
    if (taskName.trim() === "") {
      alert("Tên công việc không được để trống!");
      return;
    }

    if (tasks.some((t) => t.taskName === taskName)) {
      alert("Tên công việc đã tồn tại!");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      taskName,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setTaskName("");
  };
  const handleEdit = (id: number) => {
    const editTask = tasks.find((t) => t.id === id);
    if (editTask) {
      setTaskName(editTask.taskName);
      setEditId(id);
      setIsModalOpen(true);
    }
  };
  const handleUpdate = () => {
    if (taskName.trim() === "") {
      alert("Tên công việc không được để trống!");
      return;
    }

    if (tasks.some((t) => t.taskName === taskName && t.id !== editId)) {
      alert("Tên công việc đã tồn tại!");
      return;
    }

    setTasks((prev) =>
      prev.map((t) => (t.id === editId ? { ...t, taskName } : t))
    );
    setTaskName("");
    setEditId(null);
    setIsModalOpen(false);
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
  const allCompleted = tasks.length > 0 && completedCount === tasks.length;

  return (
    <div>
      <h1>DANH SÁCH CÔNG VIỆC</h1>
      <input
        type="text"
        placeholder="Thêm công việc"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleSubmit}>Thêm</button>

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
      {allCompleted && <p style={{ color: "green" }}>Hoàn thành công việc 🎉</p>}

      {/* Modal sửa công việc */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              minWidth: "300px",
            }}
          >
            <h3>Sửa công việc</h3>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <div style={{ textAlign: "right" }}>
              <button onClick={handleUpdate}>Cập nhật</button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => setIsModalOpen(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
