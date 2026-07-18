
import React, { useRef, useState } from "react";
import "./Flip.css";
import { Icon } from "@iconify/react";

export default function Flip() {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState(null);
  const [landingResult, setLandingResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [resultMessage, setResultMessage] = useState("");

  const flipSound = useRef(null);

const buyMessages = [
  "Deserve mo 'yan.",
  "Hindi ka magsisisi.",
  "Sayang ang sale!",
  "Checkout mo na!",
  "Baka mawala.",
  "Habang discounted pa.",
  "Go na 'yan!",
  "Add to cart na!",
  "Hindi na bababa 'yan... siguro.",
  "Sulitin ang discount!",
  "Treat yourself.",
  "One click away.",
  "Budol responsibly.",
  "Minsan lang 'to.",
  "Sulit yan!",
  "Heal your inner child.",
  "Mukhang sign na 'to.",
  "Kunin mo na bago mawala.",
  "Don't overthink it.",
  "Tinatawag na ang pangalan mo.",
  "Worth the hype.",
  "Reward mo na sa sarili mo.",
  "Hindi ka araw-araw gumagastos.",
  "Perfect time to buy.",
  "Okay lang 'yan.",
  "Go bago matapos ang sale.",
  "Mukhang good deal.",
  "Aanhin ang wishlist kung di bibilhin?",
  "Heal your inner demon.",
  "Sakto sa budget.",
  "This is your sign.",
  "Bili now, thank yourself later.",
];

const saveMessages = [
  "Next sale na lang.",
  "Hintay muna.",
  "Ipunin mo muna.",
  "May mas magandang deal pa.",
  "Patience pays off.",
  "Abang ng bigger discount.",
  "Future you will thank you.",
  "Hindi lahat ng sale, sulit.",
  "Wishlist muna.",
  "Hindi naman mawawala agad 'yan.",
  "Pwede pang pag-isipan.",
  "Konting tiis pa.",
  "Relax lang.",
  "Baka bumaba pa.",
  "Hold your wallet.",
  "Save now, buy later.",
  "May next Sale pa naman.",
  "Hintay ng all-time low.",
  "Wallet first, Game later.",
  "Hindi ka nagmamadali.",
  "Resist the budol.",
  "Needs over wants.",
  "Pag-isipan mo muna.",
  "Baka impulse buy lang.",
  "Masarap din mag-ipon.",
  "Wait for a better deal.",
  "Madami ka pang backlogs.",
  "Tapusin mo muna backlog mo.",
  "Hindi naman urgent.",
  "May susunod pang sale.",
  "Your wallet approves.",
  "Stay strong.",
];

  const flipCoin = () => {
    if (flipping) return;

    if (flipSound.current) {
      flipSound.current.currentTime = 0;

      flipSound.current.play().catch(() => {
        // Prevents console errors if the browser blocks audio.
      });
    }

    const nextResult = Math.random() < 0.5 ? "buy" : "save";

    setResult(null);
    setLandingResult(nextResult);
    setFlipping(true);

    setTimeout(() => {
setResult(nextResult);

const messages =
  nextResult === "buy" ? buyMessages : saveMessages;

setResultMessage(
  messages[Math.floor(Math.random() * messages.length)]
);

setFlipping(false);

      setHistory((previousHistory) => [
        nextResult,
        ...previousHistory.slice(0, 4),
      ]);
    }, 1800);
  };

  const coinClassName = [
    "coin-button",
    flipping ? "is-flipping" : "",
    landingResult === "buy" ? "land-buy" : "",
    landingResult === "save" ? "land-save" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className="flip-page">
      <section className="flip-card">
        <p className="flip-eyebrow">May Sale Ba?</p>

        <h1>Coin Flip</h1>

        <audio
          ref={flipSound}
          src={`${process.env.PUBLIC_URL}/sounds/coin_sound.mp3`}
          preload="auto"
        />

        <button
          type="button"
          className={coinClassName}
          onClick={flipCoin}
          disabled={flipping}
          aria-label="Flip the coin"
        >
          <span className="coin">
            <span className="coin-face coin-heads">
              <Icon
                icon="tabler:shopping-bag-plus"
                className="coin-icon"
              />
            </span>

            <span className="coin-face coin-tails">
              <Icon
                icon="material-symbols:savings-outline-rounded"
                className="coin-icon"
              />
            </span>
          </span>
        </button>

        <div className="flip-result" aria-live="polite">
          {flipping && <span className="flipping">Flipping...</span>}

{!flipping && result === "buy" && (
  <span className="buy">
    <span>
      Bilhin Mo Na!
      <br />
      <small>{resultMessage}</small>
    </span>
  </span>
)}

{!flipping && result === "save" && (
  <span className="save">
    <span>
      Tipid Muna!
      <br />
      <small>{resultMessage}</small>
    </span>
  </span>
)}
        </div>

        <button
          type="button"
          className="flip-action"
          onClick={flipCoin}
          disabled={flipping}
        >
          {flipping ? "FLIPPING..." : "FLIP"}
        </button>

<div className="flip-history">
  <p className="flip-history-title">LAST 5 FLIPS</p>

  {history.length === 0 ? (
    <p className="flip-history-empty">No flips yet.</p>
  ) : (
    <>
      <div className="flip-history-list">
        {history.map((flip, index) => (
          <span
            key={`${flip}-${index}`}
            className={`flip-history-item ${flip}`}
            title={flip === "buy" ? "Bilhin Mo Na" : "Tipid Muna"}
          >
            <Icon
              icon={
                flip === "buy"
                  ? "tabler:shopping-bag-plus"
                  : "material-symbols:savings-outline-rounded"
              }
            />
          </span>
        ))}
      </div>

      <button
        type="button"
        className="flip-history-reset"
        onClick={() => setHistory([])}
      >
        RESET
      </button>
    </>
  )}
</div>
      </section>
    </main>
  );
}
