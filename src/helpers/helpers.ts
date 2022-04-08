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
  selectedSort: Key,
) {
  return contacts.sort((a, b) =>
    a[selectedSort].localeCompare(b[selectedSort]),
  );
}

export function sortedAndSearchContacts(contacts: IContact[], search: string) {
  const searchResult = searchContacts(contacts, search);
  console.log(searchResult);
  const sortedResult = sortedContacts(searchResult, 'firstName');
  console.log(sortedResult);
  return sortedResult;
}
