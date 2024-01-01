import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';
import { useRouter } from 'next/router';


const Contact = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  const route = useRouter()

  return (
    <Wrapper>
      {
        route.pathname === "/contact" &&
        <>
          <HeaderSix />
          <Breadcrumb title={'Contact'} />
        </>
      }

      <ContactArea />
      <FooterThree />
    </Wrapper>
  );
};

export default Contact;