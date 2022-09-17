import React from 'react'

const index = ({ docs }: { docs: any }) => {
  const { data } = docs

  return <></>
}

export default index

export async function getStaticProps({ query: { id } }: { query: any }) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/books/${id}`)
  const docs = await res.json()

  if (!docs) {
    return {
      notFound: true,
    }
  }

  return {
    props: { docs },
  }
}
