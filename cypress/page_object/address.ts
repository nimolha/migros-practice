import { randNumber } from '@ngneat/falso';
import { companyInfotype, edit} from '../utility/supportmodel';
import { invoicerCategory } from "../utility/vality";
import { cuser } from '../utility/vality';


const newuser = new cuser()

export class Address{
    static addNewInvoice(){
        cy.dataCy('addNewBtn').last().click();
        companyDetails(newuser);

    }

    static editInvoice(){
        cy.dataCy('searchTeam').find('input').wait(2000).type('nima_company');
        cy.dataCy('nima_company').first().then(container =>{
            cy.wrap(container).should('be.visible')
            cy.wrap(container).find('button').click()
            cy.wrap(container).dataCy('editBtn').click()
        });
        companyDetails(newuser);
    }

    static deleteInvoice(){
        cy.dataCy('searchTeam').find('input').type('nima_company');
        cy.dataCy('nima_company').its('length').then(length => {
            cy.dataCy('nima_company').last().then(dele =>{
                cy.wrap(dele).find('button').click()
                cy.wrap(dele).dataCy('deleteBtn').click().wait(2000).dataCy('actionBtn').click().wait(2000);
                cy.get('sf-snack-bar-container').should('be.visible');
            });
            cy.dataCy('nima_company').its('length').then(newlangth => {
                expect(newlangth).not.to.equal(length);
            })
        });
        }

    static filter(){
        cy.dataCy('selectAll').find('[type="checkbox"]').uncheck();
        cy.dataCy('invoicerCategory').find('[type="checkbox"]').should('not.be.checked');
        cy.dataCy('selectAll').find('[type="checkbox"]').check();
        cy.dataCy('invoicerCategory').find('[type="checkbox"]').should('be.checked');
        cy.dataCy('selectAll').find('[type="checkbox"]').uncheck();
        cy.get('[data-cy="invoicerCategory"]').should('exist').then((check) => {
            for (let i = 0; i < check.length; i++) {
                cy.get('[data-cy="invoicerCategory"]').find('[type="checkbox"]').eq(i).check();
                cy.get('[data-cy="invoicerCategory"]').find('label').eq(i).invoke('text').then((name)=>{
                    console.log(name);
                    cy.get('mg-invoicer-card').then((containers)=>{
                        const maxe = containers.length;
                        console.log(maxe);
                        if(maxe>=14){
                            maxe == 14;
                            return maxe;
                        }
                        if(maxe<=14){
                            return maxe;
                        };
                        const rand = randNumber({min:1, max:maxe});
                        const specificContainer = containers[rand];
                        
                        cy.wait(2000)
                        cy.wrap(specificContainer).find('p').should("contain", name);
                    })
                })
                cy.get('[data-cy="invoicerCategory"]').find('[type="checkbox"]').eq(i).uncheck();
                cy.wait(2000);
            }
        });

    }
}
function companyDetails(detail:companyInfotype){
    [['companyName',detail.companyName],['location',detail.location],['website',detail.website],['comment',detail.comment]].forEach((input)=>{
        cy.labal(input[0], input[1])      
    });
    cy.dataCy('description').find('p').type(detail.description);
        cy.dataCy('nextBtn').click();
        [invoicerCategory.IT_Partner,invoicerCategory.Advertising_Agencies,invoicerCategory.Event_Agencies,invoicerCategory.Photographers,invoicerCategory.Printers,
            invoicerCategory.Media_partners,invoicerCategory.Supplier,invoicerCategory.Migros,invoicerCategory.Various,invoicerCategory.BZ_cost_center,invoicerCategory.Writing_Agencies].forEach(ele=>{
                cy.dataCy('category').find('label').should('contain',ele);
            });
            
            [['IT-Partner'],['Photographers'],['Printers']].forEach(ele=>{
                cy.checkbox(ele[0])
            });
            cy.dataCy('nextBtn').click();
        
            cy.dataCy('salutation').click().contains('Mr.').click();
            [['firstName',detail.firstName],['lastName',detail.lastName],['number',detail.phoneNumber],['email',detail.email],['position',detail.position]].forEach((ele)=>{
                cy.dataCy(ele[0]).find('input').focus().clear().type(ele[1]);
            });
            cy.dataCy('addBtn').click();
            cy.dataCy('searchTeam').find('input').type(detail.companyName);
            cy.dataCy(detail.companyName).then(check =>{
                [detail.firstName,detail.lastName,detail.phoneNumber,detail.email].forEach((haha)=>{
                    cy.wrap(check).find('p').should('contain',haha);
                })
            });
    //hello tashi this is my git branch named side      
        
}
