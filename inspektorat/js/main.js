(() => {
  // <stdin>
  (function() {
    "use strict";
    function toggleScrolled() {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      if (!selectHeader.classList.contains("scroll-up-sticky") && !selectHeader.classList.contains("sticky-top") && !selectHeader.classList.contains("fixed-top")) return;
      window.scrollY > 100 ? selectBody.classList.add("scrolled") : selectBody.classList.remove("scrolled");
    }
    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    function mobileNavToogle() {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    }
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
    }
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });
    document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
      navmenu.addEventListener("click", function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle("active");
        this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
        e.stopImmediatePropagation();
      });
    });
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }
    let scrollTop;
    const onLoad = () => {
      scrollTop = document.querySelector("#scrolltop");
      function toggleScrollTop() {
        if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
        }
      }
      if (scrollTop) {
        toggleScrollTop();
        document.addEventListener("scroll", toggleScrollTop);
        scrollTop.addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        });
      }
    };
    window.addEventListener("load", onLoad);
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    }
    window.addEventListener("load", aosInit);
    document.querySelectorAll(".carousel-indicators").forEach((carouselIndicator) => {
      carouselIndicator.closest(".carousel").querySelectorAll(".carousel-item").forEach((carouselItem, index) => {
        if (index === 0) {
          carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest(".carousel").id}" data-bs-slide-to="${index}" class="active"></li>`;
        } else {
          carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest(".carousel").id}" data-bs-slide-to="${index}"></li>`;
        }
      });
    });
    const glightbox = GLightbox({
      selector: ".glightbox"
    });
    document.querySelectorAll(".isotope-layout").forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
      let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
      let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";
      let initIsotope;
      imagesLoaded(isotopeItem.querySelector(".isotope-container"), function() {
        initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter,
          sortBy: sort
        });
      });
      isotopeItem.querySelectorAll(".isotope-filters li").forEach(function(filters) {
        filters.addEventListener("click", function() {
          isotopeItem.querySelector(".isotope-filters .filter-active").classList.remove("filter-active");
          this.classList.add("filter-active");
          initIsotope.arrange({
            filter: this.getAttribute("data-filter")
          });
          if (typeof aosInit === "function") {
            aosInit();
          }
        }, false);
      });
    });
    let skillsAnimation = document.querySelectorAll(".skills-animation");
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: "80%",
        handler: function(direction) {
          let progress = item.querySelectorAll(".progress .progress-bar");
          progress.forEach((el) => {
            el.style.width = el.getAttribute("aria-valuenow") + "%";
          });
        }
      });
    });
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
    window.addEventListener("load", initSwiper);
    function initSearchOverlay() {
      const openBtn = document.getElementById("btn-open-search");
      const closeBtn = document.getElementById("btn-close-search");
      const normalHeader = document.getElementById("normal-header");
      const searchOverlay = document.getElementById("search-overlay");
      if (!openBtn || !closeBtn || !normalHeader || !searchOverlay) return;
      openBtn.addEventListener("click", (e) => {
        e.preventDefault();
        normalHeader.classList.add("d-none");
        searchOverlay.classList.remove("d-none");
        const inputField = searchOverlay.querySelector("input");
        if (inputField) inputField.focus();
      });
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        searchOverlay.classList.add("d-none");
        normalHeader.classList.remove("d-none");
      });
    }
    function initPagefind() {
      if (typeof PagefindUI !== "undefined") {
        const wrapper = document.querySelector("#pagefind-wrapper");
        if (wrapper) wrapper.innerHTML = "";
        new PagefindUI({
          element: "#pagefind-wrapper",
          showImages: false,
          showSubResults: true,
          resetStyles: false,
          // Kita pakai CSS sendiri
          debounceTimeoutMs: 300
          // Sedikit delay agar tidak lag saat mengetik cepat
        });
        initSearchOverlay();
      } else {
        console.warn("PagefindUI belum dimuat. Pastikan script pagefind ada di footer.");
      }
    }
    window.addEventListener("load", initPagefind);
  })();
})();
