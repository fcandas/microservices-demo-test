
describe('WeaveSock Test', () => {

 
  
  beforeEach(() => {
    cy.goToPage();
  })

  it ('Register succesfull user', () => {

    cy.registerSuccesfulUser();
     
    })

  it ('Create user with empty username', () => {

    cy.createUserWithEmptyUsername();
       
    })

  it ('Create user with empty name', () => {

      cy.createUserWithEmptyName();
         
    })
  
  it ('Create user with empty lastname', () => {

      cy.createUserWithEmptyLastname();
         
    })
  
  it ('Create user with empty email', () => {

      cy.createUserWithEmptyEmail();
         
    })

  it ('Create user with empty password', () => {

      cy.createUserWithEmptyPassword();
         
    })

  it ('Create user with wrong email format', () => {

      cy.createUserWithWrongEmail();
         
    })

  it ('Create user with non-alphabetic name', () => {

      cy.createUserWithNonalphabeticName();
         
    })

  it ('Create user with non-alphabetic lastname', () => {

      cy.createUserWithNonalphabeticLastname();
         
    })
          
  it ('Checking max character length for username,firstname and lastname', () => {

      cy.tryMaxCharLength();
         
    })

  it ('Checking min character length for username,firstname and lastname', () => {

      cy.tryMinCharLength();
         
    })

  it ('Trying to register with exist user', () => {

      cy.checkRegisteredUser();
         
    })

  it ('Trying to login with existing user', () => {

      cy.trySuccesfullLogin();
         
    })

  it ('Trying to login without username', () => {

      cy.tryLoginWithoutUsername();
         
    })

  it ('Trying to login without password', () => {

      cy.tryLoginWithoutPassword();
         
    })

  it ('Trying to login with wrong username', () => {

      cy.tryLoginWithWrongUser();
         
    })

  it ('Trying to login with wrong password', () => {

      cy.tryLoginWithWrongPass();
         
    })

  it ('Trying to login with sql injection', () => {

      cy.trySqlInjection();
         
    })

    it ('Check first checkbox and filter', () => {

      cy.checkFirstFilter();
         
    })

  it ('Check two checkbox and filter', () => {

      cy.checkTwoFilter();
         
    })

  it ('Get method', () => {

      cy.checkUser();
         
    })
  
})