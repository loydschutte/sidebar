$(document).ready(function() {
 console.log('Hello world');

    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    document.write(time);
}