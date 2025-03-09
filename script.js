body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #ffffff;
    text-align: center;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: auto;
}

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.main-title-container {
    width: 100%;
    text-align: center;
}

.main-title {
    font-size: 2em;
    color: #ffcc00;
    transition: transform 0.3s ease;
}

.description {
    font-size: 1.2em;
    margin-bottom: 1.5em;
    transition: transform 0.3s ease;
}

.categories {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

.category {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #ff5733;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s ease;
}

.category:hover {
    background-color: #c70039;
}

.video-container {
    margin-top: 20px;
}

.video h2 {
    margin-bottom: 10px;
}

.divider {
    border: none;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 20px 0;
}

.social-links {
    margin-top: 30px;
}

.social-links a {
    color: #00bcd4;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s, transform 0.3s ease;
}

.social-links a:hover {
    color: #00acc1;
}

.hoverable:hover {
    transform: scale(1.1);
}

/* Фіксований блок партнерів */
.partners-section {
    position: fixed;
    right: 20px;
    top: 100px;
    width: 220px;
    padding: 15px;
    background-color: #1e1e1e;
    border: 3px solid #ffcc00;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
}

.partners-section h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #ffcc00;
}

/* Партнер з ефектом переливаючогося контуру */
.partner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 15px;
    z-index: 1;
    transition: transform 0.3s ease;
}

.partner p {
    margin: 0;
    font-size: 1.1em;
    color: #00bcd4;
}

/* Псевдоелемент для анімованого контуру */
.partner::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
    background-size: 400%;
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.partner:hover::before {
    opacity: 1;
    animation: shimmer 2s linear infinite;
}

@keyframes shimmer {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 400% 50%;
    }
}

.partner:hover p {
    color: #00acc1;
}

/* Плавна поява елементів */
.fade-in {
    animation: fadeIn 1s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
