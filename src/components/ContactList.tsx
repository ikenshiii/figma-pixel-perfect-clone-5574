import React, { useState } from 'react';
import { SearchInput } from './SearchInput';

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  initials?: string;
  backgroundColor?: string;
}

const contacts: Contact[] = [
  { id: '1', name: 'Andi Lane', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/c02a071d13e16021362c4e8e5e8d1714af06f962?placeholderIfAbsent=true' },
  { id: '2', name: 'ByeWind', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/b654d30dbcc28a877e84c9fa5ac3fada90e2a1ad?placeholderIfAbsent=true' },
  { id: '3', name: 'Bruce Wayne', initials: 'B', backgroundColor: '#7DBBFF' },
  { id: '4', name: 'Drew Cano', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/04bfd85f26b2372bf5a8cd9d76cbcf346e869c9e?placeholderIfAbsent=true' },
  { id: '5', name: 'Emma Smith', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/c1c59933f4fdb4f11af5dac9f9579d2317067899?placeholderIfAbsent=true' },
  { id: '6', name: 'John Smith', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/f86ffe8322f6d6c01e0cfa2aa5b76539a67cff99?placeholderIfAbsent=true' },
  { id: '7', name: 'Kate Morrison', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/71a2f90691815495bb3aecb5030ba1489ba6a678?placeholderIfAbsent=true' },
  { id: '8', name: 'Koray Okumus', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/0e996d1e8d876f0c75753a2f6c3db5b9587e330b?placeholderIfAbsent=true' },
  { id: '9', name: 'Michael Brown', initials: 'M', backgroundColor: '#71DD8C' },
  { id: '10', name: 'Melody Macy', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/d1b22167bf89f1e5710559aebe41dc29b5e2007e?placeholderIfAbsent=true' },
  { id: '11', name: 'Natali Craig', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/9839c0bb2dcf5285a1a0fdf92bfab89b2bec27f2?placeholderIfAbsent=true' },
  { id: '12', name: 'Orlando Diggs', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/1c1fe73208f1f6748a7fe986990756f5f2f152f4?placeholderIfAbsent=true' },
];

export const ContactList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedContacts = filteredContacts.reduce((groups, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(contact);
    return groups;
  }, {} as Record<string, Contact[]>);

  const ContactItem: React.FC<{ contact: Contact }> = ({ contact }) => (
    <div className="items-center content-center flex-wrap flex w-full gap-[8px_8px] mt-2 p-1 rounded-lg hover:bg-gray-100 cursor-pointer">
      <div className="justify-center items-center self-stretch flex w-6 my-auto rounded-lg">
        {contact.avatar ? (
          <img
            src={contact.avatar}
            className="aspect-[1] object-contain w-6 self-stretch h-6 my-auto"
            alt={contact.name}
          />
        ) : (
          <div
            className="justify-center items-center self-stretch flex w-6 flex-col overflow-hidden h-6 my-auto px-0.5 rounded-[80px]"
            style={{ backgroundColor: contact.backgroundColor }}
          >
            <div className="text-white font-normal tracking-[0] text-xs">
              {contact.initials}
            </div>
          </div>
        )}
      </div>
      <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal tracking-[0] leading-none flex-1 shrink basis-[0%] my-auto rounded-xl">
        <div className="text-black font-normal tracking-[0]">
          {contact.name}
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-[900px] w-full gap-2 bg-[#F9F9FA] mx-auto p-6 rounded-[20px] max-md:mt-7 max-md:px-5">
      <SearchInput
        placeholder="Buscar paciente"
        value={searchTerm}
        onChange={setSearchTerm}
        className="w-full max-w-40"
      />
      
      <div className="mt-4">
        {Object.entries(groupedContacts).sort().map(([letter, contactsInGroup]) => (
          <div key={letter}>
            <div className="justify-center items-stretch flex min-h-8 w-full flex-col text-xs text-black font-normal whitespace-nowrap tracking-[0] leading-none mt-2 px-3 py-2 rounded-xl">
              <div className="font-normal tracking-[0]">{letter}</div>
            </div>
            {contactsInGroup.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
