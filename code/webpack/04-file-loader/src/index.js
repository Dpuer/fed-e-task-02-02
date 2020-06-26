import createHeading from "./heading.js";
import "./main.css";
import png from "./result.png";

const heading = createHeading();

document.body.append(heading);

const img = new Image();
img.src = png;
document.body.append(img);
