
import React, { useRef, useState } from "react";
import "./Flip.css";
import { Icon } from "@iconify/react";

export default function Flip() {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState(null);
  const [landingResult, setLandingResult] = useState(null);
  const [history, setHistory] = useState([]);

  const flipSound = useRef(null);

  const flipCoin = () => {
    if (flipping) return;

    if (flipSound.current) {
      flipSound.current.currentTime = 0;

      flipSound.current.play().catch(() => {
        // Prevents console errors if the browser blocks audio.
      });
    }

    const nextResult = Math.random() < 0.6 ? "buy" : "save";

    setResult(null);
    setLandingResult(nextResult);
    setFlipping(true);

    setTimeout(() => {
      setResult(nextResult);
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

              <span>Bilhin Mo Na!</span>
            </span>
          )}

          {!flipping && result === "save" && (
            <span className="save">

              <span>Tipid Muna!</span>
            </span>
          )}

          {!flipping && !result && (
            <span>Click the coin to begin.</span>
          )}
        </div>

        <button
          type="button"
          className="flip-action"
          onClick={flipCoin}
          disabled={flipping}
        >
          {flipping ? "FLIPPING..." : "FLIP COIN"}
        </button>

        <div className="flip-history">
          <p className="flip-history-title">LAST 5 FLIPS</p>

          {history.length === 0 ? (
            <p className="flip-history-empty">No flips yet.</p>
          ) : (
            <div className="flip-history-list">
              {history.map((flip, index) => (
                <span
                  key={`${flip}-${index}`}
                  className={`flip-history-item ${flip}`}
                  title={
                    flip === "buy"
                      ? "Bilhin Mo Na"
                      : "Tipid Muna"
                  }
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
          )}
        </div>
      </section>
    </main>
  );
}
