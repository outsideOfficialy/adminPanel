import { InputWrapper } from "./inputWrapper";
import ButtonTemplate from "../ButtonTemplate";
import React, { useEffect } from "react";


export const SongsInputs: React.FC<{ label: string; name: string; songs?: string[] }> = ({
  label,
  name,
  songs = []
}) => {
  const [songsCount, setSongsCount] = React.useState<string[]>([""]);

  const increaseSongList = () => setSongsCount([...songsCount, ""]);
  const decreaseSongList = (idx: number) => {
    if (songsCount.length === 1) return;
    const filteredArray = [...songsCount.filter((el, i) => i !== idx)];
    setSongsCount(filteredArray);
  };
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const newInputs = [...songsCount];
    newInputs[idx] = e.target.value;
    setSongsCount(newInputs);
  };

  useEffect(() => {
    if (!songs.length || songs[0] === "") return;
    setSongsCount(songs);
  }, [songs]);

  return (
    <>
      <InputWrapper label={label} className="gap-[15px] md:gap-[10px]">
        <div className="flex flex-col gap-[15px] md:gap-[25px] w-full">
          {songsCount.map((el, idx) => {
            return (
              <div key={idx} className="flex gap-[15px] md:gap-[10px] items-center">
                <input
                  data-song-count={idx}
                  type="text"
                  className="bg-black border rounded-lg border-white text-white p-[8px] md:p-2.5 max-w-[450px] w-full text-[14px] md:text-base font-normal md:font-medium leading-normal tracking-wider transition duration-300 ease-in-out placeholder-grey focus:border-main-primary-color focus:ring-0 focus:outline-none"
                  value={el}
                  onChange={(e) => inputChange(e, idx)}
                  name={name}
                  placeholder={`Song name №${idx + 1}`}
                />

                <ButtonTemplate border onClick={() => decreaseSongList(idx)}>
                  <span className="delete material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    delete
                  </span>
                </ButtonTemplate>
              </div>
            );
          })}
          <ButtonTemplate border onClick={increaseSongList}>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">+</span>
          </ButtonTemplate>
        </div>
      </InputWrapper>
    </>
  );
};