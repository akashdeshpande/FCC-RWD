function toggle(id1, id2) {
    /* if not selected */
    if (document.getElementById(id1).classList.contains("chipSelected")){

        document.getElementById(id1).classList.remove("chipSelected");
        document.getElementById(id1).classList.add("chip");

        document.getElementById(id2).checked = false;
    }
    else {
        document.getElementById(id1).classList.add("chipSelected");
        document.getElementById(id1).classList.remove("chip");

        document.getElementById(id2).checked = true;
    }
}