import { useRef, useState } from "react";
import BirthdayWish from "./components/BirthdayWish";
import SurpriseGallery from "./components/SurpriseGallery";

const App = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [name, setName] = useState("");
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current?.play().catch(() => {});
  };

  return (
    <>
      {/* 🎵 GLOBAL BIRTHDAY SONG */}
      <audio ref={audioRef} loop>
        <source src="/birthday.mp3" type="audio/mpeg" />
      </audio>

       {!showSurprise ? (
        <BirthdayWish
          name={name}
          setName={setName}
          playMusic={playMusic}
          onNext={() => {
            playMusic();
            setShowSurprise(true);
          }}
        />
      ) : (
        <SurpriseGallery
          name={name}
          audioRef={audioRef}   // 👈 PASS AUDIO
          playMusic={playMusic}
        />
      )}
    </>
  );
};

export default App;
