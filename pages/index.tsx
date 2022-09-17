import Head from 'next/head'
import React from 'react'
import { Card } from '../components/Card'
import { IndexMainContainer } from '../styles'

export default function Home({ resource }: { resource: any }) {
  const { data } = resource

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

export async function getServerSideProps(context: any) {
  const site = process.env.WEB_SITE
  const res = await fetch(`${site}/api/`)
  const resource = await res.json()
  if (!resource) {
    return {
      notfound: true,
    }
  }

  return {
    props: { resource },
  }
}
