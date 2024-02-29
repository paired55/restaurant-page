import { homeContent } from "./home.js";
import { aboutContent } from "./about.js";

// Grab home button and render home content
const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", homeContent);

// Grab about button and render about content
const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", aboutContent);
