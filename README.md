# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  When an asynchronous operation within a route handler fails, without proper error handling, the application might crash or return a generic error message, making debugging difficult.  The `bug.js` file shows the problematic code.  `bugSolution.js` provides a corrected version with comprehensive error handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `node bug.js`.
4. Observe the inconsistent behavior and lack of informative error messages.
5. Then, run `node bugSolution.js` to see the improved error handling.