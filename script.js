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
    text-align: center;
    transition: transform 0.3s ease;
}

.description {
    font-size: 1.2em;
    margin-bottom: 1.5em;
    text-align: center;
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
    text-align: center;
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

/* Секція партнерів - фіксований блок праворуч */
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

.partner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

.partner p {
    margin: 0;
    font-size: 1.1em;
    color: #00bcd4;
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
