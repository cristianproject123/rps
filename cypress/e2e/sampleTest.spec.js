describe('Complete Rock Paper Scissors game test', () => {
  
  it('Play a full game', () => {
    
    // Step 1: Visit the home page, (Note: executes ‘npx http-server’ in project terminal)
    cy.visit('http://127.0.0.1:8080'); 
    cy.title().should('include', 'Rock Paper Scissors');
    
    // Step 2: Select number of players
    cy.get('#twoPlayers').should('be.visible').check();
    cy.get('#nextButton').should('be.visible').click();
    
    // Step 3: Enter the players' names
    cy.get('#player1').should('be.visible').type('Andres');
    cy.get('#player2').should('be.visible').type('Felipe');

    // Step 4: Select number of rounds
    cy.get('input[name="rounds"][value="3"]').check(); // Select 3 rounds
    
    // Click on the ‘Start Game’ button
    cy.get('#startGameButton').should('be.visible').click();
    
    // Step 5: choosing the players
    // Player 1 chooses
    cy.get('#rockButton').click();
    // Player 2 chooses
    cy.get('#paperButton').click();
    
    // Step 6: Verify ‘round number’
    cy.get('#roundInfo').should('include.text', 'Round 1');
    
    // Go to the next round
    cy.get('#nextRoundButton').should('be.visible').click();

    // Step 7: Select players for next round
    // Player 1 chooses
    cy.get('#paperButton').click();
    // Player 2 chooses
    cy.get('#rockButton').click();

    // Go to the next round
    cy.get('#nextRoundButton').should('be.visible').click();

    // Step 8: Select players for next round
    // Player 1 chooses
    cy.get('#scissorsButton').click();
    // Player 2 chooses
    cy.get('#paperButton').click();

    // Step 9: Wait for the result of the game and check the scoreboard
    cy.get('#scoreBoard').should('not.be.empty');
   
    // Step 10: Verify if the game has ended and a winner has been determined
    cy.get('#winnerMessage').should('not.be.empty');
    // Game over!!, return to player selection
    cy.get('#playAgainButton').should('be.visible').click();

    // step 11: check file ‘how to play?’
    cy.contains('How to Play?').click();

    // game flow test: complete!!

  });
});

