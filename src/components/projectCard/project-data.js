export const projectData = [
  {
    name: "Contact Card",
    image: "assets/img/projects/contact-card.png",
    tag: ["front", "react", "javascript"],
    description: `My interactive digital business card. Built in React to highlight my personal projects.

    P.S.: This is where you're looking at right now.`,
    code: "https://github.com/SamuelsonPajeu/portifolio-card",
    external: "/"
  },
  {
    name: "Render Dashboard Badges",
    image: "assets/img/projects/render.png",
    tag: ["back", "spring-boot", "java"],
    description: `An API that retrieve the last deploy from Render Dashboard as a status badge to use on README files`,
    code: "https://github.com/SamuelsonPajeu/render-badge",
    external: "https://render-badge-samuelsonpajeu.onrender.com/swagger-ui/index.html",
  },
  {
    name: "Echo IO",
    image: "assets/img/projects/echo-io.png",
    tag: ["games", "socket-io", "front", "back", "javascript"],
    description: `A newer version of one of my oldest projects. This version adds online multiplayer functionality, allowing players to compete against each other.
    The game logic is handled by the server, which ensures fairness and consistency for all players.
    Players can connect to a game either automatically or manually, using the room ID.

    About the game:
    You can choose between three available ships, each with a unique special feature.
    Control your ship with the arrow keys and press Space to shoot.
    `,
    code: "https://github.com/SamuelsonPajeu/Echo.io",
    external: "https://echoio.netlify.app/"
  },
  {
    name: "HTTP Status Foxes",
    image: "assets/img/projects/http-foxes.png",
    tag: ["front", "back", "javascript", "go", "sqlite"],
    description: `A simple REST API created in GO that returns HTTP statuses with funny fox images.

    The website is a demo and consumes the API to build the items, which in turn stores the items in SQLite.
    
    The API can be integrated into other projects.
    
    Inspired by the well-known HTTP CATS.`,
    code: "https://github.com/search?q=owner%3ASamuelsonPajeu+foxes&type=repositories",
    external: "https://httpfoxes.netlify.app"
  },
  {
    name: "Universidade Unidecode",
    image: "assets/img/projects/uu.png",
    tag: ["front", "back", "dart", "flutter", "firebase"],
    description: "A demonstrative application developed with the purpose of learning that simulates a student area for a fictional university, Universidade Unidecode is nothing more than a test of the Cloud storage tools available by Google Firebase.",
    external: "https://play.google.com/store/apps/details?id=samuelson.pajeu.unidecode"
  },
  {
    name: "Word Relation",
    image: "assets/img/projects/word-relation.png",
    tag: ["front", "back", "python", "javascript", "django"],
    description: "Create a graph with related words by scraping Brazilian web dictionaries",
    external: "https://word-relation.netlify.app",
    code: "https://github.com/SamuelsonPajeu/desafio_palavra"
  },
  {
    name: "Hands 2 Help",
    image: "assets/img/projects/hands-2-help.png",
    tag: ["games", "unity", "c#"],
    description: `Product of a research project from the Master's Degree in Applied Health Sciences Course of Vassouras University/RJ, conceived by the student Dr. Ruy Nogueira Jr., under the guidance of Prof. Dr. Marco Aurélio dos Santos Silva. This game was inspired by a natural human feeling: solidarity with others.

    Based on the concepts of “eLearning”, adopted by the WHO's “Health Academy” program, this application was designed to serve as a tool for INSTRUCTING the recognition and first response to a PCR.`,
    external: "https://apps.apple.com/br/app/hands-2-help/id1480551514",
  },
  {
    name: "Apolo Music Bot",
    image: "assets/img/projects/apolo-bot.png",
    tag: ["back", "python", "discord-api"],
    description: `One of the first projects I did while I was learning Python.

    It is possible to search for a song on YouTube by its name or direct URL, and the bot plays it for everyone in the room.
    The bot also has queries to control the order of the songs, and it also has integration with Genius to search for the lyrics of the current song.
    
    [DEPRECATED]
    
    Unfortunately, due to changes in the Discord API and especially in the YouTube terms of service, the bot no longer works and cannot be updated to work the way it was designed.
    Still, it was a fun project for learning and it ensured good times with friends.`,
    external: "https://discord.com/oauth2/authorize?client_id=892020683473821766&permissions=3344448&scope=bot",
    code: "https://github.com/SamuelsonPajeu/Discord-Music-Bot"
  },
  {
    name: "The Possession",
    image: "assets/img/projects/the-possesion.png",
    tag: ["games", "unity", "c#"],
    description: `A challenge to myself where I made a project in just 1 day, from art to programming (Like a personal Game Jam).

    It is a local multiplayer game where one player controls a killer who can project their soul into other bodies and the other controls a survivor that must find 3 keys in the chests scattered around the map to try to escape.
    
    Controls:
    W,A,S,D: Control the killer
    Arrow keys: Control the survivor`,
    download: "https://drive.google.com/file/d/1IPPX9Ciez4wdpbywgtiC4vkYbgmw9piT/view?usp=sharing",
  },
  {
    name: "Brazil 2024",
    image: "assets/img/projects/brazil-2024.png",
    tag: ["games", "unity", "c#"],
    description: `A parody of the NES game: HONG KONG 97 using Brazilian elements.

    Controls:
    Arrow keys: Move the character
    Space: Shoot`,
    external: "https://simmer.io/@Hamsterking/brazil-2024",
  },
  {
    name: "Shine One",
    image: "assets/img/projects/shine-one.png",
    tag: ["games", "unity", "c#"],
    description: `Concept: Shine One is a Platform/Puzzle game that explores the small world inside a lamp. Players must solve puzzles to light the lamp.

    Controls:
    
    WASD or Arrows: Move the character
    Space: Jump
    E: Blast to push boxes or activate buttons/objects
    R (Hold): Restart the level
    Esc: Pause the game`,
    external: "https://gamejolt.com/games/shine_one/357205",
  },
  // {
  //   name: "Cromet",
  //   image: "assets/img/projects/cromet.png",
  //   tag: ["games", "unity", "c#"],
  //   description: "TODO",
  //   external: "https://youtu.be/wDcQv94EY9Y?list=PLPUcSS-EJoLlv-Rf4Z455YADGpY1vkFyu",
  // },
  {
    name: "A Thousand Spikes",
    image: "assets/img/projects/ats.png",
    tag: ["games", "monogame", "c#"],
    description: `A simple game made with MonoGame.

    In it, you can choose a character and you must survive as long as you can from falling spikes.`,
    external: "https://play.google.com/store/apps/details?id=com.samuelsonpajeu.momentum",
  },
  {
    name: "Echo",
    image: "assets/img/projects/echo.png",
    tag: ["games", "gamemaker"],
    description: `Echo is a local multiplayer space combat game made with Game Maker. Players control spaceships and battle to destroy each other.

    Controls:

    Player 1: Use W, A, S, D to move and Space to shoot.

    Player 2: Use the arrow keys to move and the 'K' key to shoot.`,
    download: "https://drive.google.com/file/d/1CbFChZ_mVMPpPz8gjg0Bm-i392r8WJTR/view?usp=sharing",
  },
  {
    name: "Grayscale Pong",
    image: "assets/img/projects/pong.png",
    tag: ["games", "gamemaker"],
    description: `Grayscale pong is a local multiplayer game made with Game Maker. Players control paddles and try to bounce a ball past each other's paddles. The first player to score 10 points wins.

    PowerUps can be collected by hitting a block that moves through the center of the screen.`,
    download: "https://drive.google.com/file/d/134Qvm-Fx4b2dLfKEAOwlyaAOHFefjNMv/view?usp=sharing",
  },
  {
    name: "Gladius",
    image: "assets/img/projects/gladius.png",
    tag: ["games" ],
    description: `Gladius is a text-based role-playing game (MUD) made using DOS commands (Batch file). There are two versions of the game (the second is incomplete). The goal of the game is to defeat monsters that are appropriate for your level until you are strong enough to defeat the bosses of each tier.

    You can download both versions of the game by clicking the button below.
    
    Gladius is one of the first things I ever programmed, and it's a reminder of how far I've come as a programmer.`,
    download: "https://drive.google.com/file/d/1t7CzshrlOcyxJvS-pPzHjnabysvg9MXX/view?usp=sharing",
  },
];
