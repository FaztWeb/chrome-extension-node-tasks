const taskForm = document.querySelector("#task-form");

const loadTasks = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  const tasks = await res.json();

  chrome.storage.local.set({tasks: tasks});

	const tasksList = document.querySelector("#tasks-list");

	let html = '';

	tasks.forEach(task => {
		html += `
				<li class="list-group-item bg-dark border-primary text-white rounded-0">
				${task.title}
				</li>
		`
	})

	tasksList.innerHTML = html;

};
loadTasks();

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const task = {
    title: taskForm["title"].value,
    description: taskForm["description"].value,
  };

  const res = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data);

  console.log("Submitting task...");
});
