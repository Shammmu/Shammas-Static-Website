let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            document
                .querySelector(`header nav a[href*="${id}"]`)
                ?.classList.add('active'); 
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
 document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('touchstart', () => {
      // Collapse all others
      document.querySelectorAll('.service-box').forEach(b => {
        if (b !== box) b.classList.remove('expanded');
      });

      // Toggle this one
      box.classList.toggle('expanded');
    });
    
    // Also allow click for desktop testing
    box.addEventListener('click', () => {
      document.querySelectorAll('.service-box').forEach(b => {
        if (b !== box) b.classList.remove('expanded');
      });
      box.classList.toggle('expanded');
    });
  });

  const serviceBoxes = document.querySelectorAll(".service-box");

serviceBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Optional: close others
    serviceBoxes.forEach((b) => {
      if (b !== box) b.classList.remove("active");
    });

    // Toggle current
    box.classList.toggle("active");
  });
});


  
