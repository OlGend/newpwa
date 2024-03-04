"use client"
import React, { useState, useEffect } from 'react';

const NotificationComponent = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        // Проверяем, поддерживает ли браузер уведомления и service workers
        setIsSupported("Notification" in window && "serviceWorker" in navigator);

        if (isSupported) {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    console.log("Разрешение на отправку уведомлений получено.");
                    setIsSubscribed(true);
                }
            });
        }
    }, [isSupported]);

    const subscribeToNotifications = () => {
        if (isSupported && !isSubscribed) {
            navigator.serviceWorker.ready.then(registration => {
                registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: "<URL-безопасный base64-кодированный VAPID-ключ>"
                }).then(subscription => {
                    console.log(subscription);
                    setIsSubscribed(true);
                    // Отправьте подписку на сервер
                }).catch(error => {
                    console.error("Ошибка подписки", error);
                });
            });
        }
    };

    return (
        <div>
            {isSupported && !isSubscribed && (
                <button onClick={subscribeToNotifications}>
                    Подписаться на уведомления
                </button>
            )}
            {isSubscribed && <p>Вы подписаны на уведомления</p>}
            {!isSupported && <p>Уведомления не поддерживаются вашим браузером.</p>}
        </div>
    );
};

export default NotificationComponent;
