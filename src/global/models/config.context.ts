import { BillingType, PartyType } from "../../components/party/model/party";

export default interface IConfigContext {
    appName: string,
    appDefaultRoute: string,
    defaultUser: string,
    defaultRole: string,
    userDb: string,
    partyDb: string,
    partyType: Array<PartyType>,
    billingType: Array<BillingType>
}