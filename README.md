# Educational Video Player

This is my submission for the Educational Video Player technical assessment.

Despite multiple attempts with many different approaches (including JavaScript's Fetch API, the Axios library, and even attempting to fudge the "Referer" and "Origin" header fields of my HTTP requests to match the test server's domain), I was unable to circumvent CORS to be able to interface with the server with JavaScript. As such, I used placeholder video objects to implement my solution.

In a work environment, I would either simply ask for help or ask to have my test client allowed by the server's CORS policy.

This means that my submission supports:
- Showing a list of videos given a list of video JavaScript objects
- A frontend interface where a title, description, and video URL can be entered
- A frontend interface to make and view comments
- A custom video playback interface that supports playing, pausing, scrubbing, entering fullscreen, and adjusting playback speed and volume.

![Video Selector Interface](./submission/Video%20Selector%20Interface.png)

![Video Upload Interface](./submission/Video%20Upload%20Interface.png)

![Video Player Interface](./submission/Video%20Player%20Screenshot.png)

## To Run Online...
Run the following commands:
* `npm run build`
* `cd dist`
* `cp index.html 200.html`
* `npx surge`

Surge will prepare a web domain at which the app can be run.