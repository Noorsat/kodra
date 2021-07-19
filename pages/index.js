import Head from 'next/head';
import {Menu} from '../components/Menu/Menu';
import {Main} from '../components/Main/Main';

export default function App(){
  return (
    <>
      <Head>
        <title>Kodra</title>
      </Head>
      <div className="container">
        <div className="wrapper">
          <Menu/>
          <Main/>
        </div>
      </div>
    </>
  )
}