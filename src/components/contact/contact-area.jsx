import React from 'react';
import ContactForm from '../forms/contact-form';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-135 pb-130" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-40">
                  <img src="/AAAA.png" alt="" style={{height: "300px"}} />

                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Mail Address</h4>
                  <span><a href="mailto:(lineardigital2024@gmail.com)">lineardigital2024@gmail.com</a></span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Phone Number</h4>
                  <span><a href="tel:+8801610139775">+8801610139775</a></span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Address line</h4>
                  <span><a href="#" target="blank">
                  House of Soyati, Rathirampur, Khalispur-3842, 
                  <br />
                  Begumgonj, Noakhali
                    </a></span>
                    
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">Let’s Talk...</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  {/* ContactForm start */}
                  <ContactForm />
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;