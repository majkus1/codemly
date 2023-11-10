import Nav from '@/components/nav'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Home = () => {
	const router = useRouter()
	const { locale } = router

	const title = locale === 'pl' ? 'Tytuł po polsku' : 'Title in English'
	const description = locale === 'pl' ? 'Opis po polsku' : 'Description in English'

	const handleLocaleChange = (locale: string) => {
		router.push(router.pathname, router.asPath, { locale })
	}
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<link rel='alternate' hrefLang='en' href='https://www.twojadomena.com/en' />
				<link rel='alternate' hrefLang='pl' href='https://www.twojadomena.com/pl' />
				<link rel='alternate' hrefLang='x-default' href='https://www.twojadomena.com/' />
			</Head>
			<div className='wrapper'>
				<Nav />
				<header className='header-ms'>
					<video className='video-background' autoPlay loop muted playsInline>
						<source src='/img/video-bgc-mobile-re-2.mp4' type='video/mp4' />
					</video>
					<div className='welcome'>
						<img src='/img/cbgcno.png' className='white-ms-logo' />
					</div>
					<div className='line'></div>
				</header>
				<section>
					<div className='btn-lang'>
						<button onClick={() => handleLocaleChange('en')}>English</button>
						<button onClick={() => handleLocaleChange('pl')}>Polski</button>
					</div>
				</section>
			</div>
		</>
	)
}

export default Home

// Reszta kodu komponentu strony...

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const { locale } = context

	return {
		props: {
			...(await serverSideTranslations(locale!, ['common'])),
		},
	}
}
