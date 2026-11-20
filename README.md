# WebSocket

## What is WebSocket?

WebSocket is a communication protocol that allows the **client and server to communicate in real time** through a persistent connection.

After the connection is established, both the client and server can send messages without creating a new HTTP request each time.

### Key Features

- **Bidirectional communication** — client and server can both send messages.
- **Persistent connection** — the connection stays open until it is closed or interrupted.
- **Real-time communication** — useful for chat, notifications, live updates, and other real-time applications.

---

# Polling

## What is Polling?

Polling is a technique where the **client repeatedly sends requests to the server** to check if there is any new data.

For example, a chat application might ask the server every 5 seconds:

```text
Client → Server: Any new messages?
Server → Client: No new messages

(wait 5 seconds)

Client → Server: Any new messages?
Server → Client: Yes, here is a message
```

The client keeps making new HTTP requests even when there is no new data.

### Example

```text
Client
   ↓
HTTP Request
   ↓
Server
   ↓
Response
   ↓
(wait)
   ↓
HTTP Request
   ↓
Server
   ↓
Response
```

---

# Polling vs WebSocket

| Polling | WebSocket |
|---|---|
| Client repeatedly sends requests | One connection is established |
| New HTTP request for each check | Connection stays open |
| Client asks for new data | Server can push data to client |
| Can create unnecessary requests | More efficient for real-time communication |
| Not truly real-time | Real-time communication |
| Simpler to implement | More complex to implement |
| Suitable for less frequent updates | Suitable for frequent/live updates |

### Simple Example

**Polling:**

```text
Client → "Any new message?"
Server → "No"

Client → "Any new message?"
Server → "No"

Client → "Any new message?"
Server → "Yes, here is the message"
```

**WebSocket:**

```text
Client ←──────── WebSocket Connection ────────→ Server

Server → "New message!"
Server → "Another message!"
Server → "Another update!"
```

With WebSocket, the server does not have to wait for the client to ask. It can **push data whenever something happens**.

---

# How WebSocket Works

1. The client sends a WebSocket handshake request to the server.
2. The server accepts the handshake and establishes the connection.
3. The client and server can now send messages to each other.
4. The connection stays open until either side closes it or it is interrupted.

---

# Example: Chat Application

WebSocket is commonly used in chat applications.

For example:

```text
User A → Server → User B
```

When User A sends a message, the server can immediately send it to User B through the WebSocket connection.

There is no need to repeatedly send HTTP requests to check for new messages.

---

# Scaling WebSocket

When there are many users, one WebSocket server may not be enough. We can run multiple WebSocket servers.

```text
             Load Balancer
             /     |     \
           WS1    WS2    WS3
             \      |     /
              \     |    /
                Pub/Sub
```

### Why Pub/Sub?

Each user is connected to a particular WebSocket server.

For example:

```text
User A → WS1
User B → WS2
```

If User A sends a message through **WS1**, WS1 needs a way to communicate with **WS2** so User B can receive the message.

**Pub/Sub** provides communication between the WebSocket servers.

### Main Components

- **Load Balancer** → distributes users across WebSocket servers.
- **WebSocket Servers (WS1, WS2, WS3)** → maintain client connections.
- **Pub/Sub** → shares messages between WebSocket servers.

---

# Summary

**Polling:**

> Client repeatedly asks the server for new data.

**WebSocket:**

> Client creates one persistent connection, and both client and server can send data whenever needed.

```text
Polling

Client → Request → Server
Client ← Response ← Server
       ↓
    Wait
       ↓
Client → Request → Server
```

```text
WebSocket

Client ←────────────→ Server
        Persistent
        Connection
```

For applications that need frequent real-time updates, such as **chat, live notifications, gaming, and live tracking**, WebSocket is generally a better fit than polling.
