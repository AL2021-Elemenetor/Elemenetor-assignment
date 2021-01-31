/**
 * Open the popup and get the data Or close popup
 * @param getContent
 */
let popupToggle = (getContent) => {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const loader = document.getElementById('loader');
    popup.classList.toggle('active');
    overlay.classList.toggle('dark');
    if (getContent) {
        loader.classList.toggle('done');
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                loader.classList.toggle('done');
                document.getElementById("content").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", "../../Server/RequestHandler.php", true);
        xhttp.send();
    } else {
        document.getElementById("content").innerHTML = '';
    }
}