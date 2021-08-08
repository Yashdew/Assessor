import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero is-primary is-small">
            <div className="hero-body">
              <p className="title" >
                Hello There
              </p>
              <p className="subtitle">General Kenobi</p>
            </div>
          </section>
    </div>
  )
}
