import React from 'react';
import BaseButton from '../../ui/atoms/baseButton/BaseButton';
import DefaultLayout from '../../ui/layout/DefaultLayout';
import BaseInput from '../../ui/molecules/baseInput/BaseInput';
import './index.scss';

export default function GDPRPage() {
  return (
    <DefaultLayout>
      <div className="gdpr-page hero app-container">
        <div className="gdpr-page__content app-container__scetion"></div>
      </div>
      <div className="document-container gdpr-document">
        <h3>GDPR</h3>
        <p>
          The General Data Protection Regulation (GDPR) will expand the rights
          of users to control how their personal data is been collected and
          processed.
          <span class="title">Data Privacy and GDPR</span>Beezop is committed to
          complying with laws generally applicable to personal data and the
          provision of the services in the jurisdiction where the personal data
          is processed and the GDPR for its service.<span class="title"></span>
          Our Privacy Policy describes how Beezop handles the personal
          information we collect about you. Personal information includes your
          name, email address and credit card detail that you provide when you
          try to login to our site or pay for our services.
          <span class="title"></span>As the data processor, we promise to:
        </p>
        <ol>
          <li>Keep your data safe, secure, and private.</li>
          <li>
            Disclose our sub-processors and monitor their GDPR compliance.
          </li>
          <li>Keep records of compliance and audit logs as required.</li>
          <li>
            Carry out technical analysis in order to improve our services.
          </li>
          <li>
            Make available tools to handle data subject requests, such as
            right-to-erasure and right-to-access.
          </li>
          <li>
            Notify you of a security breach using your account notification
            contact.
          </li>
        </ol>
        <p>
          <span class="title">Sub-Processors</span>
          Beezop uses a range of third-party processors and subprocessors to
          assist us in connection with the services that we provide. <br />
        </p>
        <ul>
          <li>Google Analytics:&nbsp;policies.google.com/privacy</li>
          <li>Paystack:</li>
          <li>Postmark:</li>
          <li>MailChimp:</li>
        </ul>
        <p>
          <span class="title"></span>
          If you have any questions or comments about the manner in which we
          collect, store, or use your personal information, kindly send us a
          mail:
          <a href="mailto:admin@beezop.com" class="co-gradient">
            admin@beezop.com
          </a>
          <span class="title"></span>
          Exercise your GDPR rights <br />
          Send your GDPR request to us via the form below.&nbsp;
        </p>
        <form className="gdpr-document__form">
          <div className="form-input">
            <BaseInput type="text" label="Full name" name="fullName" />
            <BaseInput type="email" label="Email address" name="emailAddress" />
            <BaseInput type="number" label="Phone number" name="phoneNumber" />
          </div>
          <span class="title">What do you want to get done? *</span>

          <label className="checkbox-label">
            <div className="label">
              <input className="input" type="radio" name="request" id="radio" />
              <span></span>
            </div>
            I want Beezop to delete my personal data
          </label>

          <label className="checkbox-label">
            <div className="label">
              <input className="input" type="radio" name="request" id="radio" />
              <span></span>
            </div>
            I want Beezop to transfer my data to me or a third
            party
          </label>

          <label className="checkbox-label">
            <div className="label">
              <input className="input" type="radio" name="request" id="radio" />
              <span></span>
            </div>
            I want to know how Beezop is using my personal
            information
          </label>

          <label className="checkbox-label">
            <div className="label">
              <input className="input" type="radio" name="request" id="radio" />
              <span></span>
            </div>
            I want to rectify incorrect data Beezop has about me
          </label>

          <label className="checkbox-label">
            <div className="label">
              <input className="input" type="radio" name="request" id="radio" />
              <span></span>
            </div>
            I want Beezop to stop using my information for direct
            marketing and profiling
          </label>

          <label className="checkbox-label">
            <div className="label">
              <input className="input" type="radio" name="request" id="radio" />
              <span></span>
            </div>
            I want Beezop to keep my data, but stop processing it
          </label>

          <label className="checkbox-label">
            <div className="label">
              <input className="input" type="radio" name="request" id="radio" />
              <span></span>
            </div>
            I want to object to the way Beezop is using my personal
            information
          </label>

          <BaseButton className="gdpr-document__form__button">
            Submit
          </BaseButton>
        </form>
      </div>
    </DefaultLayout>
  );
}
