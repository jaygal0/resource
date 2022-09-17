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
  font-size: 3.2rem;
  color: black;
`
const Desc = styled.p`
  font-size: 2.4rem;
  line-height: 1.5;
  color: black;
`
const Date = styled.p`
  font-size: 1.6rem;
  line-height: 1.2;
  color: #d5d5d5;
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
          img={img ? img : 'https://dummyimage.com/600x400/000/fff'}
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
