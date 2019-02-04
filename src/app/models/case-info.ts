import { Brokers } from './brokers';
import { BillingEntities } from './billing-entities';
import { Cntrcts } from './cntrcts';
import { Groups } from './groups';
import { Address } from './address';
import { Contact } from './contact';
export class CaseInfo {
    caseName:string;
    einNumber:string;
    caseEffDate:string;
    caseSttsCd:string;
    address:Address;
    contact:Contact;
    groups:Groups[];
    billingEntities:BillingEntities[];
    brokers:Brokers[];

}
