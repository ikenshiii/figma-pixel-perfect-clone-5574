import React from 'react';

export const UserProfile: React.FC = () => {
  return (
    <section className="min-w-80 flex w-full gap-7 flex-wrap bg-[#F9F9FA] p-6 rounded-[20px] max-md:max-w-full max-md:px-5">
      <div className="min-w-60 flex-1 shrink basis-[0%] gap-4 max-md:max-w-full">
        <div className="items-center content-center flex-wrap flex w-full gap-[16px_16px] rounded-lg max-md:max-w-full">
          <div className="justify-center items-center self-stretch flex w-10 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a38224bbd2f7c706f9982e87e7d2104c83b2cef7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 self-stretch h-10 my-auto"
              alt="Doctor García"
            />
          </div>
          <div className="justify-center items-stretch self-stretch flex flex-col text-lg text-black font-semibold tracking-[0] leading-loose w-[120px] my-auto rounded-xl">
            <h2 className="text-black font-semibold tracking-[0]">
              Doctor García
            </h2>
          </div>
        </div>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[16px_16px] mt-4 rounded-lg max-md:max-w-full">
          <div className="items-center content-center flex-wrap self-stretch flex gap-[8px_8px] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/69e3d16ebce35d1a8ae13dbb166f9e322cd433a8?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Role"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-xs text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[39px] my-auto rounded-xl">
              <div className="font-normal tracking-[0]">Doctor</div>
            </div>
          </div>
          
          <div className="items-center content-center flex-wrap self-stretch flex gap-[8px_8px] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a10ebed060ff891fe1d01f23e4ae521f434d2f2d?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Location"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-xs text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[67px] my-auto rounded-xl">
              <div className="font-normal tracking-[0]">Providencia</div>
            </div>
          </div>
          
          <div className="items-center content-center flex-wrap self-stretch flex gap-[8px_8px] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/038a99cf1773735c0d43e54d1b3a13e28b7e746c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Email"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-xs text-black font-normal whitespace-nowrap tracking-[0] leading-none w-[130px] my-auto rounded-xl">
              <div className="font-normal tracking-[0]">Doctor@medigest.com</div>
            </div>
          </div>
          
          <div className="items-center content-center flex-wrap self-stretch flex gap-[8px_8px] my-auto rounded-xl">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c08ddc9344801eb229fe925cc1296fb6a9fcbb4e?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
                alt="Phone"
              />
            </div>
            <div className="justify-center items-stretch self-stretch flex flex-col text-xs text-black font-normal tracking-[0] leading-none w-[90px] my-auto rounded-xl">
              <div className="font-normal tracking-[0]">+852 19850622</div>
            </div>
          </div>
        </div>
        
        <div className="items-center content-center flex-wrap flex w-full gap-[28px_28px] mt-4 max-md:max-w-full">
          <div className="justify-center items-stretch self-stretch flex flex-col text-black whitespace-nowrap tracking-[0] w-[65px] gap-1 my-auto rounded-lg">
            <div className="justify-center items-stretch flex w-[65px] flex-col text-sm font-normal leading-none rounded-xl">
              <div className="text-black font-normal tracking-[0]">Pacientes</div>
            </div>
            <div className="justify-center items-stretch flex w-[22px] flex-col text-lg font-semibold leading-loose mt-1 rounded-xl">
              <div className="text-black font-semibold tracking-[0]">75</div>
            </div>
          </div>
          
          <div className="self-stretch flex min-h-12 items-stretch justify-between w-px my-auto">
            <div className="border min-h-12 w-0 bg-[rgba(0,0,0,0.10)] border-[rgba(0,0,0,0.1)] border-solid" />
          </div>
          
          <div className="justify-center items-stretch self-stretch flex flex-col text-black tracking-[0] w-[100px] gap-1 my-auto rounded-lg">
            <div className="justify-center items-stretch flex max-w-full w-[100px] flex-col text-sm font-normal leading-none rounded-xl">
              <div className="text-black font-normal tracking-[0]">En Tratamiento</div>
            </div>
            <div className="justify-center items-stretch flex w-[23px] flex-col text-lg font-semibold whitespace-nowrap leading-loose mt-1 rounded-xl">
              <div className="text-black font-semibold tracking-[0]">23</div>
            </div>
          </div>
          
          <div className="self-stretch flex min-h-12 items-stretch justify-between w-px my-auto">
            <div className="border min-h-12 w-0 bg-[rgba(0,0,0,0.10)] border-[rgba(0,0,0,0.1)] border-solid" />
          </div>
          
          <div className="justify-center items-stretch self-stretch flex flex-col text-black whitespace-nowrap tracking-[0] w-[61px] gap-1 my-auto rounded-lg">
            <div className="justify-center items-stretch flex w-[61px] flex-col text-sm font-normal leading-none rounded-xl">
              <div className="text-black font-normal tracking-[0]">Incentivo</div>
            </div>
            <div className="justify-center items-stretch flex w-[43px] flex-col text-lg font-semibold leading-loose mt-1 rounded-xl">
              <div className="text-black font-semibold tracking-[0]">1,123</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="items-center content-center flex-wrap flex gap-[8px_8px] rounded-lg">
        <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 my-auto p-1 rounded-2xl hover:bg-gray-100">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2d449f187f38e5cfe2e5fa48fd841245ae563fe3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt="Edit"
            />
          </div>
        </button>
        
        <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 bg-black my-auto px-2 py-1 rounded-2xl hover:bg-gray-800">
          <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/604c684ccf312ab3d01a431b83a264e3d75d02a6?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
              alt="Message"
            />
          </div>
          <div className="justify-center self-stretch flex flex-col text-sm text-white font-normal whitespace-nowrap text-center tracking-[0] leading-none w-14 my-auto rounded-xl">
            <div className="text-white font-normal tracking-[0]">Mensaje</div>
          </div>
        </button>
      </div>
    </section>
  );
};
