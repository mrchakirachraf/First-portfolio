function updatewindow()
{
    height = window.innerHeight;
    width = window.innerWidth;
    document.getElementById('height').textContent = height
    document.getElementById('width').textContent = width
}
updatewindow()
addEventListener("resize",updatewindow)