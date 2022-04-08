import { IContact } from '../types/Contact';

export function searchContacts(contacts: IContact[], search: string) {
  if (search) {
    return contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
        contact.tel.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return contacts;
}

export function sortedContacts<Key extends keyof IContact>(
  contacts: IContact[],
  selectedSort = 'firstName',
) {
  return [...contacts].sort((a, b) =>
    a[selectedSort as Key].localeCompare(b[selectedSort as Key]),
  );
}

export function sortedAndSearchContacts(contacts: IContact[], search: string) {
  return sortedContacts(searchContacts(contacts, search));
}
