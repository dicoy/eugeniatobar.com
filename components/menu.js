import React, { useState, useEffect, useRef } from 'react';

const Menu = ({}) => {
  const prevScrollY = useRef(0);
  const [atTheTop, setAtTheTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setAtTheTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [atTheTop]);
return (<header id="mainNav" className={
  `z-max cf fixed w-100 ph1 pv3 pv4-ns ph2-m ph2-l b bg-animate p-animate bb b--black-10 ${
    atTheTop > 10 ? 'affix': ''
  }`
}>
  <div className="w-80 center flex items-center flex-column flex-row-ns">
    <nav className="f5 b tracked fl w-90 w-20-ns">
      <a className="link dim dib page-scroll" href="#page-top">
        <img src="/logo.jpeg" className="dib w4 h3 br-100" />
      </a>
    </nav>
    <nav className={
      `f6 tracked tr fl w-80 pv3 pv4-ns flex-column flex-row-ns  ${
        atTheTop > 10 ? 'dn flex-ns': ''
      }`
    }>
      <a className="link dim ph3 b dib page-scroll" href="#about">Acerca de</a>
      <a className="link dim ph3 b dib page-scroll" href="#services">Servicios</a>
      <a className="link dim ph3 b dib page-scroll" href="#contact">Chucherias misticas</a>
      <a className="link dim ph3 b dib page-scroll" href="#services">Sacar turno</a>
      <a className="link dim ph3 b dib page-scroll" href="#contact">Blog</a>
      <a className="link dim ph3 b dib page-scroll" href="#contact">Promos</a>
    </nav>
  </div>
</header>)
};

export default Menu;