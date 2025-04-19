export type filterInterface = {
    searchTerm?:string | undefined,
    email?:string | undefined,
    contact_number?:string | undefined,
    limit?:number | undefined,
    page?:number | undefined,
    sortByName?:string | undefined,
    sortOrder?:string | undefined
}

export type optoinsType = {
    limit?:number | undefined,
    page?:number | undefined,
    skip?:number | undefined,
    sortByName?:string | undefined,
    sortOrder?: string | undefined
}