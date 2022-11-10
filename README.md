# Simple Example for websockets

This example demonstrates how to use websockets.
To learn more about websockets see the [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

## Encryption

Please note the following from the [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) about websockets:

> The URL to which to connect; this should be the URL to which the WebSocket server will respond. This should use the URL scheme wss://, although some software may allow you to use the insecure ws:// for local connections.

## Server

The default configuration of the server runs locally (`localhost`) on port `8001`.<br />
To create a new websocket server with python or nodejs:

* **python**: `python3 server.py`
* **nodejs**: `npm install && node server.js`

## Client

You can connect to the server via the js browser client. Just open the website `client.html` on your local computer. To test it in a simple project setting you can also launch a local webserver via python, node or php etc.

* **local file**: open it locally in your browser
* **php**: `php -S localhost:8000` and go to http://localhost:8000/client.html
* **python**: `python3 -m http.server 8000` and go to http://localhost:8000/client.html
* **nodejs**: use npm package http-server: `npm install -g http-server` and `http-server`