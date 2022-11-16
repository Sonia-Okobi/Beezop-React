import React from 'react'
import SupportForm from '../../modules/support/components/SupportForm';
import SupportHero from '../../modules/support/components/SupportHero';
import DefaultLayout from '../../ui/layout/DefaultLayout';

export default function SupportPage() {
  return (
    <div>
        <DefaultLayout>
            <SupportHero/>
            <SupportForm/>
        </DefaultLayout>
    </div>
  )
}
