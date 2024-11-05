# Counter App

A simple and interactive counter application built with React. This app allows users to add multiple counters, each with options to increment, decrement, and set a random value fetched from an API.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies Used](#technologies-used)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VardanPogh/counter-app.git
   cd counter-app
   ```
2. **Install dependencies:**:
   ```bash
   npm install
   ```

## Usage
1. **Run the application locally**:
   ```bash
   npm start
   ```
***This command will start the application on http://localhost:3000.***

2. **Application Features:**:

- Add Counter: Click "Add Counter" to add a new counter component to the list.
- Increment/Decrement: Use the respective buttons to increase or decrease the counter value by one.
- Randomize: Fetches a random number to set as the current counter value.

## Testing
***To run the test suite and ensure all functionalities are working correctly:***

```bash
  npm test
```

**The test suite checks for:**
- Counter initialization and basic functionality
- Increment and decrement actions
- Randomize functionality with mocked API response
- Adding multiple counters

## Technologies Used
- React: UI library for building user interfaces.
- Jest and @testing-library/react: For testing React components and DOM interactions.
