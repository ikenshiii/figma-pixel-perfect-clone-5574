import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { ContactList } from '@/components/ContactList';
import { UserProfile } from '@/components/UserProfile';
import { Calendar } from '@/components/Calendar';

const Index = () => {
  return (
    <div className="flex items-stretch overflow-hidden flex-wrap bg-white rounded-3xl">
      <Sidebar />
      
      <main className="grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <Header />
        
        <div className="mt-7 mx-7 max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[18%] max-md:w-full max-md:ml-0">
              <ContactList />
            </div>
            
            <div className="w-[82%] ml-5 max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-7">
                <UserProfile />
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
