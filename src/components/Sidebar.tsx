import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const isAgenda = location.pathname === '/';
  const isFinanzas = location.pathname === '/finanzas';
  return (
    <aside className="relative gap-2 p-4 border-r-[0.5px] border-r-[rgba(0,0,0,0.10)] border-solid max-md:pb-[100px]">
      <nav className="z-0 w-full gap-1 pb-3">
        <div className="items-center content-center flex-wrap flex w-full gap-[8px_8px] p-2 rounded-lg">
          <div className="justify-center items-center self-stretch flex w-6 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b654d30dbcc28a877e84c9fa5ac3fada90e2a1ad?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch h-6 my-auto"
              alt="Doctor García"
            />
          </div>
          <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal tracking-[0] leading-none w-[92px] my-auto rounded-xl">
            <div className="text-black font-normal tracking-[0]">
              Doctor García
            </div>
          </div>
        </div>
        
        <div className="flex w-full flex-col items-stretch justify-center mt-1 py-0.5">
          <div className="border min-h-0 w-full bg-black border-black border-solid" />
        </div>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[8px_8px] mt-1 rounded-lg">
          <button className="justify-center items-center self-stretch flex gap-1 text-sm text-black font-normal whitespace-nowrap text-center tracking-[0] leading-none w-[97px] my-auto px-3 py-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center self-stretch flex w-[73px] flex-col my-auto rounded-xl">
              <div className="font-normal tracking-[0]">Sucursales</div>
            </div>
          </button>
        </div>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[4px_4px] mt-1 p-2 rounded-xl">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c2e257ef62c7d3921e5befe7b739e81e2385812b?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Location"
            />
          </div>
          <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[79px] my-auto rounded-xl">
            <div className="text-black font-normal tracking-[0]">Concepción</div>
          </div>
        </div>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[4px_4px] mt-1 p-2 rounded-xl">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/20eb6ae94a44de4102dbc5ff9d409e05433eb166?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Location"
            />
          </div>
          <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[78px] my-auto rounded-xl">
            <div className="text-black font-normal tracking-[0]">Providencia</div>
          </div>
        </div>
      </nav>
      
      <nav className="z-0 w-full gap-1 mt-2 pb-3">
        <div className="justify-center items-stretch flex w-full flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none px-3 py-1 rounded-xl">
          <div className="font-normal tracking-[0]">Escritorios</div>
        </div>
        
        <Link to="/" className={`items-center content-center flex-wrap flex w-full gap-[4px_4px] ${isAgenda ? 'bg-[rgba(0,0,0,0.04)]' : ''} mt-1 p-2 rounded-xl hover:bg-[rgba(0,0,0,0.04)] transition-colors`}>
          <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-5 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c5c3884c098f1a947ab4781a2a46cb7b1448b4f2?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch h-5 my-auto"
                alt="Agenda"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[51px] my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">Agenda</div>
            </div>
          </div>
        </Link>
        
        <Link to="/finanzas" className={`items-center content-center flex-wrap flex w-full gap-[4px_4px] ${isFinanzas ? 'bg-[rgba(0,0,0,0.04)]' : ''} mt-1 p-2 rounded-xl hover:bg-[rgba(0,0,0,0.04)] transition-colors`}>
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6fe8c18a98e72342aebb6e34296507895d157690?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Icon"
            />
          </div>
          <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-5 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4f90a5afa6cf1aa6e67b4d8f4d9d813102792ccd?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch h-5 my-auto"
                alt="Finanzas"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[59px] my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">Finanzas</div>
            </div>
          </div>
        </Link>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[4px_4px] mt-1 p-2 rounded-xl">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6fe8c18a98e72342aebb6e34296507895d157690?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Icon"
            />
          </div>
          <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-5 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/35e9ea513253052a1c8bf6e325c3fddc45bc7a75?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch h-5 my-auto"
                alt="CRM"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-8 my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">CRM</div>
            </div>
          </div>
        </div>
      </nav>
      
      <nav className="z-0 w-full gap-1 mt-2 pb-3">
        <div className="justify-center items-stretch flex w-full flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none px-3 py-1 rounded-xl">
          <div className="font-normal tracking-[0]">Pages</div>
        </div>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[4px_4px] mt-1 p-2 rounded-xl">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6fe8c18a98e72342aebb6e34296507895d157690?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Icon"
            />
          </div>
          <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-5 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6f5dc0b715af0a3d4be6e4727ec850783ae9eeb5?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch h-5 my-auto"
                alt="User Profile"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal tracking-[0] leading-none w-[78px] my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">User Profile</div>
            </div>
          </div>
        </div>
        
        {['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers'].map((item) => (
          <div key={item} className="items-center content-center flex-wrap flex w-full gap-[4px_4px] text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none mt-1 p-2 rounded-xl">
            <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
              <div className="justify-center items-stretch self-stretch flex flex-col my-auto rounded-xl">
                <div className="text-black font-normal tracking-[0]">{item}</div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="items-center content-center flex-wrap flex w-full gap-[4px_4px] mt-1 p-2 rounded-xl">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6fe8c18a98e72342aebb6e34296507895d157690?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Icon"
            />
          </div>
          <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-5 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9872d07f1fec27fe303066e4cdc8157d9be5a1d3?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch h-5 my-auto"
                alt="Account"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[55px] my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">Account</div>
            </div>
          </div>
        </div>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[4px_4px] mt-1 p-2 rounded-xl">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6fe8c18a98e72342aebb6e34296507895d157690?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Icon"
            />
          </div>
          <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-5 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f915e93026f06240c0412a2bdf67f53f0256d3df?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch h-5 my-auto"
                alt="Corporate"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[67px] my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">Corporate</div>
            </div>
          </div>
        </div>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[4px_4px] mt-1 p-2 rounded-xl">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6fe8c18a98e72342aebb6e34296507895d157690?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Icon"
            />
          </div>
          <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-5 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cfc1c55b631b85d49f80a949d9457db1c63e4dfd?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch h-5 my-auto"
                alt="Blog"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[30px] my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">Blog</div>
            </div>
          </div>
        </div>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[4px_4px] mt-1 p-2 rounded-xl">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6fe8c18a98e72342aebb6e34296507895d157690?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Icon"
            />
          </div>
          <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-5 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/84780e4097110a3c31ae19725ad9bd87257564c3?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch h-5 my-auto"
                alt="Social"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal whitespace-nowrap tracking-[0] leading-none w-10 my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">Social</div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
