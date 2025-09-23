import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="justify-between items-center flex w-full gap-[40px_100px] flex-wrap px-7 py-5 border-b-[0.5px] border-b-[rgba(0,0,0,0.10)] border-solid max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 items-center gap-2 my-auto">
        <div className="items-center content-center flex-wrap self-stretch flex gap-[8px_8px] my-auto rounded-lg">
          <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 my-auto p-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e8170276174ab12472566aa5b4e6e93441ef0204?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
                alt="Menu"
              />
            </div>
          </button>
          <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 my-auto p-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b8d68883217306d39d9a3d01f8880b9f754731e5?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
                alt="Back"
              />
            </div>
          </button>
        </div>
        
        <nav className="items-center content-center flex-wrap self-stretch flex gap-[8px_8px] text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none my-auto rounded-lg" aria-label="Breadcrumb">
          <button className="justify-center items-center self-stretch flex gap-1 text-center w-[104px] my-auto px-3 py-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center self-stretch flex w-20 flex-col my-auto rounded-xl">
              <div className="font-normal tracking-[0]">Dashboards</div>
            </div>
          </button>
          <div className="justify-center items-stretch self-stretch flex flex-col w-[5px] my-auto rounded-xl">
            <div className="font-normal tracking-[0]">/</div>
          </div>
          <button className="justify-center items-center self-stretch flex gap-1 text-black text-center w-[72px] my-auto px-3 py-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center self-stretch flex w-12 flex-col my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">Default</div>
            </div>
          </button>
        </nav>
      </div>
      
      <div className="self-stretch flex min-w-60 gap-5 my-auto">
        <div className="items-center content-center flex-wrap flex gap-[8px_8px] overflow-hidden w-40 bg-[rgba(0,0,0,0.04)] px-2 py-1 rounded-2xl">
          <div className="items-center content-center flex-wrap self-stretch flex gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/be196a3d4074aeae97b76784829602de9215e70d?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
                alt="Search"
              />
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[47px] my-auto rounded-xl bg-transparent border-none outline-none"
            />
          </div>
          <div className="justify-center rounded self-stretch flex flex-col text-xs text-black font-normal whitespace-nowrap text-center tracking-[0] leading-none w-5 my-auto border-[0.5px] border-solid border-[rgba(0,0,0,0.10)]">
            <div className="font-normal tracking-[0]">/</div>
          </div>
        </div>
        
        <div className="items-center content-center flex-wrap flex gap-[8px_8px] rounded-lg">
          <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 my-auto p-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/918274f1388c3feafae6979b95a7a84b9080f2b1?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
                alt="Notification"
              />
            </div>
          </button>
          <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 my-auto p-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/dd1991794ed7f6ed743d5f1f003cec57bb5921cf?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
                alt="Settings"
              />
            </div>
          </button>
          <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 my-auto p-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/808cd7791c052007e385740f0c7f7971c0b55cd3?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
                alt="Help"
              />
            </div>
          </button>
          <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 my-auto p-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e8170276174ab12472566aa5b4e6e93441ef0204?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
                alt="Profile"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
