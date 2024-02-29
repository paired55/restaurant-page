export function homeContent() {
	// Grab Div with an ID of Content
	const homeDiv = document.querySelector("#content");

	// Clear it up
	homeDiv.innerHTML = "";

	// Create h1
	const firstHeader = document.createElement("h1");
	firstHeader.textContent = "BigDog Restaurant";

	// Create Image
	const theImage = document.createElement("img");
	theImage.src =
		"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg";
	theImage.alt = "Restaurant Image";

	// Create Paragraph
	const thePara = document.createElement("p");
	thePara.textContent =
		"BigDog restaurant is a culinary masterpiece, offering an extraordinary blend of innovative dishes and a vibrant ambiance. With a menu showcasing mouthwatering steaks and delightful vegetarian options, this dining haven stands out for its precision in flavors. The stylish decor and attentive staff contribute to an inviting atmosphere, making BigDog the go-to destination for an unforgettable dining experience.";

	// Append All
	homeDiv.appendChild(firstHeader);
	homeDiv.appendChild(theImage);
	homeDiv.appendChild(thePara);
}
