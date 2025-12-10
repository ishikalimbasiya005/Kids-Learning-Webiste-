import React, { useRef ,useEffect} from "react";
import "../Css/Animals.css";
import { Link } from "react-router-dom";

const Animals = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
      }, []);

  const audioRef = useRef(null);

  function playAnimal(name, sound) {
    // pehle se koi audio chal raha ho to usko band karo
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // naya audio object banao
    const audio = new Audio(sound);
    audioRef.current = audio;

    // pehle naam bolega
    const utter = new SpeechSynthesisUtterance(name);
    utter.onend = () => {
      // jaise hi bolna khatam ho audio start ho jaye
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    // agar user dusre animal pe jaldi hover kare to speech cancel ho jaye
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  function stopAnimal() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    // agar speech chal raha hai to cancel karo
    window.speechSynthesis.cancel();
  }
  return (
    <>
      <div className="animal-banner">
        <img
          src="assets\Farm.jpg"
          alt="Animal-Banner"
          className="Farm-banner"
        />
      </div>

      <div className="animal-outer">
        <div className="container">
          <div className="animal-inner">
            <div className="animal-block">
              <div className="animal-card">
                <img
                  src="assets\lion.jpg"
                  alt="Lion-image"
                  className="lion"
                  onMouseEnter={() =>
                    playAnimal("Lion", "/Sound/lion-snarl-growl-354324.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\elephant.jpg"
                  alt="elephant-image"
                  className="elephant"
                  onMouseEnter={() =>
                    playAnimal("Elephant", "/Sound/vpllf9z5u0a-elephant-0.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\cow.jpg"
                  alt="cow-image"
                  className="cow"
                  onMouseEnter={() =>
                    playAnimal("Cow", "/Sound/cow-mooing-343423.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\monkey.jpg"
                  alt="monkey-image"
                  className="monkey"
                  onMouseEnter={() =>
                    playAnimal("Monkey", "/Sound/monkey-128368.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\bear.jpg"
                  alt="bear-image"
                  className="bear"
                  onMouseEnter={() =>
                    playAnimal("Bear", "/Sound/bear-356010.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\fox.jpg"
                  alt="fox-image"
                  className="fox"
                  onMouseEnter={() => playAnimal("Fox", "/Sound/fox-purrs.mp3")}
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\horse.jpg"
                  alt="horse-image"
                  className="horse"
                  onMouseEnter={() =>
                    playAnimal("Horse", "/Sound/horse-neigh-sfx-390299.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\owl.jpg"
                  alt="owl-image"
                  className="owl"
                  onMouseEnter={() => playAnimal("Owl", "/Sound/owl-59011.mp3")}
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\giraffe.jpg"
                  alt="giraffe-image"
                  className="giraffe"
                  onMouseEnter={() =>
                    playAnimal(
                      "Giraffe",
                      "/Sound/cartoon-sound-with-giraffe-voice.mp3"
                    )
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\snake.jpg"
                  alt="snake-image"
                  className="snake"
                  onMouseEnter={() =>
                    playAnimal("Snake", "/Sound/vicious-hissing-snakes.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\goat.jpg"
                  alt="goat-image"
                  className="goat"
                  onMouseEnter={() =>
                    playAnimal("Goat", "/Sound/goat-baa-390303.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\zebra.jpg"
                  alt="zebra-image"
                  className="zebra"
                  onMouseEnter={() =>
                    playAnimal(
                      "Zebra",
                      "/Sound/the-sound-of-a-zebra-that-makes-a-sound-with-its-mouth.mp3"
                    )
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\hippo.jpg"
                  alt="hippo-image"
                  className="hippo"
                  onMouseEnter={() =>
                    playAnimal("Hippo", "/Sound/hippo-grunt-sound.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\tiger.jpg"
                  alt="tiger-image"
                  className="tiger"
                  onMouseEnter={() =>
                    playAnimal("Tiger", "/Sound/tiger-growl.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\sheep.jpg"
                  alt="sheep-image"
                  className="sheep"
                  onMouseEnter={() =>
                    playAnimal("Sheep", "/Sound/sheep-352668.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\donkey.jpg"
                  alt="donkey-image"
                  className="donkey"
                  onMouseEnter={() =>
                    playAnimal("Donkey", "/Sound/donkey-1-352697.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\rooster.jpg"
                  alt="rooster-image"
                  className="rooster"
                  onMouseEnter={() =>
                    playAnimal("Rooster", "/Sound/rooster-crowing-364473.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <div className="animal-card">
                <img
                  src="assets\wolf.jpg"
                  alt="wolf-image"
                  className="wolf"
                  onMouseEnter={() =>
                    playAnimal("Wolf", "/Sound/wolf-howling-335492.mp3")
                  }
                  onMouseLeave={stopAnimal}
                />
              </div>

              <Link to="/Englishbooks" className="back-btn-animals">
                BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animals;
