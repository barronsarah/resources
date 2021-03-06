<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Forms intro</title>
    <style>
        h1 {
            color: cornflowerblue;
            font-style: italic;
        }
    </style>
</head>
<body>

<h1>Welcome to the World of Forms!</h1>

<h2>Method defines the type of request</h2>
<p>GET is a download request and it's used for the following tasks</p>
<ul>
    <li>Whenever you navigate your browser to a URL, that's a GET request</li>
    <li>Whenever you click an anchor tag link, that's a GET request</li>
    <li>B/C URLs make GET requests, when you load a bookmark, you make GET request</li>
    <li>GET requests are commonly used for Search forms</li>
</ul>
<p>POST is the "upload" request</p>
<ul>
    <li>POST method used on login forms or anything w/ a password</li>
    <li>POST method used on any form you fill out that creates a record</li>
    <li>POST method used on any file or image upload</li>
    <li>POST method on registration forms or checkout forms</li>
</ul>

<h2>Action attribute instructs where the form should send the request</h2>
<ul>
    <li>Action is the URL or path where the form sends the request</li>
    <li>Actions can be other webpages entirely</li>
    <li>Actions often point to other URLs for your web application</li>
</ul>
<hr>
<!-- Method is the type of HTTP request -->
<!-- GET method == "download" request -->
<!-- POST method == "upload" request -->
<h4>Share your email address below for updates</h4>
<form method="GET" action="https://request-inspector.glitch.me/">

    <label for="email">email:</label>
    <input type="text" name="email" id="email" placeholder="Please enter your email address here">

    <button type="submit">Share now</button>
</form>

<a href="https://request-inspector.glitch.me?email=ryan@codeup.com">Send a get request w/ email of ryan@codeup.com</a>

<hr>
  <h3>
    Search for properties below:
  </h3>
<form method="GET" action="https://request-inspector.glitch.me">
    <label for="zipcode">Zipcode</label>
    <input type="text" id="zipcode" name="zipcode" placeholder="Enter the desired zipcode">

    <label for="property_type">Property Type</label>
    <input type="text" id="property_type" name="property_type" placeholder="What type of property?" value="">

    <label for="min_sq_ft">Minimum square footage</label>
    <input type="text" id="min_sq_ft" name="min_sq_ft">


    <button type="submit">Search properties now</button>

</form>

<a href="https://request-inspector.glitch.me?zipcode=78205&property_type=condo&min_sq_ft=500">See all condos in 78205 w/ minimum sq footage of 500 </a>

<hr>

<h3>Form with other input types</h3>
<form method="GET" action="https://request-inspector.glitch.me">
    <label for="comment">Essay</label>
    <textarea placeholder="placeholder for textarea" name="comment" id="comment"></textarea>

    <label for="color">Favorite color</label>
    <input type="color" name="color" id="color">

    <label for="newsletter_signup"><input name="newsletter_signup" id="newsletter_signup" value="true" type="checkbox" checked>Sign Up For The Email Newsletter</label>

    <h2>What kind of phone do you own?</h2>
    <label for="android">
        Android <input id="android" type="radio" name="phones" value="android">
    </label>
    <label for="ios">
        iOS <input id="ios" type="radio" name="phones" value="ios">
    </label>
    <label for="windows">
        Windows <input id="windows" type="radio" name="phones" value="windows">
    </label>
    <label for="other">
        Other <input id="other" type="radio" name="phones" value="other">
    </label>

    <label for="coffee_preference">Select your favorite</label>
    <select id="coffee_preference" name="coffee_preference">
        <option value="light">Light Roast</option>
        <option value="dark">Dark Roast</option>
        <option value="espresso">Espresso Blend</option>
    </select>
    <button type="submit">Send your preferences</button>
</form>
</body>
</html>