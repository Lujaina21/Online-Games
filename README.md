# Online-Games

This project is a web-based application for browsing and viewing details of online games from the **Free-to-Play Games Database** API. Users can filter games by category, view game details, and navigate seamlessly between the main games list and individual game details.

## Features
- **Category Navigation**: Browse games by various categories such as MMORPG, Shooter, Sailing, etc.
- **Game Details View**: View detailed information about a selected game, including its description, thumbnail, and a link to play the game.
- **Dynamic UI Updates**: The interface dynamically updates content without page reloads.

## Project Structure
```
project-directory
│
├── css/
│   ├── all.min.css         # Font Awesome styles
│   ├── bootstrap.min.css   # Bootstrap styles
│   ├── style.css           # Custom styles
│
├── imgs/
│   ├── header.png          # Header image
│   ├── logo.png            # Application logo
│   ├── logo-sm.png         # Small logo
│
├── js/
│   ├── main.js             # Entry point
│   ├── games.js            # Handles fetching and displaying games
│   ├── details.js          # Handles fetching and displaying game details
│   ├── ui.js               # Manages DOM manipulation
│
├── index.html              # Main HTML file
└── README.md               # Project documentation
```

## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/online-games-viewer.git
   ```

2. **Navigate to Project Directory**
   ```bash
   cd online-games-viewer
   ```

3. **Install Dependencies**
   No additional dependencies are required as this is a vanilla JavaScript project. Just ensure you have an internet connection for fetching the API.

4. **Run the Application**
   Open `index.html` in a browser to start the application.

## Usage
1. Navigate through different game categories using the navigation bar.
2. Click on a game card to view its details.
3. Use the "Close" button in the details view to return to the main games list.

## API Information
This project uses the **Free-to-Play Games Database API**:
- **Base URL**: `https://free-to-play-games-database.p.rapidapi.com`
- **Endpoints**:
  - Fetch games by category: `/api/games?category={category}`
  - Fetch game details: `/api/game?id={gameID}`

## Example API Key (Replace with Your Own)
In `games.js` and `details.js`, replace the placeholder API key with your own:
```javascript
"x-rapidapi-key": "your-api-key",
```
---

Happy coding! 🎮
