var anchors = document.getElementsByTagName("a");

for (var i = 0; i < anchors.length; i++) {
    anchors[i].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" + anchors[i].href
}