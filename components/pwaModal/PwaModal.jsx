// pages/_app.js или любой другой компонент, который постоянно присутствует в вашем приложении
"use client";
import { useEffect, useState } from 'react';

function PwaModal() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Предотвратить немедленный запуск диалога установки
      e.preventDefault();
      // Сохранить событие, чтобы запустить его позже
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (installPrompt) {
      // Показать диалог установки
      installPrompt.prompt();
      // Определить, принял ли пользователь предложение установки
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Пользователь принял предложение установки');
        } else {
          console.log('Пользователь отклонил предложение установки');
        }
        // Обнулить сохраненное событие, так как оно не может быть использовано повторно
        setInstallPrompt(null);
      });
    }
  };

  return (
    <div>
      {installPrompt && (
        <div className='olling'>
          {/* Модальное окно или компонент предложения установки */}
          <button onClick={handleInstallClick}>Установить приложение</button>
        </div>
      )}
      {/* <Component {...pageProps} /> */}
    </div>
  );
}

export default PwaModal;
