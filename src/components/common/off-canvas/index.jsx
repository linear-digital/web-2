import Link from 'next/link';
import React, { useState } from 'react';
import menu_data from '../../../layout/headers/menu-data';

const sidebar_contents = {
  title: <>We deploy world-class Creative <br /> on demand.</>,
  inst_imgs: [
    '/assets/img/offcanvas/insta-1.jpg',
    '/assets/img/offcanvas/insta-2.jpg',
    '/assets/img/offcanvas/insta-4.jpg',
    '/assets/img/offcanvas/insta-4.jpg',
  ]
}
const { inst_imgs, title } = sidebar_contents;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState('')

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle('')
    }
    else {
      setNavTitle(menu)
    }
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? 'opened' : ''}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <a>
                <img src="/assets/img/logo/logo-white.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="tpoffcanvas__close-btn" onClick={() => setIsOpen(false)}>
            <button className="close-btn"><i className="fal fa-times-hexagon"></i></button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                  <li key={i} className={!menu.has_dropdown ? '' : navTitle === menu?.title ? "has-droupdown active" : "has-droupdown"}>
                    {menu.has_dropdown && <button onClick={() => openMobileMenu(menu.title)}>{menu.title} </button>}
                    {!menu.has_dropdown && <Link href={menu.link}>{menu.title}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-star"></i> <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" rel="noreferrer" target="_blank">
                  House of Soyati, Rathirampur, 
                  <br />
                  Khalispur-3842, Begumgonj, Noakhali
                </a>
              </li>
              <li><i className="fas fa-star"></i><a href="tel:+8801610139775">+8801610139775</a></li>
              <li><i className="fas fa-star"></i><a href="mailto:lineardigital2024@gmaiil.com">lineardigital2024@gmail.com</a></li>
            </ul>
          </div>
          <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get UPdate</p>
            <form className="p-relative" action="#">
              <input type="text" placeholder="Enter mail" />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
          <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Check Instagram POst</p>
            <div className="tp-insta">
              <div className="row">
                {inst_imgs.map((img, i) => (
                  <div key={i} className="col-3 col-sm-3"><a href="#">
                    <img src={img} alt="" /></a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen ? 'apply' : ''}`}></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;