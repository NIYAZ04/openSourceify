import React from 'react';
import './contactus.css';

const ContactUs: React.FC = () => {
  return (
    <div className="ContactUsContainerByOpenSourceify">
      <h2 className="ContactUsTitleByOpenSourceify">Contact Us</h2>
      <p className="ContactUsMessageByOpenSourceify">
        As a developer of the OpenSourceify platform, an open-source platform, I welcome your feedback. If you need any enhancements or are facing any issues, please feel free to contact me.
      </p>
      <form className="ContactUsFormByOpenSourceify">
        <div className="ContactUsFormGroupByOpenSourceify">
          <label htmlFor="name" className="ContactUsLabelByOpenSourceify">Name</label>
          <input type="text" id="name" className="ContactUsInputByOpenSourceify" required />
        </div>
        <div className="ContactUsFormGroupByOpenSourceify">
          <label htmlFor="email" className="ContactUsLabelByOpenSourceify">Email</label>
          <input type="email" id="email" className="ContactUsInputByOpenSourceify" required />
        </div>
        <div className="ContactUsFormGroupByOpenSourceify">
          <label htmlFor="message" className="ContactUsLabelByOpenSourceify">Message</label>
          <textarea id="message" className="ContactUsTextareaByOpenSourceify" rows={5} required></textarea>
        </div>
        <button type="submit" className="ContactUsButtonByOpenSourceify">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
