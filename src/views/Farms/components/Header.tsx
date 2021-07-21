import React from 'react'
import { Button, Flex, Heading, useModal, PresentWonIcon } from '@pancakeswap/uikit'
import { useProfile } from 'state/profile/hooks'
import { useTranslation } from 'contexts/Localization'
import HeaderWrapper from './HeaderWrapper'

const ProfileHeader = () => {
  const { t } = useTranslation()
  const { hasProfile } = useProfile()

  return (
    <HeaderWrapper>
      <Flex
        flexDirection={['column', null, 'row']}
        alignItems={['start', null, 'center']}
        justifyContent="space-between"
      >
        <div>
          <Heading as="h1" scale="xxl" mb="8px" color="secondary">
            {t('Your Profile')}
          </Heading>
          <Heading as="h2" scale="lg" mb="16px">
            {t('Check your stats and collect achievements')}
          </Heading>
        </div>
      </Flex>
    </HeaderWrapper>
  )
}

export default ProfileHeader
