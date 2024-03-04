



"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo72x72.png";

function PwaModal() {
  const [installPrompt, setInstallPrompt] = useState();
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    const handleBeforeInstallPrompt = (e) => {
      // Предотвратить немедленный запуск диалога установки
      e.preventDefault();
      // Сохранить событие, чтобы запустить его позже
      setInstallPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Пользователь принял предложение установки");
        } else {
          console.log("Пользователь отклонил предложение установки");
        }
        setInstallPrompt(null);
      });
    }
  };

  const close = () => {
    setInstallPrompt(null);
  };

  return (
    <div>
      {installPrompt && !isIOS && (
        <div className="olling">
          <div className="flex items-center justify-between">
            <div className="mr-2">
              <p>Install our application on your device</p>
              <button onClick={handleInstallClick} className="btn btn-primary">
                Install App
              </button>
            </div>
            <Image width={72} height={72} src={logo} alt="Logo" />
          </div>
          <button onClick={close} className="close-btn">
            {/* SVG or Close Icon here */}
          </button>
        </div>
      )}
      {isIOS && (
        <div className="olling">
          <div className="mr-2">

          <p>To install the app, tap the share icon and then <strong>&#39;Add to Home Screen&#39;</strong>.</p>
          <button onClick={close} className="closing">
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.44487 24L24 8.02771M8 8L23.5551 23.9723"
                stroke="#fff"
                stroke-width="2.8"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>
          </div>
          <button onClick={close} className="btn btn-primary">OK</button>
          <Image width={72} height={72} src={logo} alt={`${logo}`} />
        </div>
      )}
    </div>
  );
}

export default PwaModal;