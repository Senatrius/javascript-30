const projects = [];
const buttonList = document.querySelector(".nav__list");
const displayData = document.querySelector(".display-data");

async function getProjects() {
	const response = await fetch("projects.json");
	const data = await response.json();
	projects.push(...data);
}

async function populateButtons() {
	await getProjects();

	projects.forEach((project) => {
		const button = document.createElement("button");
		button.classList.add("btn");
		button.name = project.id;
		button.textContent = `${project.id} - ${project.name}`;

		buttonList.appendChild(button);
	});
}

async function handleClick() {
	await populateButtons();

	const buttons = buttonList.querySelectorAll(".btn");

	buttons.forEach((btn) => {
		btn.addEventListener("click", () => {
			projects.map((item) => {
				if (item.id == btn.name) {
					displayData.classList.add("change");

					setTimeout(() => {
						const projectData = `
            <h1 class="title">Day ${item.id}</h1>
            <p class="subtitle">${item.name}</p>
            <img src="${item.thumbnail}" alt="" class="thumbnail">
            <div class="btns">
              <a href="${item.page}" target="_blank" class="link-btn">Live Website</a>
              <a href="${item.repo}" target="_blank" class="link-btn">GitHub Page</a>
            </div>
            <p class="description">${item.description}</p>
            `;

						displayData.innerHTML = projectData;
					}, 1000);

					setTimeout(() => {
						displayData.classList.remove("change");
					}, 2000);
				}
			});
		});
	});
}

handleClick();
