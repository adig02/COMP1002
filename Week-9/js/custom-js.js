// the first thing that we are going to do is make sure that all our HTML has been rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{
    // now we will test to see if our JS is connected
    console.log("Our JS code is connected");
    // let's look at variables
    let a = 200;
    let b = 180;
    let c = a + b;
    // the const is a variable that cannot be changed once the value has been assigned
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;
    // now let's look at how we can add HTML to our already loaded HTML
    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>" + "<p>Let: The Value of C is " + c + "</p>" + "<p>Const: The total is: " + total + "</p>";
    // let's make it pretty
    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0 10%";
    // now let's make a global header
    document.getElementById("lesson-global-header").innerHTML =
        "<div id= 'logo-container'>" +
            "<a href='index.html'>" +
                "<img src='./img/logo.png' id='logo' alt='header logo'>" +
            "</a>" +
        "</div>" +
        "<nav><menu id='main-menu'>" +
            "<li><a href='#'>Link 1</a></li>" +
        "</menu></nav>"
    document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: center;";
});