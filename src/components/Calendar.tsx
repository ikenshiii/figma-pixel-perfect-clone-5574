import React, { useState } from 'react';

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('Feb 15');

  const timeSlots = [
    '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM',
    '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'
  ];

  const weekDays = ['Mo 12', 'Tu 13', 'We 14', 'Th 15', 'Fr 16', 'Sa 17', 'Su 18'];

  const appointments = [
    {
      id: 1,
      title: 'Cloud project meeting',
      time: '8:00 - 10:00',
      color: '#E6F1FD',
      column: 0,
      row: 0,
      height: 105
    },
    {
      id: 2,
      title: 'Test the prototypes',
      time: '8:30 - 10:00',
      color: '#EDEEFC',
      column: 1,
      row: 38,
      height: 67
    },
    {
      id: 3,
      title: 'Design feedback',
      time: '8:30 - 9:50',
      color: '#E6F1FD',
      column: 3,
      row: 58,
      height: 67
    }
  ];

  return (
    <section className="relative min-h-[686px] w-full overflow-hidden gap-6 bg-[#F9F9FA] mt-[26px] p-6 rounded-[20px] max-md:max-w-full max-md:px-5">
      <div className="items-center content-center flex-wrap z-0 flex w-full gap-[16px_16px] rounded-lg max-md:max-w-full">
        <div className="justify-center items-stretch self-stretch flex min-w-60 flex-col text-sm text-black font-semibold whitespace-nowrap tracking-[0] leading-none flex-1 shrink basis-[0%] my-auto rounded-xl max-md:max-w-full">
          <h2 className="text-black font-semibold tracking-[0] max-md:max-w-full">
            Calendario
          </h2>
        </div>
        
        <div className="items-center content-center flex-wrap self-stretch flex min-w-60 gap-[8px_8px] my-auto rounded-xl">
          <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 my-auto p-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/68e7d769761ddf24f955db1f219a693031c7f29c?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Previous"
              />
            </div>
          </button>
          
          <div className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal tracking-[0] leading-none w-11 my-auto rounded-xl">
            <div className="text-black font-normal tracking-[0]">{currentDate}</div>
          </div>
          
          <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 my-auto p-1 rounded-2xl hover:bg-gray-100">
            <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7cf4d8c2033df458568dcde470619fd220cfa47a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Next"
              />
            </div>
          </button>
          
          <button className="min-w-7 justify-center items-center self-stretch flex min-h-7 gap-1 text-sm text-black font-normal text-center tracking-[0] leading-none w-32 bg-[rgba(0,0,0,0.04)] my-auto px-3 py-1 rounded-2xl hover:bg-gray-200">
            <div className="justify-center self-stretch flex w-[104px] flex-col my-auto rounded-xl">
              <div className="text-black font-normal tracking-[0]">Nuevo paciente</div>
            </div>
          </button>
        </div>
      </div>
      
      <div className="items-stretch z-0 flex w-full gap-4 flex-1 flex-wrap h-full mt-6 max-md:max-w-full">
        <div className="items-center flex flex-col text-xs text-black font-normal text-right tracking-[0] leading-none w-[35px] gap-7 pt-10 rounded-lg max-md:hidden">
          <div className="w-[35px] gap-7 rounded-xl">
            {timeSlots.slice(0, 6).map((time, index) => (
              <div key={index} className={`font-normal tracking-[0] ${index > 0 ? 'mt-7' : ''}`}>
                {time}
              </div>
            ))}
          </div>
          <div className="w-[30px] gap-7 mt-7 rounded-xl">
            {timeSlots.slice(6).map((time, index) => (
              <div key={index} className={`font-normal tracking-[0] ${index > 0 ? 'mt-7' : ''}`}>
                {time}
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="z-0 flex w-full items-stretch gap-[40px_100px] justify-between flex-1 flex-wrap h-full max-md:max-w-full">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="border w-0 shrink-0 h-[586px] bg-[rgba(0,0,0,0.04)] border-[rgba(0,0,0,0.04)] border-solid"
              />
            ))}
          </div>
          
          <div className="items-center content-center flex-wrap absolute z-0 flex min-h-5 max-w-full w-[837px] gap-[4px_4px] text-xs text-black font-normal text-center tracking-[0] leading-none h-5 rounded-xl right-0 top-0">
            {weekDays.map((day, index) => (
              <div
                key={index}
                className="font-normal tracking-[0] self-stretch flex-1 shrink basis-[0%] my-auto"
              >
                {day}
              </div>
            ))}
          </div>
          
          <div className="absolute z-0 flex w-[936px] max-w-[936px] flex-col h-[686px] py-[87px] right-0 bottom-0 max-md:max-w-full">
            <div className="z-10 flex w-full flex-col items-stretch pl-[69px] pr-6 max-md:max-w-full max-md:px-5">
              <div className="w-[582px] max-w-full ml-3.5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-6/12 max-md:w-full max-md:ml-0">
                    <div className="flex w-full items-stretch gap-[17px] text-xs font-normal tracking-[0] mt-10">
                      <div className="content-start flex-wrap flex min-h-[105px] gap-[8px_8px] w-[104px] h-[104px] bg-[#E6F1FD] p-2 rounded-lg">
                        <div className="justify-center items-stretch flex w-full flex-col flex-1 shrink basis-[0%] rounded-xl">
                          <div className="text-black font-normal leading-4 tracking-[0]">
                            Cloud project meeting
                          </div>
                          <div className="text-black font-normal leading-none tracking-[0]">
                            8:00 - 10:00
                          </div>
                        </div>
                      </div>
                      <div className="content-start flex-wrap flex gap-[8px_8px] flex-1 bg-[#EDEEFC] mt-[38px] p-2 rounded-lg">
                        <div className="justify-center items-stretch flex w-full flex-col flex-1 shrink basis-[0%] rounded-xl">
                          <div className="text-black font-normal leading-4 tracking-[0]">
                            Test the prototypes
                          </div>
                          <div className="text-black font-normal leading-none tracking-[0]">
                            8:30 - 10:00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex w-full flex-col text-xs font-normal tracking-[0] max-md:mt-10">
                      <div className="items-center flex text-white leading-none bg-[#ADADFB] px-1 py-0.5 rounded-lg">
                        <div className="text-white font-normal tracking-[0] self-stretch my-auto">
                          Th 15
                        </div>
                      </div>
                      <div className="content-start flex-wrap flex gap-[8px_8px] bg-[#E6F1FD] mt-[58px] p-2 rounded-lg max-md:mt-10">
                        <div className="justify-center items-stretch flex w-full flex-col flex-1 shrink basis-[0%] rounded-xl">
                          <div className="text-black font-normal leading-4 tracking-[0]">
                            Design feedback
                          </div>
                          <div className="text-black font-normal leading-none tracking-[0]">
                            8:30 - 9:50
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
