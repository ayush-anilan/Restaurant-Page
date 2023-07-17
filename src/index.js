import _, { head } from "lodash";
import "./style.css";
import Icon from "./icon.jpg";

function component() {
  // navigation bar class
  const nav = document.createElement("div");
  nav.classList.add("nav");
  // navigation bar
  const nav1 = document.createElement("nav");
  nav.appendChild(nav1);
  // navigation bar logo
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = "Restaurant";
  nav1.appendChild(logo);
  // Navigation bar UL
  const ul = document.createElement("ul");
  nav1.appendChild(ul);
  const li = document.createElement("li");
  li.innerHTML = "Home";
  const li_1 = document.createElement("li");
  li_1.innerHTML = "Menu";
  li_1.addEventListener("click", function clearContent() {
    main.replaceChildren();
    // Title of menu
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = "Menu";
    main.appendChild(title);
    // Content of Menu
    const menu = document.createElement("div");
    menu.classList.add("menu");
    main.appendChild(menu);
    // Items Of Menu
    const item1 = document.createElement("div");
    item1.innerHTML = "Chicken Biriyani";
    const item2 = document.createElement("div");
    item2.innerHTML = "Beef Biriyani";
    const item3 = document.createElement("div");
    item3.innerHTML = "Mutton Biriyani";

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
  });
  ul.appendChild(li_1);
  const li_2 = document.createElement("li");
  li_2.innerHTML = "Contact";
  ul.appendChild(li);
  ul.appendChild(li_1);
  ul.appendChild(li_2);

  // Main Content
  const main = document.createElement("div");
  main.classList.add("main");
  nav.appendChild(main);
  // Heading Of Main Content
  const heading = document.createElement("h1");
  heading.innerHTML = "Enjoy Our <br> Delicious Meal";
  main.appendChild(heading);
  // Image of Biriyani
  const image = document.createElement("div");
  image.classList.add("image");
  main.appendChild(image);
  return nav;
}

document.body.appendChild(component());
