import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <div className="my-contact">
        <div>
          <img className="contact-image" src=".\src\assets\Vector.png" alt="" />
          <img className="github" src=".\src\assets\github.svg" alt="" />
        </div>
        <h3 className="contact-platform">Github</h3>
      </div>



      <div className="my-contact">
        <div>
          <img className="contact-image" src=".\src\assets\Vector.png" alt="" />
          <img className="instagram" src=".\src\assets\Instagram.svg" alt="" />
        </div>
        <h3 className="contact-platform">Instagram</h3>
      </div>



      <div className="my-contact">
        <div>
          <img className="contact-image" src=".\src\assets\Vector.png" alt="" />
          <img className="email" src=".\src\assets\fast message.png" alt="" />
        </div>
        <h3 className="contact-platform">Email</h3>
      </div>



      <div className="my-contact">
        <div>
          <img className="contact-image" src=".\src\assets\Vector.png" alt="" />
          <img className="call" src=".\src\assets\call.png" alt="" />
        </div>
        <h3 className="contact-platform">Telp</h3>
      </div>


    </div>
  );
}

export default Contact;
