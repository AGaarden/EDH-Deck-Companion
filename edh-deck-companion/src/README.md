# edh-deck-companion

## Terminology
- Collection: All decks and binders in the app
- List: The overarching name for decks and binders

## File structure
```
src
|-- App.js // Main app file
|-- deck
|   |-- AddList.js      // Add card list to collection
|   |-- EditList.js     // Edit an existing card list
|   |-- PageColl.js     // Collection page
|   |-- PageList.js     // Card list page
|   `-- RebuildList.js  // Rebuild a deck from collection or other decks
`-- utils
    |-- CacheScryfall.js    // Cache various things from Scryfall (so they don't get mad at me)
    |-- FetchScryfall.js    // Fetch various things from Scryfall
    |-- List.js             // List logic and structure
    `-- readDeckForeign.js  // Read a deck from a file given outside the app


```