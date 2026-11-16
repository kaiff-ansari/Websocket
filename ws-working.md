# WebSocket

## What is WebSocket?

WebSocket is a communication protocol that allows a client and server to exchange data over a **persistent connection**. Once the connection is established, both sides can send messages independently without creating a new HTTP request for each message.

### Key Features

- Supports **bidirectional communication** between the client and server.
- The connection remains open until either side closes it or the connection is interrupted.
- Useful for applications that require frequent, real-time data exchange.

## How WebSocket Works

WebSocket establishes a persistent connection through a handshake, after which the client and server can exchange messages.

### Steps

1. The client initiates a WebSocket handshake with the server.
2. After the handshake succeeds, both sides can send messages over the established connection.
3. The connection remains open until it is closed or interrupted.

## Example: Chat Application

A chat application uses WebSocket to allow users to exchange messages in real time.

For example, when one user sends a message, the server can push that message to other connected users without requiring repeated HTTP polling requests.

## Summary

WebSocket enables real-time, bidirectional communication through a persistent connection between a client and server.