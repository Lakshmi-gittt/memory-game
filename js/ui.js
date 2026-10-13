/** ==========================================================================
 * OWNER: Member 5 (DOM Manipulation & UI Rendering)
 * 
 * AI PROMPT / INSTRUCTIONS FOR GENERATION:
 * You are writing the UI layer for a vanilla JS Memory Match game.
 * STRICT RULE: Do not keep game state here (no lives/moves variables). 
 * This file only reads data passed to it and updates the HTML.
 * 
 * REQUIRED EXPORTS:
 * 1. `export function renderBoard(cardsArray)`: 
 *    - Clears the `<main id="game-board"></main>` element.
 *    - Loops through cardsArray. For each card, create this exact HTML string/node:
 *      <div class="card" data-index="[INDEX]">
 *        <div class="card-inner">
 *          <div class="card-front"><img src="assets/[pairId].png" alt="card"></div>
 *          <div class="card-back"></div>
 *        </div>
 *      </div>
 *    - Append them to #game-board.
 * 2. `export function updateStats(moves, time, lives)`: Updates the textContent of `#moves-count`, `#timer-count`, and `#lives-count`.
 * 3. `export function flipCardElement(index, isFlipped, isMatched)`: 
 *    - Finds the card div by `data-index`.
 *    - Toggles the class `flipped` on the card based on the `isFlipped` boolean.
 *    - If `isMatched` is true, perhaps add a `matched` class or hide it, based on preference.
 * 4. `export function showModal(modalId, title = '', message = '')`: Removes `.hidden` and adds `.active` to the modal. If it's the result modal, updates `#result-title` and `#result-message`.
 * 5. `export function hideModal(modalId)`: Removes `.active` and adds `.hidden`.
 * 6. `export function renderLeaderboard(scoresArray)`: Clears `#leaderboard-list`. Loops through scoresArray and creates `<li>Nickname - Moves: X - Time: Ys</li>` elements.
 * ========================================================================== */

// Write and export your DOM functions below