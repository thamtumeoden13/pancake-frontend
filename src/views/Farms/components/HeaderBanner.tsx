import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Text, Flex, Button, ArrowForwardIcon, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import { NavLink } from 'react-router-dom'
import Balance from 'components/Balance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getBalanceNumber } from 'utils/formatBalance'

const NowLive = styled(Text)`
  background: -webkit-linear-gradient(#ffd800, #eb8c00);
  font-size: 24px;
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Wrapper = styled.div`
  // background-image: linear-gradient(#7645d9, #452a7a);
  max-height: max-content;
  padding: 24px 24px;
  overflow: hidden;
  // ${({ theme }) => theme.mediaQueries.md} {
  //   max-height: 256px;
  // }
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: row;
  // background-image: linear-gradient(#7645d9, #452a7a);
  background-image: url('https://defiwarrior.thegioigiaodien.com/images/background_banner.png');
  border-radius: ${({ theme }) => (theme.radii.card)};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  max-height: max-content;
  padding: 24px 24px;
  position: relative;
  overflow: hidden;
  justifycontent: center;
  align-items: flex-end;

  // ${({ theme }) => theme.mediaQueries.sm} {
  //   flex-direction: row;
  // }
`

const LeftWrapper = styled(Flex)`
  flex-direction: column;
  flex: 1;
  justifycontent:center;
  bottom: 0;
  margin-top: 40px;
  // ${({ theme }) => theme.mediaQueries.sm} {
  //   padding-top: 40px;
  // }
`

const slidein = keyframes`
from {
  transform: translateX(100%);
}

to {
  transform: translateX(0%);
}
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // flex: 0.5;
  animation: ${slidein} 3s infinite;
  animation-direction: alternate;
  height:200px;

  & img {
    height:100%;
  }

  // ${({ theme }) => theme.mediaQueries.sm} {
  //   & img {
  //     margin-top: 0;
  //   }
  // }

  // ${({ theme }) => theme.mediaQueries.md} {
  //   flex: 0.8;
  // }

  // ${({ theme }) => theme.mediaQueries.lg} {
  //   & img {
  //     // margin-top: -25px;
  //     animation: ${slidein} 3s infinite;
  //     animation-direction: alternate;
  //   }
  // }
`

const PrizeFlex = styled(Flex)`
  flex-direction: column;
  // margin-bottom: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 640px;
  }
`

const HeaderBanner: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
  const { t } = useTranslation()
  const cakePriceBusd = usePriceCakeBusd()
  const prizeInBusd = cakePriceBusd.times(title)
  const prizeTotal = getBalanceNumber(prizeInBusd)

  const prizeTotalText = prizeInBusd.isNaN() ? prizeTotal.toString() : '-'
  const prizeText = t('Over %amount% in Prizes!', { amount: prizeTotalText })
  const [over, inPrizes] = prizeText.split(prizeTotalText)

  return (
    <Wrapper>
      <Inner>
        <LeftWrapper>
          <PrizeFlex>
            <Text fontSize="40px" color="#ffffff" bold mr="8px">
              {title}
            </Text>
          </PrizeFlex>
          {/* <NowLive>{t(subtitle)}</NowLive> */}
          <Text color="white" bold fontSize="20px" mr="8px">
                {t(subtitle)}
          </Text>
          {/* <NavLink exact activeClassName="active" to="/lottery" id="lottery-pot-banner">
            <Button>
              <Text color="white" bold fontSize="16px" mr="4px">
                {t('Play Now')}
              </Text>
              <ArrowForwardIcon color="white" />
            </Button>
          </NavLink> */}
        </LeftWrapper>
        <RightWrapper>
          <img src="https://defiwarrior.thegioigiaodien.com/images/character_banner.png" alt="lottery bunny" />
        </RightWrapper>
      </Inner>
    </Wrapper>
  )
}

export default HeaderBanner
