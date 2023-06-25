const menuCollapseEl = document.querySelector(".menu_collapse");
const linksContainerEl= document.querySelector(".app_links_container");
if (menuCollapseEl && linksContainerEl) {
    menuCollapseEl.addEventListener('click', () => {
        linksContainerEl.classList.toggle("active");

        const purpleLogoEl = document.querySelector(".purple_logo");
        if(linksContainerEl.classList.contains("active")) {
            menuCollapseEl.src = "/assets/image/menu_close_icon.png";
            purpleLogoEl.src = "/assets/image/close_door_logo.png";
        } else {
            menuCollapseEl.src = "/assets/image/menu_open_icon.png";
            purpleLogoEl.src = "/assets/image/Hire Me.png";
        }
    });
}
