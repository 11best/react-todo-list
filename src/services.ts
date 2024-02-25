const base_url = "http://localhost:3001";

export const fetchTodosService = async () => {
  const res = await fetch(`${base_url}/todos`);
  const json = await res.json();
  return json;
};

export const createTodoService = async (title: string) => {
  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      completed: false,
    }),
  };
  const res = await fetch(`${base_url}/todos`, req);
  const json = await res.json();
  return json;
};

export const markAsDoneService = async (id: string, completed: boolean) => {
  const req = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed: completed,
    }),
  };
  const res = await fetch(`${base_url}/todos/${id}`, req);
  const json = await res.json();
  return json;
};

export const deleteTodoService = async (id: string) => {
  const req = {
    method: "DELETE",
  };
  const res = await fetch(`${base_url}/todos/${id}`, req);
  const json = await res.json();
  return json;
};
