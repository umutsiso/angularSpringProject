function clickRowNote(noteId) {

    var http = new XMLHttpRequest();
    var url = "http://localhost:8080/note_entry";
    var params = noteId;
    http.open("POST", url, true);

//Send the proper header information along with the request
    http.setRequestHeader("en-us", "text/plain");

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);
}