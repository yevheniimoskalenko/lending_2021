<template>
  <section class="container">
    <div class="wrapper">
      <div class="footer">
        <div class="footer__content">
          <h2 class="title">
            Hey! Follow us on social media so you don’t miss any offer.
          </h2>
        </div>
        <div class="footer__social">
          <div class="icon-f"></div>
          <img :src="require('../assets/Saly-6.png')" alt="sweava" />
          <div class="social__list">
            <div class="social__item">
              <a href="#">
                <svg
                  width="32"
                  height="27"
                  viewBox="0 0 32 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.6058 12.2048C31.748 10.8771 31.2424 9.68272 30.1901 8.86061C28.3568 7.52411 19.687 4.01146 19.687 4.01146C19.687 4.01146 11.1872 0.567701 8.77064 0.18231C7.44292 0.0401749 6.24855 0.545773 5.42643 1.59799C4.19106 3.67019 2.40031 8.09009 2.40031 8.09009C2.40031 8.09009 0.609553 12.51 0.224162 14.9266C0.0820264 16.2543 0.58762 17.4486 1.63984 18.2708C3.47317 19.6072 12.143 23.1199 12.143 23.1199C12.143 23.1199 20.6427 26.5636 23.0593 26.949C24.387 27.0912 25.5814 26.5856 26.4036 25.5334C27.8089 23.53 29.5997 19.1101 29.5997 19.1101C29.5997 19.1101 31.3904 14.6902 31.6058 12.2048ZM11.627 16.578L14.933 8.4182L20.4199 15.3909L11.627 16.578Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1472 16.2547C26.9373 9.57388 22.9358 2.64306 16.2549 0.852931C9.57407 -0.937201 2.64326 3.06431 0.853123 9.74517C-0.77427 15.8187 2.28643 22.0092 7.81216 24.4662L10.0905 15.9633L7.05375 15.1496L7.9895 11.6574L11.0263 12.4711L11.7586 9.73798C12.5723 6.70122 14.8419 5.51922 17.575 6.25155C18.9415 6.61771 20.2267 7.28755 20.2267 7.28755L19.413 10.3243L17.8946 9.91746C16.3762 9.51061 15.6766 10.2996 15.4325 11.2106L14.8222 13.4882L18.1626 14.3832L16.6195 17.7128L13.7346 16.9398L11.4156 25.5945C17.7332 26.3109 23.5198 22.3283 25.1472 16.2547Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="33"
                  height="24"
                  viewBox="0 0 33 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.1617 6.17149C31.0017 6.51638 29.8999 6.51224 28.6194 6.47831C29.9871 5.98868 31.0555 5.09045 31.6456 3.75385C30.4566 4.27327 29.1469 4.41386 27.6585 4.52468C26.7602 3.2989 25.2674 2.33283 23.6583 2.06483C19.9038 1.4395 16.4618 4.45344 16.7744 8.09271C11.9762 7.1142 8.06322 4.13079 5.60517 0.134196C3.56009 2.48399 3.90176 5.94873 6.11411 8.11081C5.22018 7.96192 4.38437 7.464 3.54857 6.96607C3.11257 9.58386 4.6723 12.3547 7.23784 13.4994C6.31484 13.525 5.39183 13.5507 4.52697 13.2273C4.86425 15.6151 6.71903 17.7176 9.40084 18.1643C6.99379 19.3777 3.63029 19.7143 0.649038 18.859C3.06925 20.8763 5.93423 22.4297 9.1524 22.9657C20.0584 24.7821 27.6196 16.894 28.6281 8.6321C29.9959 8.14246 31.243 7.27401 32.1617 6.17149Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="icon-s"></div>
        </div>
      </div>
      <div class="copyright">
        <span>
          Copywright 2021 website.com
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
}
.footer__social {
  position: relative;
  flex-basis: 50%;
}
.icon-f {
  width: 70px;
  height: 157px;
  background-image: url("../assets/Saly-233.png");
  position: absolute;
  bottom: 52px;
  left: 72px;
  transform: rotate(-64deg);
}
.icon-s {
  width: 40px;
  height: 136px;
  background-image: url("../assets/Saly-243.png");
  position: absolute;
  top: 52px;
  right: 72px;
}
.footer__content {
  flex-basis: 50%;
  margin-top: 70px;
}
.copyright {
  text-align: center;
}
.social__list {
  position: absolute;
  top: 150px;
  left: 45px;
  transform: skew(-20deg, 20deg);
  .social__item {
    a {
      padding: 15px;
    }
    path {
      transition: 0.2s;
    }
    path:hover {
      fill: rgb(236, 232, 232);
      transition: 0.2s;
    }
  }
}
</style>
