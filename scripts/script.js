let div1 = `<div class="header">
    <div class="title"><a href="main.html">Ритуальні послуги</a></div>
    <div class="menu">
        <div class="1"><a href="transport.html">Транспортні послуги</a></div>
        <div class="vLine"></div>
        <div class="2"><a href="cross.html">Виготовлення хрестів</a></div>
        <div class="vLine"></div>
        <div class="3"><a href="coffin.html">Труни</a></div>
        <div class="vLine"></div>
        <div class="4"><a href="wreaths.html">Вінки</a></div>
        <div class="vLine"></div>
        <div class="5"><a href="photoPortrait.html">Фотопортрет</a></div>
    </div>
    <div class="burger">
        <div>
            <button class="burger-btn" id="burger-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav class="burger-menu" id="burger-menu">
            <ul>
                <li><a href="transport.html">Транспортні послуги</a></li>
                <li><a href="cross.html">Виготовлення хрестів</a></li>
                <li><a href="coffin.html">Труни</a></li>
                <li><a href="wreaths.html">Вінки</a></li>
                <li><a href="photoPortrait.html">Фотопортрет</a></li>
            </ul>
        </nav>
    </div>
    </div>`
let div2 = `<a href="tel:+380674722268" class="icon call"><b>ЗАТЕЛЕФОНУВАТИ</b></a>
    <div class="footer">
        <div class="geoText"><a
                href="https://www.google.com/maps?q=49.463569,32.022870&ll=49.463569,32.022870&z=16">18000, Черкаси,
                вул. Свято-Макаріївська 123 вул. Дахнівська 32/2</a></div>
        <div class="info">
            <div class="socials">
                <a class="icon instagram" target="_blank"
                    href="https://www.instagram.com/ritual_ck?igsh=bzlrczJjOW13eTA3">&#xf16d instagram</a>
            </div>
            <div class="phones">
                <a href="tel:+380674722268">+380 67 472 2268</a>
                <a href="tel:+380472382028">+380 47 238 2028</a>
            </div>
        </div>
    </div>`

document.querySelector("body").innerHTML = div1 + document.querySelector("body").innerHTML + div2

const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});

