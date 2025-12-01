# Tauri Plugin RTC
<!---
![Crates.io Version](https://img.shields.io/crates/v/tauri-plugin-sse)
[![npm version](https://img.shields.io/npm/v/tauri-plugin-sse-api.svg)](https://www.npmjs.com/package/tauri-plugin-sse-api)
-->
![License](https://img.shields.io/badge/License-MIT%20or%20Apache%202-green.svg)

<!--- -->

**Sample Usage:**

<!---
* Realtime activity feeds or notifications
* Live server logs
* Monitoring application state
* Synchronizing lightweight UI updates
--->

| Platform | Supported |
| -------- | --------- |
| Linux    | not tested         |
| Windows  | not tested         |
| macOS    | not tested         |
| Android  | not tested         |
| iOS      | not tested         |

## Installation
<!---
- Crate: https://crates.io/crates/tauri-plugin-sse
  - `cargo add tauri-plugin-rtc`
- NPM Package: https://www.npmjs.com/package/tauri-plugin-sse-api
  - `npm install tauri-plugin-rtc-api`
  
- YARN Package:  https://classic.yarnpkg.com/en/package/tauri-plugin-sse-api
  - `yarn install tauri-plugin-rtc-api`

- PNPM Package: 
  - `pnpm install tauri-plugin-rtc-api`


- DENO Package: 
  - `deno install tauri-plugin-rtc-api`

- BUN Package: 
  - `bun install tauri-plugin-rtc-api`
--->

## Usage

### TypeScript/JavaScript

<!---
```js
import EventSource from "tauri-plugin-sse";

// Create connection to server endpoint
const source = new EventSource("https://sse.dev/test");

// Handle on establishing connection
source.onopen = () => {
  console.log("Connection stabilished!");
};

// Fired when a message is received
source.onmessage = (event) => {
  console.log("Message from server:", event.data);
};

// Handle errors
source.onerror = (err) => {
  console.error("EventSource failed:", err);
};

// Handle named event types
source.addEventListener("ping", (event) => {
  console.log("Ping:", event.data);
});

// Remove handler
removeEventListener("ping");

// Close Event Source
source.close();
```
 -->

### Rust

<!---
```rust
//  TODO: Add use of right modules

// Create connection to server endpoint
let event_source = EventSource::new("https://sse.dev/test").unwrap();

// Handle on establishing connection
event_source.on_open(|| {
    println!("Connection stabilished!");
});

// Fired when a message is received
event_source.on_message(|message| {
    println!("New message event {:?}", message);
});

// Handle errors
event_source.on_error(|error| {
    println!("Error {:?}", error);
});

// Handle named event types
event_source.add_event_listener("myEvent", |event| {
    println!("Event {} received: {}", event.type_, event.data);
});

// Remove handler
event_source.remove_event_listener("myEvent");

// Close Event Source
event_source.close();
```
--->
 
## Licenses

MIT or MIT/Apache 2.0 where applicable.
