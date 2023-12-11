function onClick(obj) {
    
    let id = null;
    let size = 20;
    let count = 0;

    clearInterval(id);

    id = setInterval(highlight, 40);

    function highlight() {
        if (count == 0 & size < 30) {
            size++;
            document.getElementById("links").style.fontSize = size + 'px';
        } else if (size == 30 && count < 10) {
            count++;
        } else if (size > 20 && count == 10) {
            size--;
            document.getElementById("links").style.fontSize = size + 'px';
        } else if (size == 20 && count == 10) {
            clearInterval(id);
        }
    }
    
}