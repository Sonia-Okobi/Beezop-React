import React from 'react';
import BaseButton from '../../../ui/atoms/baseButton/BaseButton';
import BaseInput from '../../../ui/molecules/baseInput/BaseInput';
import BaseTextArea from '../../../ui/molecules/baseTextArea/BaseTextArea';
import file from '../../../../assets/svg/file.svg';
import '../../../pages/support/index.scss';

export default function SupportForm() {
  return (
    <div className="support-page__support-form app-container">
      <form className="support-page__support-form__content app-container__section">
        <div className="form-input">
          <BaseInput label="Full name" type="text" name="fullName" />
          <BaseInput label="Email address" type="email" name="emailAddress" />
          <BaseInput label="Phone number" type="number" name="phoneNumber" />
        </div>
        <p className="input-title">What is your question, comment or issue?</p>
        <p className="input-description">
          Share all the details. The more we know, the better we can help you.
        </p>
        <BaseTextArea
          className="base-input textarea"
          label="Enter message here"
          type="text"
          name="message"
        />
        <p className="input-title">Send us a file, screenshot, or document</p>
        <p className="input-description">
          Hold the shift key to select multiple files.
        </p>
        <div className="support-page__support-form__content__actions">
          <label className="file-upload">
            <img src={file} alt="Upload Icon" />
            <p>Attach files here</p>
            <input className='upload' type="file" autoComplete="off" name="upload" multiple />
          </label>
          <BaseButton className='support-btn' children="Submit" />
        </div>
      </form>
    </div>
  );
}
