const selector = document.querySelector.bind(document);
const selectorAll = document.querySelectorAll.bind(document);

// Scroll events
const main = selector(".carocuore");
const allSections = selectorAll(".carocuore__section");

function toggleActiveClassOnEnterView(sections, classes) {
  sections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect();

    // El -16 viene porque el ultimo slide tiene un diferimiento y
    // En safari puede arrancar en -15, ocurre de forma al azar de momento
    const isActiveView = sectionRect.y >= -16 && sectionRect.y < 5;

    console.log(sectionRect);

    classes.forEach((_class) => section.classList.remove(_class));
    isActiveView && classes.forEach((_class) => section.classList.add(_class));
  });

  console.log("---------------");
}

main.addEventListener("scroll", () =>
  toggleActiveClassOnEnterView(allSections, [
    "carocuore__section--active",
    "lenny",
  ])
);

// Menu btn
const header = selector(".header");
const headerPanel = selector(".header__panel");
const headerMenuBtn = selector(".header__menu--btn");

headerMenuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});

// Categories
const menuCategories = selectorAll(".header__panel .category");

menuCategories.forEach((category) =>
  category.addEventListener("click", () => handleSubcategoryPanel(category))
);

function handleSubcategoryPanel(category) {
  const subcategories = category.querySelector(".subcategories");

  if (subcategories) {
    headerPanel.classList.toggle("header__panel__subcategories--open");
  } else {
    console.log("la categoria no tiene subcategorias");
  }
}
