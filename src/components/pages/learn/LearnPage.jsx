import React from 'react'
import LearnHero from '../../modules/learn/components/LearnHero'
import LearnVideos from '../../modules/learn/components/LearnVideos'
import DefaultLayout from '../../ui/layout/DefaultLayout'

export default function LearnPage() {
  return (
    <DefaultLayout>
        <LearnHero/>
        <LearnVideos/>
    </DefaultLayout>
  )
}
