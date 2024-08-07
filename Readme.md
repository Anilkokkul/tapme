
# TapMe Application

The TapMe application is a Node.js-based GraphQL server integrated with Supabase and Telegram Bot API. This application allows users to interact with a Telegram bot to play a simple game and manage user coins through GraphQL queries and mutations.

#### Features
GraphQL API: Query and mutate user data, such as retrieving and updating coins.
Telegram Bot Integration: Start and interact with the game through a Telegram bot.

#### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Supabase account and project
- Telegram Bot token

## Setup

### 1. Clone the Repository

```
git clone https://github.com/Anilkokkul/tapme.git
cd tapme
```
### 2. Install Dependencies
Make sure you are in the project directory, then install the required dependencies:

```
npm install
```

### 3.Configure Environment Variables
Create a .env file in the root directory of the project with the following content:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
PORT=5000
```
Replace your_supabase_url, your_supabase_key, and your_telegram_bot_token with your actual Supabase URL, Supabase Key, and Telegram Bot Token, respectively.

### 4. Start the Application
Run the following command to start the application locally:
```
npm start
```

The server will start and listen on port 4000. You can access the GraphQL API at:
```
http://localhost:4000/graphql
```
### 5. Interact with the Telegram Bot
- Open Telegram and search for your bot (use the username you set up when creating the bot).
- Start the bot by sending the /start command.
- Follow the instructions provided by the bot to interact with the game.

## Development
For development, you may want to run the application with automatic reloading:

```
npm run build
```