let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
    if (!sidebarOpen) {
        sidebar.style.display = "block";
        sidebarOpen = true;
    } else {
        sidebar.style.display = "none";
        sidebarOpen = false;
    }
}

function closeSidebar() {
    sidebar.style.display = "none";
    sidebarOpen = false;
}
