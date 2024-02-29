export function aboutContent() {
	// Grab Div with an ID of Content
	const homeDiv = document.querySelector("#content");

	// Clear it up
	homeDiv.innerHTML = "";

	// Create h1
	const firstHeader = document.createElement("h1");
	firstHeader.textContent = "About Us";

	// Create Paragraph 1
	const theFirstPara = document.createElement("p");
	theFirstPara.textContent =
		"Welcome to BigDog Restaurant where culinary excellence meets vibrant ambiance! At BigDog, we pride ourselves on being more than just a dining destination; we are a culinary masterpiece dedicated to providing an unforgettable experience for every guest.";

	// Create Paragraph 2
	const theSecondPara = document.createElement("p");
	theSecondPara.textContent =
		"BigDog Restaurant is a celebration of innovative dishes crafted with precision and passion. Our menu boasts mouthwatering steaks and delightful vegetarian options, each prepared with the finest ingredients to tantalize your taste buds.";

	// Create Paragraph 3
	const theThirdPara = document.createElement("p");
	theThirdPara.textContent =
		"Step into BigDog and immerse yourself in a stylish decor that sets the stage for a memorable dining experience. Whether you're here for a casual meal, a special celebration, or a romantic dinner, our inviting atmosphere and attentive staff ensure that every visit is special.";

	// Append All
	homeDiv.appendChild(firstHeader);
	homeDiv.appendChild(theFirstPara);
	homeDiv.appendChild(theSecondPara);
	homeDiv.appendChild(theThirdPara);
}
