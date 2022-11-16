import React from 'react'
import TeamHero from '../../modules/team/components/TeamHero'
import TeamMates from '../../modules/team/components/TeamMates'
import DefaultLayout from '../../ui/layout/DefaultLayout'

export default function TeamPage() {
  return (
    <DefaultLayout>
        <TeamHero/>
        <TeamMates/>
    </DefaultLayout>
  )
}
