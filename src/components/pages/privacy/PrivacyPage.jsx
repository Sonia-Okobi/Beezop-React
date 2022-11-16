import React from 'react';
import DefaultLayout from '../../ui/layout/DefaultLayout';
import './index.scss';

export default function PrivacyPage() {
  return (
    <DefaultLayout>
      <div className="privacy-page hero app-container">
        <div className="privacy-page__content app-container__section"></div>
      </div>
      <div className="document-container privacy-document">
        <h3>Privacy Policy</h3>
        <p>
          This privacy policy shows how your personal information is collected,
          used and disclosed when you use our services. We promise we never sell
          your data.
          <span class="title">Who we are</span>We are Beezop Limited (“we”,
          “our”, “us”) and operate under the name of Beezop. We’re committed to
          protecting and respecting your privacy. If you have any questions
          about your personal information please send us an email at{' '}
          <a href="mailto:admin@beezop.com" class="gradient">
            admin@beezop.com
          </a>
          . We’re registered in Nigeria, with number RC1744764.
          <span class="title">The information we hold about you.</span>
          Information submitted through our app When you sign up on Beezop, you
          are asked to input information such as your first, last name, company,
          title, and your email address. This information is then used to create
          your account, identify you when you login and send you the latest
          updates and notifications.
          <span class="title">Billing information</span>When you pay for Beezop,
          we ask for your credit card. That’s so we can charge you for Service,
          and send you invoices. Your credit card is passed directly to our
          payment processor and doesn’t ever go through our servers.
          <span class="title">Information from your browser</span>
          This information includes your IP address, browser type, browser
          version, the pages of our app that you visit, the time and date of
          your visit, the time spent on those pages, unique device identifiers
          and other diagnostic data your internet browser sends when you use our
          service or access our website.
          <span class="title">Tracking and Cookies Data</span>Cookies are small
          bits of data stored as text files on a browser. We use those small
          bits of data to personalize our user’s experience on Beezop.
          <span class="title">How we use your information</span>To provide our
          services, We use your personal information to;{' '}
        </p>
        <ol>
          <li>Create your account.</li>
          <li>Verify your identity when you sign into the app.</li>
          <li>
            Communicate new features and recent changes in the app to you.
          </li>
          <li>
            Carry out technical analysis in order to improve our services.
          </li>
          <li>Provide traffic reports and feedback on the app.</li>
          <li>
            Maintain a smooth relationship with you, by acknowledging your
            queries and feedbacks.
          </li>
          <li>
            Provide you with information and to notify you of services relating
            to our product.
          </li>
          <li>Monitor and manage your usage of our product.</li>
        </ol>
        <span class="title">Who we share it with</span>
        <p>
          We don’t share any personally identifying information publicly, we may
          share it with;
        </p>
        <ol>
          <li>
            Anyone who works with us when they need it to carry out tasks.
          </li>
          <li>
            Any third-party organization that support any of our services you
            use, when they need to provide those services.
          </li>
          <li>
            Google Analytics: We use Google Analytics to track activities of
            users on our website platform. This may include but is not limited
            to time on site, bounce rate, click rates, and more.
          </li>
          <li>
            Paystack: We use this third-party service for payment processing.
          </li>
          <li>
            Postmark and MailChimp: We use these services to send users email
            updates and notifications.
          </li>
          <li>
            Certain Authorities that prevent and detect terrorism only when an
            official request is made.
          </li>
          <li>Anyone who you give us explicit permission to share it with.</li>
        </ol>
        <p>
          <span class="title">How secure is your information</span>
          You are very important to us, the reason why we take the security of
          your information provided to us by you and our third-party service
          providers, very seriously. We store personal information in our
          secured server managed by us and our service providers. The security
          measures include firewalls, data encryption, and information access
          authorization controls.
          <span class="title">Can children use our services</span>
          Our sites and services are not aimed at children under the age of 18.
          We do not knowingly collect information, including Personal Data, from
          children or other individuals who are not legally able to use our site
          and services.
          <span class="title">Changes</span>
          We may need to revise this policy from time to time to reflect changes
          to our sites or our services. When we do change the policy, we will
          make sure to notify you about such changes, these changes would be
          passed across to you via email. The revised policy will be effective
          as of the published effective date.
          <span class="title">Contact us</span>
          You may contact us if you have general questions about our policy and
          practices or questions about your profile or personal information.
          Please contact us by email:&nbsp;
          <a href="mailto:admin@beezop.com" class="gradient">
            admin@beezop.com.
          </a>
        </p>
      </div>
    </DefaultLayout>
  );
}
