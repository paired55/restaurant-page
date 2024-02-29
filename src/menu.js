export function menuContent() {
	// Grab Div with an ID of Content
	const homeDiv = document.querySelector("#content");

	// Clear it up
	homeDiv.innerHTML = "";

	// Create h1
	const firstHeader = document.createElement("h1");
	firstHeader.textContent = "Menu";

	// Create ul
	const menuList = document.createElement("ul");

	// create li One
	const liOne = document.createElement("li");
	liOne.textContent =
		"Crispy Calamari: Tender calamari rings, lightly fried to perfection, served with zesty marinara sauce.";

	// create li Two
	const liTwo = document.createElement("li");
	liTwo.textContent =
		"Caprese Salad Skewers: Fresh mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze.";

	// create li Three
	const liThree = document.createElement("li");
	liThree.textContent =
		"Truffle Fries: Crispy fries tossed with truffle oil, parmesan cheese, and fresh herbs.";

	// create li Four
	const liFour = document.createElement("li");
	liFour.textContent =
		"Lobster Bisque: Rich and creamy lobster soup garnished with a hint of sherry.";

	// create li Five
	const liFive = document.createElement("li");
	liFive.textContent =
		"Freshly Squeezed Juices: Refreshing fruit juices made to order.";

	// Append li to ul
	menuList.appendChild(liOne);
	menuList.appendChild(liTwo);
	menuList.appendChild(liThree);
	menuList.appendChild(liFour);
	menuList.appendChild(liFive);

	// Append all to page
	homeDiv.appendChild(firstHeader);
	homeDiv.appendChild(menuList);
}
