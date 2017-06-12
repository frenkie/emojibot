# emojibot

![screenshot](/emojibot.png?raw=true)

## install & run
`npm install` should do the install trick.

Run `npm start` and your set! Visit [localhost:8080](http://localhost:8080)
for a controllable emoji bot

### admin/bot control
Visit [localhost:8080/admin](http://localhost:8080/admin) for the emojibot admin page.
All buttons will trigger an emotion/action in an open bot screen.

### config
The available emotions are configured in config.json and consequently responded to
in `emoji/emoji.js` plus `emoji/emoji.css`. The sounds and CSS animations are hardwired.
Responding with a CSS animation class is done automagically, based on the available
messages in `/config.json`


## developing & debugging
You can run a debug version of the server with debug output and
live reloading of the server when file contents change.

Just do `npm run debug` and tada!