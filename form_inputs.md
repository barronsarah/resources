<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- this is an example from the MDN Layout Cookbook -->
    <title>Different form inputs with a CSS Grid footer</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section>
        <div class="wrapper">
            <header class="page-header">
              <h1>Even more form awesomeness!</h1>
            </header>
            <main class="page-body">
              <h2>Various Form Input Types</h2>
              
              <form method="POST" action="https://request-inspector.glitch.me">
                <fieldset>
                  <legend>Different types of inputs</legend>
                
                  <label for="color">Favorite Color</label>
                  <input type="color" id="color" name="color">
                  
                  <label for="month">Birth Month</label>
                  <input type="month" name="month" id="month:">

                  <label for="email">Email:</label>
                  <input type="email" name="email" id="email" placeholder="Share your email for updates. We send good stuff, no spam!">

                  <label for="birthdate">Birthdate:</label>
                  <input type="date" name="birthdate" id="birthdate" placeholder="Please enter your DOB">

                  <label for="telephone">Phone Number:</label>
                  <input type="tel" name="telephone" id="telephone" placeholder="What's the best number to reach you?">

                  <label for="webpage">Your personal website address</label>
                  <input type="url" name="webpage" id="webpage" placeholder="Where is your online portfolio?">

                  <br>
                  <label for="review">Review:</label>
                  😡<input type="range" name="review" id="review" min="0" max="10">🤗
                  <br>
                  <label for="start_week">Starting Week</label>
                  <input type="week" name="start_week" id="start_week">

                  <label for="end_week">End Week</label>
                  <input type="week" name="end_week" id="end_week">
                  <br>
                  <button type="reset">Reset</button>
                  <button type="submit">Submit</button>
                </fieldset>
              </form>
              <hr>
              <h4>Checkbox with image labels</h4>
              <form action="https://request-inspector.glitch.me" method="GET">
                <fieldset>
                  <legend>Please select the seeds you wish to plant:</legend>
            
                  <div>
                    <label for="celery">
                      <img src="https://cdn.glitch.com/959278d8-7aae-4949-b614-3d905bb4464d%2Fseedpacketcelerylady.jpg?1541621986227" alt="celery seeds">
                      <br>Celery
                    </label>
                    <input type="checkbox" id="celery" name="seed" value="celery">
                  </div>
                  <div>
                    <label for="poppy">
                      <img src="https://cdn.glitch.com/959278d8-7aae-4949-b614-3d905bb4464d%2Fseedpacketpoppy.jpg?1541621987418" alt="poppy seeds">
                      <br>
                      Poppy
                    </label>
                    <input type="checkbox" id="poppy" name="seed" value="poppy">
                  </div>
                  
                  <div>
                    <label for="peas">
                      <img src="https://cdn.glitch.com/959278d8-7aae-4949-b614-3d905bb4464d%2Fseedpacketpeas.jpg?1541621985894" alt="pea seeds">
                      <br>Peas
                    </label>
                    <input type="checkbox" id="peas" name="seed" value="peas">
                  </div>
                  <div>
                    <label for="okra">
                      <img src="https://cdn.glitch.com/959278d8-7aae-4949-b614-3d905bb4464d%2Fseedpacketokra.jpg?1541621986434" alt="okra seeds">
                      <br>Okra
                    </label>
                    <input type="checkbox" id="okra" name="seed" value="okra">
                  </div>
                  <div>
                    <label for="tomato">
                      <img src="https://cdn.glitch.com/959278d8-7aae-4949-b614-3d905bb4464d%2Fseedpackettomato.jpg?1541621986482" alt="tomato seeds">
                      <br>Tomato
                    </label>
                    <input type="checkbox" id="tomato" name="seed" value="tomato">
                  </div>
                  <div>
                    <label for="zinnia">
                      <img src="https://cdn.glitch.com/959278d8-7aae-4949-b614-3d905bb4464d%2Fseedpacketzenia.jpg?1541621986498" alt="zinnia seeds">
                      <br>Zinnia
                    </label>
                    <input type="checkbox" id="zinnia" name="seed" value="zinnia">
                  </div>
                  <div>
                    <label for="calendula">
                      <img src="https://cdn.glitch.com/959278d8-7aae-4949-b614-3d905bb4464d%2Fseedpacketcalendula.jpg?1541621986536" alt="calendula seeds">
                      <br>Calendula
                    </label>
                    <input type="checkbox" id="calendula" name="seed" value="calendula">
                  </div>
                  <div>
                    <label for="lima-beans">
                      <img src="https://cdn.glitch.com/959278d8-7aae-4949-b614-3d905bb4464d%2Fseedpacketlimabean.jpg?1541621985912" alt="lima-beans seeds">
                      <br>Lima Beans
                    </label>
                    <input type="checkbox" id="lima-beans" name="seed" value="lima-beans">
                  </div>
                  <div>
                    <label for="carrot">
                      <img src="https://cdn.glitch.com/959278d8-7aae-4949-b614-3d905bb4464d%2Fseedpacketcarrotman.jpg?1541621986453" alt="carrot seeds">
                      <br>Carrot
                    </label>
                    <input type="checkbox" id="carrot" name="seed" value="carrot">
                  </div>
                  
                </fieldset>
                <button type="reset">Clear</button>
                <button type="submit">Get Planting!</button>
              </form>
              
            </main>
            <footer class="page-footer">Sticky footer</footer>
        </div>
    </section>
    <div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div>
    <script src="https://button.glitch.me/button.js"></script>
  </body>
</html>