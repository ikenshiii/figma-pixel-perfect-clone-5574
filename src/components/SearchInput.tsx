import React from 'react';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChange,
  className = ""
}) => {
  return (
    <div className={`items-center content-center flex-wrap flex gap-[8px_8px] overflow-hidden bg-[rgba(255,255,255,0.80)] px-2 py-1 rounded-2xl border-[0.5px] border-solid border-[rgba(0,0,0,0.10)] ${className}`}>
      <div className="items-center content-center flex-wrap self-stretch flex w-full gap-[8px_8px] flex-1 shrink basis-[0%] my-auto rounded-xl">
        <div className="justify-center items-center self-stretch flex w-4 my-auto rounded-lg">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/be196a3d4074aeae97b76784829602de9215e70d?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch h-4 my-auto"
            alt="Search icon"
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="justify-center items-stretch self-stretch flex flex-col text-sm text-black font-normal tracking-[0] leading-none flex-1 my-auto rounded-xl bg-transparent border-none outline-none"
        />
      </div>
    </div>
  );
};
