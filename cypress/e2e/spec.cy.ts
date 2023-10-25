import { Address } from "../page_object/address";

describe('template spec', () => {
  beforeEach(()=>{
    cy.login('admin');
    cy.dataCy('Address Book').click().wait(2000);
  });

  it.only('should be able to add new invoice',()=>{
    Address.addNewInvoice();
  });

  it.only('should be able to edit invoice',() =>{
    Address.editInvoice();
    
  });

  it('should be able to delete invoice',()=>{
    Address.deleteInvoice();
  });

  it('should be able to crosscheck the filter functionality',()=>{
    Address.filter()
  });

})