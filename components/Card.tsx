import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  width: 70vw;
  padding: 3.2rem;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
  border-radius: 15px;
  transition: transform 0.5s ease-out;
  height: min-content;
  align-items: center;
  background: #fdfdfd;

  @media (max-width: ${({ theme }) => theme.bp.phone}) {
    padding: 2.4rem;
    flex-direction: column;
    width: 85vw;
  }

  &:hover {
    transform: scale(1.01);
  }
`
interface Image {
  img?: string
}
const ImageWrapper = styled.div<Image>`
  width: 25%;
  padding-top: 15%;
  background-color: #ededed;
  border-radius: 4px;
  position: relative;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.bp.phone}) {
    width: 100%;
    padding-top: 55%;
  }
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const FlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.8rem;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.bp.phone}) {
    flex-direction: column;
    width: min-content;
    align-items: flex-start;
  }
`
const TagsWrapper = styled.div`
  padding-top: 1.6rem;
  display: flex;
  gap: 0.8rem;
  font-size: 1.2rem;
`
const Tag = styled.div`
  background: #f1f1f1;
  border: black 1px solid;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  text-transform: capitalize;
  color: black;
`
const Heading = styled.h2`
  font-size: ${({ theme }) => theme.type.size.hd3};
  color: black;

  @media (max-width: ${({ theme }) => theme.bp.phone}) {
    font-size: ${({ theme }) => theme.type.size.lg};
  }
`
const Desc = styled.p`
  font-size: ${({ theme }) => theme.type.size.xl};
  line-height: 1.5;
  color: black;

  @media (max-width: ${({ theme }) => theme.bp.phone}) {
    font-size: ${({ theme }) => theme.type.size.md};
  }
`

const Date = styled.p`
  font-size: 1.6rem;
  line-height: 1.2;
  color: #d5d5d5;

  @media (max-width: ${({ theme }) => theme.bp.phone}) {
    width: max-content;
  }
`
const Link = styled.a`
  font-size: 1.6rem;
  text-decoration: none;
`

export const Card = ({
  title,
  desc,
  link,
  date,
  category,
  img,
}: {
  title?: string
  desc?: string
  link?: string
  date?: string
  category?: any
  img?: string
}) => {
  return (
    <Link href={link} target="_blank">
      <CardWrapper>
        <ImageWrapper
          img={
            img
              ? img
              : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'
          }
        />
        <ContentWrapper>
          <Heading>{title}</Heading>
          <Desc>{desc}</Desc>
          <FlexRowWrapper>
            <TagsWrapper>
              {category.map((item: any) => {
                return <Tag key={item}>{item}</Tag>
              })}
            </TagsWrapper>
            <Date>{moment(date).format('MMM D, YYYY')}</Date>
          </FlexRowWrapper>
        </ContentWrapper>
      </CardWrapper>
    </Link>
  )
}
