// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.ts using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
  namespace Cypress {
    interface Chainable {
      login(userType: string, userName?: string): Chainable<Element>;
      dataCy(selector: string): Chainable<Element>;
      labal(webName: string, userInput:string):Chainable<Element>;
      checkbox(box:string):Chainable<Element>;
      pageThree(wName:string, uGet:string):Chainable<Element>;
      edit(newWebname: string, newUserInput:string):Chainable<Element>;
      newPage3(newwName:string, newuGet:string):Chainable<Element>;
      spinner():Chainable<Element>;
      errorMessage(selector: string): Chainable<Element>;
      
    }
  }
}
