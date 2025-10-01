# Mini Message Board

A simple message board application built with Node.js, Express, and EJS templating engine. This application allows users to post messages, view all messages, and see individual message details.

## Features

- View all messages on the home page
- Create new messages through a form
- View individual message details
- Responsive design with clean UI
- Navigation bar for easy access to different pages

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- HTML/CSS

## Project Structure

```
├── app.js              # Main application file
├── package.json        # Project dependencies and scripts
├── data/
│   └── messages.js     # Messages data store
└── views/
    ├── form.ejs       # New message form template
    ├── index.ejs      # Home page template
    ├── message.ejs    # Individual message view template
    └── navbar.ejs     # Navigation bar partial template
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   node app.js
   ```

## Dependencies

- Express.js (^5.1.0) - Web application framework
- EJS (^3.1.10) - Templating engine

## Contributing

Feel free to submit issues and enhancement requests.

## License

ISC