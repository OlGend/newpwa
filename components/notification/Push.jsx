import React, { useEffect } from 'react';
import img1 from "@/public/MTC.png"

const games = [
    // Предположим, у вас есть массив объектов игр
    { name: "Game 1", author: "Author 1", slug: "MTC" },
    { name: "Game 2", author: "Author 2", slug: "MTC" },
    // Добавьте другие игры по аналогии
];

const Push = () => {
    useEffect(() => {
        const requestPermission = async () => {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                randomNotification();
            }
        };

        requestPermission();
    }, []);

    const randomNotification = () => {
        const randomItem = Math.floor(Math.random() * games.length);
        const notifTitle = games[randomItem].name;
        const notifBody = `Created by ${games[randomItem].author}.`;
        const notifImg = {img1}; // Убедитесь, что путь к изображению правильный
        const options = {
            body: notifBody,
            icon: notifImg,
        };
        new Notification(notifTitle, options);
        setTimeout(randomNotification, 30000); // Запуск следующего уведомления через 30 секунд
    };

    return (
        <div>
            {/* Здесь может быть контент вашего компонента */}
            <p>Check your notifications for games info!</p>
        </div>
    );
};

export default Push;
