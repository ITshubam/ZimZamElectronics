import "./Contact.css";

const Contact = () => {
  return (<>
        <div className="About">
      <div className="container gx-0">
        <div className="row gx-0">
          <div className="col-12">
            <div className="About_col">
              <h1 className="main_head">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
     </div>
     {/* ********************** */}
     <div className="contact">
        <div className="container-fluid contact_main gx-0">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-6 ext-center">
              <div className="contact_sec1">
                <h4 className="contact_h4">Contact Information</h4>
                <p>
                  Fill out the form and our team will get back to you within 24
                </p>
      {/* ********************** */}
      <div className="row gx-0">
        <div className="col- lg-6">
          <div className="contact_fm_1">
            <i className="fa-solid fa-phone"></i>
            <h4>Phone No</h4>
            <h6>+91 1234567890</h6>
            </div>
          </div>
        
        <div className="col-lg-6">
          <div className="contact_fm_2">
            <i className="fa-solid fa-envelope"></i>
            <h4>Email</h4>
            <h6>ZimZamElectronics@gmail.com</h6>
          </div>
        </div>
        </div>
       {/* ********************** */}
       {/* ********************** */}

       <div className="row gx-0">
        <div className="col-lg-12">
          <div className="contact_fm_3">
            <i className="fa-solid fa-location-dot"></i>
            <h4>Address</h4>
            <h6>123, New Delhi, India</h6>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0000000000005!2d77.2085913146347!3d28.61393999157968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f1b7e1f1e1%3A0x1b1b3a3b1b1b1b1b!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1633663660733!5m2!1sen!2sin" width="100%" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy=" no-referrer-when-downgrade"></iframe>
          </div>
        </div>
       </div>
       </div>
       </div>

       <div className="col-lg-6">
        <div className="contact_sec2">
          <form action="https://formspree.io/f/mvggvojk" method="POST">
          <div className="mb-3">
            <label
              htmlFor="exampleFromControlInput1"
              className="form-label"
              >
                Name*
                </label>
                <input type="text"
                name="username"
                className="form-label"
                id="exampleFromControlInput1"
                placeholder="Enter Your Name"
                autoComplete="off"
                required
                />
                </div>
                <div className="mb-3">
                  <label
                  htmlFor="exampleFromControlInput1"
                  className="form-label"
                  >
                    Email
                  </label>
                  <input
                   type="Email"
                   name="email"
                    className="form-control"
                   id="exampleFromControlInput1"
                   placeholder="Enter Your Email"
                   autoComplete="off"
                   required
                   />
                  </div>
                  <div className="mb-3">
                    <label
                     htmlFor="exampleFromControlInput1"
                     className="form-label"
                     >
                      Subject*
                     </label>
                     <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="exampleFromControlInput1"
                      placeholder="Your Subject Here"
                      required
                      />
                      </div>
                      <div className="mb-3">
                        <label
                         htmlFor="exampleFromControlInput1"
                          className="form-label"
                          >
                            Message*
                          </label>
                          <textarea
                           className="form-control"
                           id="exampleFromControlInput1"
                           name="textarea"
                           placeholder="Type Your Message Here"
                           rows="3"
                           required
                           ></textarea>
                           </div>
                           <button type="submit" className="contact_btn">
                            Send Now
                      </button>
                  </form>
                </div>
              </div>       
          </div>
        </div>
       </div>
    </>
  );
}

export default Contact
