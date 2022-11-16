import React, { useState } from 'react';
import { useEffect } from 'react';
import './index.scss';

export default function NavBar() {
  const [colorChange, setColorChange] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setOpenMenu(!openMenu);
  };

  console.log(openMenu);
  console.log(handleToggle);

  return (
    <div
      className={`nav-bar app-container ${colorChange ? 'colorChange' : ''}`}
    >
      <nav className="app-container__section">
        <a href="/">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="158"
            height="35"
            viewBox="0 0 158 35"
            fill="none"
            className="logo"
          >
            <g id="logo">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M93.312 29.796C95.4701 29.796 96.7735 29.4956 98.4852 28.4425C99.6544 27.7232 100.561 26.7425 101.317 25.6323L98.2735 23.1602C95.4605 28.3896 88.5489 25.8895 88.5489 20.4931C88.5489 12.078 97.3294 12.5062 98.6045 17.8907H90.4013V21.2736H102.905L102.971 19.7123C102.971 17.6823 102.118 15.134 100.87 13.6465C100.676 13.4156 100.522 13.2323 100.335 13.002C99.4488 11.9137 97.3423 10.7272 95.888 10.4135C94.3811 10.0888 93.1442 10.0543 91.6571 10.4085C89.7458 10.8638 88.5242 11.7162 87.1755 13.0271C86.4181 13.7639 85.7518 14.9164 85.3255 15.8918C84.8724 16.9292 84.7326 17.5531 84.5675 18.6594C84.3405 20.1841 84.5681 22.364 85.127 23.7273C86.0329 25.9353 87.3721 27.6767 89.4966 28.7985C90.4554 29.3043 91.8709 29.7954 93.312 29.7954V29.796Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M143.493 19.9722C143.493 13.0307 151.345 11.9643 153.425 17.6217C154.263 19.9013 153.788 22.6834 152.505 24.2161C150.929 26.0992 148.563 26.5817 146.446 25.5247C145.56 25.0824 144.754 24.2732 144.307 23.3995C143.849 22.5004 143.492 21.292 143.492 19.9722H143.493ZM139.193 35H143.625V28.3645C144.849 29.0014 146.027 29.7473 147.727 29.7958C148.588 29.8203 149.355 29.8541 150.269 29.6941C151.052 29.5572 151.766 29.3095 152.358 29.0153C154.192 28.1046 155.67 26.8351 156.614 25.0041C156.927 24.398 157.248 23.751 157.437 23.0814C158.368 19.8004 157.761 16.5467 156.221 14.2864C155.817 13.693 155.488 13.2593 154.987 12.7673C154.583 12.372 153.945 11.8369 153.454 11.5421C151.555 10.402 150.381 10.214 148.123 10.214C146.811 10.214 145.182 10.774 144.115 11.4114C143.916 11.53 143.825 11.6063 143.625 11.7103V10.214H139.192V34.9997L139.193 35Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M53.653 26.0218C50.4903 26.0218 48.5589 23.2896 48.5589 20.2969C48.5589 18.4334 48.9064 17.0837 49.8526 15.8443C50.478 15.0253 51.9082 13.9867 53.322 13.9867H54.0496C55.5706 13.9867 56.8256 14.9313 57.5372 15.7612C57.9314 16.221 58.2624 16.8915 58.4729 17.4435C59.3048 19.6261 58.9161 22.3263 57.3959 24.2381C56.9723 24.7708 56.481 25.1209 55.8752 25.4748C55.3974 25.7536 54.3818 26.0215 53.6527 26.0215L53.653 26.0218ZM44.2588 29.86H48.6912V28.2986C50.9344 29.7758 53.4425 30.1563 56.128 29.4966C56.4645 29.4139 56.7116 29.3234 56.9708 29.2196C57.2086 29.125 57.5526 28.9952 57.7528 28.8826C59.0327 28.1626 58.7976 28.2407 59.7294 27.5083C60.6614 26.776 61.6299 25.2533 62.0929 24.173C63.2135 21.5579 63.1924 18.5573 62.1121 15.9469C61.23 13.8146 59.8112 12.3262 57.8178 11.1924C55.3914 9.81195 51.5475 9.87403 49.1406 11.3715C48.9615 11.4827 48.8773 11.5481 48.6912 11.645V5.00955H44.2588V29.8603V29.86Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M73.3022 29.796C75.4604 29.796 76.7637 29.4956 78.4754 28.4425C79.6447 27.7232 80.5512 26.7425 81.307 25.6323L78.2637 23.1602C75.4507 28.3896 68.5391 25.8895 68.5391 20.4931C68.5391 12.078 77.3197 12.5062 78.5948 17.8907H70.3915V21.2736H82.8948L82.961 19.7123C82.961 17.6823 82.108 15.134 80.86 13.6465C80.666 13.4156 80.5121 13.2323 80.3248 13.002C79.439 11.9137 77.3326 10.7272 75.8783 10.4135C74.3714 10.0888 73.1344 10.0543 71.6474 10.4085C69.736 10.8638 68.5144 11.7162 67.1657 13.0271C66.4083 13.7639 65.742 14.9164 65.3157 15.8918C64.8626 16.9292 64.7228 17.5531 64.5577 18.6594C64.3307 20.1841 64.5583 22.364 65.1173 23.7273C66.0232 25.9353 67.3623 27.6767 69.4868 28.7985C70.4456 29.3043 71.8611 29.7954 73.3022 29.7954V29.796Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M128.012 13.7933H128.739C130.241 13.7933 131.604 14.8532 132.265 15.7257C134.034 18.0617 134.128 21.8246 132.35 24.0447C131.912 24.5914 131.542 24.9491 130.936 25.3217C129.903 25.9573 129.217 25.9588 128.078 25.9588C125.962 25.9588 124.235 24.0938 123.603 22.2279C122.667 19.4635 123.455 15.8236 125.897 14.4464C126.453 14.1333 127.159 13.7936 128.012 13.7936V13.7933ZM127.946 29.7968C129.263 29.7968 129.487 29.8142 130.805 29.4854C131.324 29.3559 132.096 29.0496 132.498 28.8087C132.759 28.652 132.937 28.5639 133.198 28.3918C134.207 27.7277 134.32 27.5873 135.107 26.7556C137.227 24.5148 138.118 20.8862 137.445 17.5934C137.294 16.8578 137.13 16.4223 136.902 15.7852C136.647 15.0735 136.082 14.1162 135.629 13.5237C135.457 13.2987 135.268 13.0382 135.075 12.833C133.929 11.6173 132.305 10.5198 130.588 10.154C128.444 9.69753 126.526 9.83768 124.572 10.8006C123.725 11.2181 122.446 12.064 121.859 12.8173C120.928 14.0133 120.765 14.0041 120.025 15.6976C119.778 16.2638 119.589 16.7981 119.439 17.4633C119.358 17.8258 119.324 18.0889 119.267 18.4653C119.218 18.7976 119.233 19.2396 119.175 19.611C119.103 20.0625 119.262 21.3586 119.326 21.7489C119.542 23.0557 119.945 24.0923 120.558 25.2217C120.647 25.3861 120.691 25.4334 120.788 25.5809L121.556 26.6477C122.919 28.3732 125.633 29.7968 127.946 29.7968H127.946Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M102.938 13.8574H113.655C113.3 14.3792 112.707 14.9469 112.305 15.4563C112.079 15.7413 111.822 15.9876 111.605 16.2643C110.778 17.3166 109.003 19.1719 108.089 20.2883L103.914 25.0954C103.807 25.206 102.542 26.6086 102.542 26.7381V29.7958H119.345V26.0876H108.231L112.414 21.2888C112.656 21.0215 112.86 20.7347 113.109 20.4766C113.369 20.2093 113.552 19.9302 113.804 19.6635C114.353 19.0838 119.345 13.4103 119.345 13.2066V10.1489H102.938V13.8571V13.8574Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M157.981 27.0617L158 27.0431C157.999 27.0442 157.975 27.0555 157.981 27.0617Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.10435 0C5.0839 0 4.06375 0.000295659 3.0433 0H2.90771C2.00512 0.0014783 1.41883 0.0357762 0.709566 0.762803C0.14853 1.33727 0.00300662 1.98151 0 3.07013V3.12245V30.5106V30.557V32.0755C0.0186411 32.5326 0.0721622 32.9566 0.206258 33.3004C0.472043 33.9801 1.05533 34.5454 1.82683 34.7645C2.67259 35.0046 6.67741 34.8695 7.93869 34.8695C7.93869 23.7341 13.9423 11.4018 26.7271 11.3844C27.2987 11.3832 27.6423 11.45 28.2484 11.45V11.515C27.3621 11.515 25.4601 12.0759 24.6002 12.4162C15.0352 16.2036 11.5773 25.4654 11.5773 34.8695C13.8043 34.8695 16.0319 34.8695 18.2589 34.8695C21.0022 34.8695 23.6916 35.1134 26.0076 34.2924C27.0091 33.9373 28.4565 33.1857 29.1916 32.4794C29.973 31.7293 30.0001 31.8251 30.7911 30.7997C31.5088 29.8693 31.541 29.5606 32.0187 28.6707C32.0723 28.4761 32.1781 28.2517 32.2587 28.0146C33.2283 25.1568 32.7905 21.9329 31.1595 19.5162C30.2445 18.1612 29.6567 17.8522 29.3723 17.435C29.6661 17.0037 30.391 16.5744 31.3579 15.0254C31.4439 14.8876 31.5503 14.6878 31.6183 14.5698C32.001 13.9034 32.4541 12.5773 32.5966 11.8231C32.9018 10.2085 32.8332 8.23293 32.1979 6.6547C31.3468 4.53897 30.2614 2.98764 28.2611 1.67875C26.5106 0.533666 24.9024 0.127725 23.191 0.000295948H18.0698C14.0809 0.000295948 10.0923 0.000295948 6.10375 0.000295948L6.10435 0Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </a>
        <button
          onClick={handleToggle}
          className={`ham-menu ${openMenu ? 'open' : ''}`}
        >
          <span className="line"></span>
        </button>
        <ul className={`nav-bar__links ${openMenu ? 'active' : ''}`}>
          <a href="#howitworks" className="nav-bar__links__link">
            How it works
          </a>
          <a href="#features" className="nav-bar__links__link">
            Features
          </a>
          <a href="#pricing" className="nav-bar__links__link">
            Pricing
          </a>
          <a href="/signinpage" className="nav-bar__links__link">
            Sign In
          </a>
          <a href="/signuppage" className="base-button--outline">
            Try it FREE
          </a>
        </ul>
      </nav>
    </div>
  );
}
