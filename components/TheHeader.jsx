"use client";
import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/components/i18n";
import { Navigation } from "./Navigation";
import {
  Gift,
  PokerChip,
  Wallet,
  Notepad,
  Flag,
  GameController,
} from "phosphor-react";
import Image from "next/image";
import Img from "@/public/logo3.png";
import SearchComponent from "@/components/SearchComponent";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { geolocation } from "@vercel/edge";
import Smokace from "@/public/smokace.png";
import Winlegends from "@/public/winlegends.png";
import Windetta from "@/public/windeta.png";
import Spinsbro from "@/public/SpinsBro_500x250.png";
import Jupi from "@/public/jupicasino1_500x250.png";
import GoogleTranslate from "@/components/GoogleTranslate";

import wallet from "@/public/wallet.svg";
import dollar from "@/public/dollar.svg";

const navItems = [
  {
    icon: <PokerChip className="mr-1" size={20} />,
    class: "sub-casinos",
    label: "Casinos ▼",
    href: "/casinos",
    subMenu: [
      { label: "Crypto Casinos", href: "/crypto-casinos" },
      {
        label: "Fast Withdrawal Casinos",
        href: "/fast-withdrawal-casinos",
      },
      { label: "Live Casinos", href: "/live-casinos" },
      { label: "Newest Casinos", href: "/newest-casinos" },
      { label: "Top Certified Casinos", href: "/top-certified-casinos" },
    ],
  },
  {
    icon: <Gift className="mr-1" size={20} />,
    class: "sub-bonuses",
    label: "Bonuses ▼",
    href: "/bonuses",
    subMenu: [
      { label: "No Deposit Bonuses", href: "/no-deposit-bonuses" },
      { label: "Exclusive Bonuses", href: "/exclusive-bonuses" },
      { label: "Deposit Bonuses", href: "/deposit-bonuses" },
      { label: "Welcome Bonuses", href: "/welcome-bonuses" },
      { label: "No Wagering Bonuses", href: "/no-wagering-bonuses" },
    ],
  },

  {
    icon: <Wallet className="mr-1" size={20} />,
    class: "sub-payments",
    label: "All Payments ▼",
    href: "/payments",
    subMenu: [
      { label: "Apple Pay", href: "/payments/apple-pay" },
      { label: "Bitcoin", href: "/payments/bitcoin-casino" },
      { label: "Ecopayz", href: "/payments/ecopayz" },
      { label: "Maestro", href: "/payments/maestro" },
      { label: "Mastercard", href: "/payments/mastercard" },
      { label: "Mobile Payments", href: "/payments/mobile-payments" },
      { label: "Muchbetter", href: "/payments/muchbetter" },
      { label: "Neosurf", href: "/payments/neosurf" },
      { label: "Neteller", href: "/payments/neteller-casino" },
      { label: "PayPal", href: "/payments/paypal-casino" },
      { label: "Paysafecard", href: "/payments/paysafecard-casino" },
      { label: "Pix", href: "/payments/pix" },
      { label: "Skrill", href: "/payments/skrill-casino" },
      { label: "Trustly", href: "/payments/trustly" },
      { label: "Visa", href: "/payments/visa" },
    ],
  },
  {
    icon: <Notepad className="mr-1" size={20} />,
    label: "Guides",
    href: "/guides",
  },
  {
    icon: <GameController className="mr-1" size={20} />,
    class: "sub-providers",
    label: "Game Providers ▼",
    href: "/game-providers",
    subMenu: [
      { label: "Amatic", href: "/game-providers/amatic" },
      { label: "BGaming", href: "/game-providers/bgaming" },
      { label: "Boongo", href: "/game-providers/boongo" },
      { label: "Amusnet", href: "/game-providers/amusnet" },
      { label: "Evolution", href: "/game-providers/evolution" },
      { label: "Mascot", href: "/game-providers/mascot" },
      { label: "NeTent", href: "/game-providers/netent" },
      { label: "Nolimit city", href: "/game-providers/nolimit-city" },
      { label: "Play’n go", href: "/game-providers/playn-go" },
      { label: "Pragmatic Play", href: "/game-providers/pragmatic-play" },
      { label: "Push Gaming", href: "/game-providers/push-gaming" },
      { label: "Spinomenal", href: "/game-providers/spinomenal" },
    ],
  },
  {
    icon: <Flag className="mr-1" size={20} />,
    class: "sub-countries",
    label: "Casinos by Country ▼",
    href: "/by-country",
    subMenu: [
      { label: "Australian Casino", href: "/by-country/australia" },
      { label: "Canadian Casino", href: "/by-country/canada" },
      { label: "Finnish Casino", href: "/by-country/finland" },
      { label: "German Casino", href: "/by-country/germany" },
      { label: "New Zealand Casino", href: "/by-country/new-zealand" },
      { label: "Norwegian Casino", href: "/by-country/norway" },
      { label: "Polish Casino", href: "/by-country/poland" },
    ],
  },
];

const TheHeader = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Step 2

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Step 3
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /////////////////////////////////
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );

  const [keywordValue, setKeywordValue] = useState(null);
  const idUserParam = urlParams.get("keyword");
    console.log("IDUSERPARAM", idUserParam);
    const userData = keywordValue !== null ? keywordValue : idUserParam;
    console.log("USERDATA", userData)
  useEffect(() => {
    const api = "https://pickbonus.myawardwallet.com/api";
    const fetchUsers = async (keywordValue) => {
      try {
        const res = await fetch(`${api}/user/read_one.php?id=${keywordValue}`);
        if (res.ok) {
          const users = await res.json();
          setUser(users);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  
    if (typeof window !== "undefined") {
      const keyword = localStorage.getItem("savedUrl");
      if (keyword) {
        const pairs = keyword.split("&");
        const keywordPair = pairs.find((pair) => pair.startsWith("?keyword="));
        if (keywordPair) {
          const keywordValue2 = keywordPair.split("=")[1];
          setKeywordValue(userData);
          // setUser(null); // Установка значения null перед загрузкой новых данных
          setIsLoading(true); // Установка isLoading в true перед загрузкой новых данных
  
          fetchUsers(keywordValue2); // Вызываем функцию через 2 секунды
         
      
        }
      }
    }
  }, []);
  

  ////////////////////////////////////
  console.log("USER", user);

  return (
    <header className="header">
      <div className="header__bg">
        <div className="header__container ">
          <div className="logo">
            <Link href="/">
              <Image src={Img} alt="logo" width={130} loading="lazy" />
            </Link>
          </div>
          {isLoading ? (
            // Если данные загружаются, отображаем индикатор загрузки или другое сообщение
            <div></div>
          ) : (
            // Если данные загружены, отображаем контент
            user && (
              <div className="usernone flex ml-auto">
                <div className="flex tickets items-end">
                  <Link
                    target="_blank"
                    className="user user-wheel flex items-center"
                    href={`https://pickbonus.myawardwallet.com/?keyword=${keywordValue}#/fortunewheel`}
                  >
                    <Image
                      className="mr-1"
                      src={dollar}
                      alt={dollar}
                      width={26}
                      height={26}
                      loading="lazy"
                    />
                    Wheel of Fortune <span>{user.tickets}</span>
                  </Link>
                </div>

                <div className="option flex items-end">
                  <Link
                    target="_blank"
                    className="flex items-center"
                    href={`https://pickbonus.myawardwallet.com/?keyword=${keywordValue}#/withdrawal`}
                  >
                    <Image
                      src={wallet}
                      alt={wallet}
                      width={25}
                      height={25}
                      loading="lazy"
                      className="mr-1"
                    />
                    Withdraw
                  </Link>
                </div>
              </div>
            )
          )}
          <div className="search-container flex items-end justify-center ml-auto">
            <SearchComponent />
          </div>
          {/* {anotherState && (
              <div className="tickets">
                <Link href={`/fortunewheel/${newUrl}`}>
                  <Image
                    src={dollar}
                    alt={dollar}
                    width={26}
                    height={26}
                    loading="lazy"
                  />
                  {t("Wheel of Fortune")} <span>{anotherState.tickets}</span>
                </Link>
              </div>
            )} */}

          <I18nextProvider i18n={i18n}>
            <LanguageSwitcher />{" "}
          </I18nextProvider>
          <GoogleTranslate />

          <div className="mobile-none">
            <button
              className={`burger-icon ${isMobileMenuOpen ? "open" : ""}`}
              onClick={toggleMobileMenu}
            >
              <div className="burger-lines">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
              </div>
            </button>
            <div className="menu-mobile">
              <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                {/* Mobile menu content */}
                <GoogleTranslate />
                <div className="flex flex-col items-start useryes">
                  {user && (
                    <div className="flex tickets items-end">
                      <Link
                        target="_blank"
                        className="user user-wheel flex items-center"
                        href={`https://pickbonus.myawardwallet.com/?keyword=${keywordValue}#/fortunewheel`}
                      >
                        <Image
                          className="mr-1"
                          src={dollar}
                          alt={dollar}
                          width={26}
                          height={26}
                          loading="lazy"
                        />
                        Wheel of Fortune <span>{user.tickets}</span>
                      </Link>
                    </div>
                  )}
                  {user && (
                    <div className="option flex items-end">
                      <Link
                        target="_blank"
                        className="flex items-center"
                        href={`https://pickbonus.myawardwallet.com/?keyword=${keywordValue}#/withdrawal`}
                      >
                        <Image
                          src={wallet}
                          alt={wallet}
                          width={25}
                          height={25}
                          loading="lazy"
                          className="mr-1"
                        />
                        Withdraw
                      </Link>
                    </div>
                  )}
                </div>
                <Navigation
                  navLinks={navItems.map((item) => ({
                    ...item,
                    label: t(item.label),
                  }))}
                  onLinkClick={closeMobileMenu}
                />
                {/* <div className="navigation-item">
                  <Link href={`/bonuses/7089`} onClick={closeMobileMenu}>
                    <Image
                      className="flex flex-start"
                      src={Smokace}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div> */}

                <div className="navigation-item p-0">
                  <Link href={`/bonuses/6883`} onClick={closeMobileMenu}>
                    <Image
                      className="flex flex-start"
                      src={Winlegends}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="navigation-item p-0">
                  <Link href={`/bonuses/7383`} onClick={closeMobileMenu}>
                    <Image
                      className="flex flex-start"
                      src={Windetta}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <I18nextProvider i18n={i18n}>
                  <LanguageSwitcher />{" "}
                </I18nextProvider>
                {/* <div className="navigation-item p-0">
                  <Link href={`/bonuses/6657`} onClick={closeMobileMenu}>
                    <Image
                      className="flex flex-start"
                      src={Spinsbro}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div> */}
                {/* <div className="navigation-item p-0">
                  <Link href={`/bonuses/5011`} onClick={closeMobileMenu}>
                    <Image
                     className="flex flex-start"
                      src={Jupi}
                      alt="logo"
                      width={110}
                      loading="lazy"
                    />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__container menu-desctop">
        <Navigation
          navLinks={navItems.map((item) => ({
            ...item,
            label: t(item.label), // Используйте функцию перевода для текста пунктов меню
          }))}
        />
        {/* <div className="change-lng"> </div> */}
      </div>
      <div className="header-brands">
        <div className="header__container flex justify-center">
          {/* <div className="basis-[17%]">
            <Link href={`/bonuses/7089`}>
              <Image
                className="grayscale"
                src={Smokace}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div> */}
          <div className="basis-[17%]">
            <Link href={`/bonuses/6883`}>
              <Image
                className="grayscale"
                src={Winlegends}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="basis-[17%]">
            <Link href={`/bonuses/7383`}>
              <Image
                className="grayscale"
                src={Windetta}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div>
          {/* <div className="basis-[17%]">
            <Link href={`/bonuses/6657`}>
              <Image
                className="grayscale"
                src={Spinsbro}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div> */}
          {/* <div className="basis-[17%]">
            <Link href={`/bonuses/5011`}>
              <Image
                className="grayscale"
                src={Jupi}
                alt="logo"
                width={85}
                loading="lazy"
              />
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export { TheHeader };