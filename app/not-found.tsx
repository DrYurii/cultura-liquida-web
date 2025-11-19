'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import img404 from '@/app/ui/icons/404error.svg'
import styled from 'styled-components'
import ArrowPrev from '@/app/components/IconComponents/ArrowPrev'

const NotFound: FC = () => {

  return (
    <NotFoundContainer>
      <ContentWrapper>
        <Wrapper>
          <Title style={{ marginBottom: 10, textTransform: 'uppercase'}}>Página no encontrada</Title>
          <BackLink href='/'>
            <ArrowPrev aria-label="Back" />
            <p style={{ marginLeft: 10, textTransform: 'uppercase'}}>Devolver</p>
          </BackLink>
        </Wrapper>

        <NotFoundImage             
          src={img404.src || img404} 
          alt='La imagen Página no encontrada'
        />
      </ContentWrapper>
    </NotFoundContainer>
  )
}

export default NotFound

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 57.6px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 0;
  color: white;

  @media (max-width: 850px) {
    font-size: 30px;
  }
`

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px - 230px); /* 100px header + 180px HeaderLikeFooter + ~50px LastFooter */
  width: 100%;
  padding: 40px 20px;

  @media (max-width: 850px) {
    min-height: calc(100vh - 100px - 250px); /* Header + variable footer height (HeaderLikeFooter + LastFooter) */
    padding: 20px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 850px) {
    gap: 20px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NotFoundImage = styled.img`
  width: 606px;
  height: 606px;
  flex-shrink: 0;

  @media (max-width: 850px) {
    width: 100%;
    max-width: 400px;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  @media (max-width: 500px) {
    max-width: 300px;
  }
`

export const BackLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px 16px 16px 16px;
  background-color: #4FDB40;
  /* padding:  17px 29px; */
  margin-right: '37px';
  cursor: pointer;
  width: 200px;
  height: 55px;
  color: #2d2d2d;
  font-weight: 600;
  border: none;
  font-size: 16px;
  color: white;
  text-decoration: none;

  transition: all 0.3s ease;
  &:hover{
    background-color: #F2C94C;
  }
`
