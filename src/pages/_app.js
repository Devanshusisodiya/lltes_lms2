import '../styles/globals.css'
import Script from "next/script"
import "@fontsource/red-hat-display";


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
  }