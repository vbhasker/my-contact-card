import { IContact } from "./IContact"

export interface IContactCardProps {
    contact: IContact
    onEdit?: (contact: IContact) => void
}