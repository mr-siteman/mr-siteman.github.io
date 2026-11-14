function openCloak() {
    let win = window.open("about:blank");

    let iframe = win.document.createElement("iframe");

    iframe.src = "https://theyodhanguy.github.io";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.borderStyle = "hidden";

    win.document.body.style.margin = "0";
    win.document.body.style.padding = "0";
    win.document.body.style.overflow = "hidden";

    win.document.body.appendChild(iframe);
    window.close();
}