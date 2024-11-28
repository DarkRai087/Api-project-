# Asynchronous Programming Exercises in JavaScript

## Overview

This project demonstrates different approaches to handling asynchronous operations in JavaScript, focusing on three primary techniques:

- Callbacks
- Promises
- Async/Await

The project fetches data from the JSONPlaceholder API and showcases how to handle asynchronous data retrieval and error management.

## Project Structure

```
project-root/
│
├── callbacks.html     # Callback-based implementation
├── promises.html      # Promise-based implementation
├── async-await.html   # Async/Await implementation
└── styles.css         # Shared styling for all pages
```

## Features

### 1. Callbacks Implementation

- Simulates a 5-second delay when a button is clicked
- Fetches posts from JSONPlaceholder API
- Displays post titles after callback execution

### 2. Promises Implementation

- Fetches posts using Promises
- Shows "Loading..." while data is being retrieved
- Implements a 5-second timeout for error handling
- Displays fetched data or error messages

### 3. Async/Await Implementation

- Uses async/await for fetching posts
- Handles loading states
- Provides graceful error handling for network issues or timeouts

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

## Setup and Running the Project

1. Clone the repository
2. Open any of the HTML files directly in a web browser
3. Click the buttons to trigger asynchronous operations

## Learning Outcomes

- Understanding different asynchronous programming techniques
- Implementing API calls
- Error handling in asynchronous contexts
- Managing loading states

## API Used

[JSONPlaceholder](https://dummyjson.com/posts) - Dummy JSON data for testing and prototyping

## Author

[Your GitHub Username]

## License

This project is open-source and available under the MIT License.
