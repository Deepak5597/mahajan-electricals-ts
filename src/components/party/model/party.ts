export enum PartyType {
    credit = "credit",
    sale = "sale"
}
export enum BillingType {
    retail = "retail",
    wholesale = "wholesale"
}
export enum PartyStatus {
    active = "active",
    inactive = "inactive",
    deleted = "deleted"
}
export declare interface BillingLocation {
    billingName: string,
    address?: string,
    phone: string,
    billingType: BillingType
}

export default interface IParty {
    id: string | undefined,
    name: string,
    type: BillingType,
    currentBalance: number | 0,
    billingLocations: Array<BillingLocation>
}
