import Head from 'next/head'
import React from 'react'
import { Card } from '../components/Card'
import { IndexMainContainer } from '../styles'

export default function Home({ resource }: { resource: any }) {
  const { data } = resource
  console.log(data)

  return (
    <>
      <Head>
        <title>Re:Source</title>
      </Head>
      <IndexMainContainer>
        {data.map((item: any) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              desc={item.desc}
              link={item.link}
              date={item.dateAdded}
              category={item.category}
              img={item.img}
            />
          )
        })}
      </IndexMainContainer>
    </>
  )
}

export async function getStaticProps(context: any) {
  let site = process.env.WEB_SITE
  let res = await fetch(`${site}/api/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  let resource = await res.json()

  return {
    props: { resource },
  }
}
