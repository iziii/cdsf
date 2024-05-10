function flipCoin() {
    var coinInner = document.getElementById('coin-inner');
    coinInner.style.animation = 'none';

    // Получаем ссылки на изображения
    var frontImage = document.getElementById('front-image');
    var backImage = document.getElementById('back-image');

    // Генерируем случайное число (0 или 1)
    var random = Math.random();
    var sideToShow = random < 0.5 ? 'front' : 'back'; // Выбираем сторону монеты

    // Меняем изображение в зависимости от выбранной стороны
    if (sideToShow === 'front') {
        frontImage.src = 'euro.png';
        backImage.src = 'dollar.png';
        setTimeout(() => {
            document.getElementById('result-text').textContent = 'ОРЕЛ';
        }, 1500); // Задержка в 1.5 секунды
    } else {
        frontImage.src = 'dollar.png';
        backImage.src = 'euro.png';
        setTimeout(() => {
            document.getElementById('result-text').textContent = 'РЕШКА';
        }, 1500); // Задержка в 1.5 секунды
    }

    // Задержка перед установкой анимации (чтобы сбросить предыдущую)
    setTimeout(() => {
        coinInner.style.animation = 'flip 2s ease-out forwards';
    }, 10);
}