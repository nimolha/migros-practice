import { randCompanyName, randEmail, randFirstName, randJobDescriptor, randLastName, randNumber, randWord } from "@ngneat/falso";

export enum invoicerCategory{
    IT_Partner = "IT-Partner",
    Advertising_Agencies = "Advertising Agencies",
    Event_Agencies = "Event Agencies",
    Photographers = "Photographers",
    Printers = "Printers",
    Media_partners = "Media partners",
    Supplier = "Supplier",
    Migros = "Migros",
    Various = "Various",
    BZ_cost_center = "BZ cost center",
    Writing_Agencies = "Writing Agencies"
}

export class cuser{
    companyName= 'nima_company';
    location= 'Australia';
    website= randWord();
    comment= randWord();
    description= randJobDescriptor();
    firstName= randFirstName();
     lastName=randLastName();
     phoneNumber= '+41512345678';
     email=randEmail();
     position=randWord();
}
export class adduser{
    newComapnyName='nima_company';
     newLocation= 'Australia';
     newWebsite=randWord();
     newComment=randWord();
     newDescription=randWord();
     newfirstName=randFirstName();
    newlastName=randLastName();
    newphoneNumber='+41512345678';
    newemail=randEmail();
    newposition=randWord();
}