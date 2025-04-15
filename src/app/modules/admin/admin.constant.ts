export const adminFilterableFields = ['name','email','contact_number']
export const adminSearchableFields = ["searchTerm","name", "email", "contact_number"]
export type paginationType ={
    limit?:number,
    page?:number,
    sortByName?:string,
    sortOrder?:string
}