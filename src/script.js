document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (filterValue === "all") {
          item.style.display = "block"; // Show all items
        } else {
          if (item.getAttribute("data-category") === filterValue) {
            item.style.display = "block"; // Show matched category
          } else {
            item.style.display = "none"; // Hide others
          }
        }
      });
    });
  });
});
