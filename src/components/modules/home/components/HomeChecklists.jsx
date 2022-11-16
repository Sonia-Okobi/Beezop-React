import React from 'react';
import '../../../pages/home/index.scss';

export default function HomeChecklists() {
  return (
    <div className="home-page__home-checklists app-container">
      <div className="home-page__home-checklists__content app-container__section">
        <div className="home-page__home-checklists__content__columns">
          <div className="home-page__home-checklists__content__columns__column">
            <div className="heading">
              <h3>Preloaded with 45+ free checklists</h3>
              <p className="heading__description">
                To help you get started quickly, your Beezop account already
                comes with many useful checklists.
              </p>
            </div>
            <div className="group">
              <h4 className="group__title">Sales (7 checklists)</h4>
              <p>Prospecting for Leads</p>
              <p>Preparation process</p>
              <p>Assessing needs</p>
              <p>Handling a presentation</p>
              <p>Managing objections</p>
              <p>Closing</p>
              <p>Post-closing</p>
            </div>

            <div className="group">
              <h4 className="group__title">Procurement (3 checklists)</h4>
              <p>Pre-purchase process</p>
              <p>Receiving goods</p>
              <p>Inventory Management</p>
            </div>
          </div>

          <div className="home-page__home-checklists__content__columns__column">
            <div className="group">
              <h4 className="group__title">
                HR & People Management (12 checklists)
              </h4>
              <p>Recruitment</p>
              <p>Conducting reference checks</p>
              <p>Conducting background checks</p>
              <p>Preparing for new staff resumption</p>
              <p>Conducting new staff induction</p>
              <p>Onboarding new staff</p>
              <p>Performance appraisal</p>
              <p>Employee confirmation</p>
              <p>Leave administration</p>
              <p>Collating payroll</p>
              <p>Staff events</p>
              <p>Exit management</p>
            </div>

            <div className="group">
              <h4 className="group__title">Admin (5 checklists)</h4>
              <p>Receiving guests</p>
              <p>Answering the phones</p>
              <p>Pre travel process</p>
              <p>Post travel process</p>
              <p>Meeting set up process</p>
            </div>
          </div>

          <div className="home-page__home-checklists__content__columns__column">
            <div className="group">
              <h4 className="group__title">Finance (9 checklists)</h4>
              <p>Preparing monthly budget</p>
              <p>Processing incoming Invoices</p>
              <p>Processing outgoing Invoices</p>
              <p>Processing reimbursements</p>
              <p>Following up on invoices</p>
              <p>Conducting internal audits</p>
              <p>Processing payee taxes</p>
              <p>Processing VAT</p>
            </div>

            <div className="group">
              <h4 className="group__title">Project Management (8 checklists)</h4>
              <p>Defining a project</p>
              <p>Identifing and meeting with key stakeholders</p>
              <p>Creating a Project Plan</p>
              <p>Creating a Work Breakdown Structure</p>
              <p>Creating Project Schedule</p>
              <p>Monitoring project progress and performance</p>
              <p>Delivering a project</p>
              <p>Closing out a project</p>
            </div>
          </div>
        </div>
        <div className="home-page__home-checklists__content__action">
          <h4>And More...</h4>
          <a href="/signuppage" className="base-button--inverted checklist-btn">
            <span className="gradient"> Try Beezop Now</span>
          </a>{' '}
        </div>
      </div>
    </div>
  );
}
