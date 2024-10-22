import { IContact } from "./IContact"

export interface IContactFormProps {
    onSubmit: (contact: IContact) => void
    initialData?: Partial<IContact>
}