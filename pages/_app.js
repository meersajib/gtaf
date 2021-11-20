import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component className="bg-primary font-sans" {...pageProps} />
}

export default MyApp
