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
        <div className="modal">
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
        <div className="modal">
          <p>To install the app, tap the share icon and then <strong>'Add to Home Screen'</strong>.</p>
          <button onClick={close} className="btn btn-primary">OK</button>
        </div>
      )}
    </div>
  );
}

export default PwaModal;
