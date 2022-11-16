import React, {useState} from 'react';
import './index.scss';

export default function Accordion({question, answer}) {
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggle = () => {
    setOpenAccordion(!openAccordion);
  }
  return (
    <div className="faq">
      <div className="accordion">
        <p onClick={toggle} className="accordion__question">
         {question}
        </p>

        <p className={`accordion__answer ${ openAccordion ? 'active' : ''}`}>
          {answer}
        </p>
      </div>
    </div>
  );
}
