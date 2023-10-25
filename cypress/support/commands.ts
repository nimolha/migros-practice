import userData from "../fixtures/user.json";

Cypress.Commands.add("login", (userType: string, userName?: string) => {
  const type: UserType = {
    admin: {
      email: userData.adminId,
    },
    marketingManager: {
      email: userData.managerId,
    },
    gmos: {
      email: userData.gmosId,
    },
    newUser: {
      email: userName,
    },
  };
  const user = type[userType];

  cy.clearLocalStorage();
  cy.request({
    method: "POST",
    url: `${Cypress.env("url")}/api/v2/iam/users/sign_in`,
    body: {
      user: {
        email: user.email,
        password: Cypress.env("password"),
      },
    },
  }).then(() => {
    cy.visit("/");
    cy.log("**Successful login**");
    cy.url().should("include", "/resource-planning/teams");
    localStorage.setItem("language", "en-DE");
  });
});

interface UserType {
  [key: string]: {
    email: string | undefined;
  };
}

Cypress.Commands.add("dataCy", (selector: string) => {
  cy.get(`[data-cy='${selector}']`);
});

Cypress.Commands.add("labal",(webName:string ,userInput:string) =>{
    cy.dataCy(webName).find('input').focus().clear().type(userInput);
})
Cypress.Commands.add("checkbox",(box:string)=>{
    cy.dataCy('category').contains('label',box).click();
})

Cypress.Commands.add("edit",(newWebname:string,newUserInput:string)=>{
  cy.dataCy(newWebname).find('input').wait(2000).clear().type(newUserInput).click();
})
Cypress.Commands.add("newPage3",(newwName:string, newuGet:string)=>{
  cy.dataCy(newwName).find('input').clear().type(newuGet);
})
Cypress.Commands.add("spinner", () =>{
  cy.get('.oxd-loading-spinner').should('not.exist');
})
Cypress.Commands.add('errorMessage', (selector) => {
  cy.dataCy(selector).find('input').focus().blur();
  cy.contains('This field is required').should('be.visible').wait(1000);
});