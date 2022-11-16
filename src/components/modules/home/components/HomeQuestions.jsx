import React from 'react';
import '../../../pages/home/index.scss';
import Accordion from '../../../ui/molecules/accordion/Accordion';
import { faqs } from '../../../../constant/faqs';

const firstSetOfFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
const secondSetOfFaqs = faqs.slice(Math.ceil(faqs.length / 2));

export default function HomeQuestions() {
  return (
    <div className="home-page__home-questions app-container">
      <div className="home-page__home-questions__content app-container__section">
        <h2 className="home-page__home-questions__content__header">
          Common Questions
        </h2>
        <div className="home-page__home-questions__content__questions">
          <div>
            {firstSetOfFaqs.map((faq, index) => {
              return (
                <Accordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              );
            })}
          </div>
          <div>
            {secondSetOfFaqs.map((faq, index) => {
              return (
                <Accordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
