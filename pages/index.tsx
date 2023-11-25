import React, { useState, useEffect, useRef, MutableRefObject } from 'react'
import Nav from '@/components/nav'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import Head from 'next/head'
import gsap from 'gsap'
import Carousel from '@/components/Carousel'

const imgs = ['/img/01.jpg', '/img/02.jpg', '/img/03.jpg']
// import Carousel from '@/components/carousel'

// import image1 from "../public/img/01.jpg";
// import image2 from "../public/img/02.jpg";
// import image3 from "../public/img/03.jpg";

// const imgs = [image1, image2, image3];

const Home = () => {
	const [isDescriptionVisible, setDescriptionVisible] = useState(false)
	const [isDescriptionVisible2, setDescriptionVisible2] = useState(false)
	const [isDescriptionVisible3, setDescriptionVisible3] = useState(false)
	const [isDescriptionVisible4, setDescriptionVisible4] = useState(false)
	const descriptionRef = useRef(null)
	const descriptionRef2 = useRef(null)
	const descriptionRef3 = useRef(null)
	const descriptionRef4 = useRef(null)
	const router = useRouter()
	const { locale } = router

	const title = locale === 'pl' ? 'Tytuł po polsku' : 'Title in English'
	const description = locale === 'pl' ? 'Opis po polsku' : 'Description in English'

	const handleLocaleChange = (locale: string) => {
		router.push(router.pathname, router.asPath, { locale })
	}

	const toggleAnimation = (ref: MutableRefObject<null>, isVisible: boolean) => {
		gsap.to(ref.current, { autoAlpha: isVisible ? 1 : 0, height: isVisible ? 'auto' : 0, duration: 0.5 })
	}

	useEffect(() => {
		toggleAnimation(descriptionRef, isDescriptionVisible)
		toggleAnimation(descriptionRef2, isDescriptionVisible2)
		toggleAnimation(descriptionRef3, isDescriptionVisible3)
		toggleAnimation(descriptionRef4, isDescriptionVisible4)
	}, [isDescriptionVisible, isDescriptionVisible2, isDescriptionVisible3, isDescriptionVisible4])

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
					<div className='btn-lang'>
						<button onClick={() => handleLocaleChange('pl')}>
							<img src='/img/poland.png' />
						</button>
						<button onClick={() => handleLocaleChange('en')}>
							<img src='/img/united-kingdom.png' />
						</button>
					</div>
				</header>
				<section id='about'>
					{/* <h2>
						<span>{'< '}</span>O Nas<span>{' />'}</span>
					</h2> */}
					<p className='outline-text'>CODEMLY = FRIENDLY</p>
					<p className='title-about'>Połączenie Technologii i Przyjazności</p>
					<img src='/img/cbgcno.png' />
					<div className='element-about'>
						<p className='txt-about'>
							Nazwa naszej firmy uosabia to, co dla nas najważniejsze: pasję do kodowania i tworzenia przyjaznego
							środowiska dla naszych klientów i zespołu.{' '}
						</p>
						<p className='txt-about'>
							Słowo <span>code</span> w naszej nazwie odzwierciedla nasze umiejętności techniczne i zamiłowanie do
							tworzenia oprogramowania. <br></br>Natomiast <span>mly</span> jest odzwierciedleniem naszej misji, aby
							każdy aspekt naszej pracy był przyjazny, dostępny i miły w obsłudze.
						</p>
						<p className='txt-about'>
							Dążymy do tego, aby każdy projekt <span>Codemly</span> był synonimem technologicznej doskonałości i
							ciepłego, ludzkiego podejścia.
						</p>
						<p className='txt-about'>
							Działając na rynkach krajowych i międzynarodowych, dążymy do tego, aby każdy projekt <span>Codemly</span>{' '}
							był synonimem technologicznej doskonałości i ciepłego, ludzkiego podejścia. Kodujemy nie tylko technologię
							– kodujemy doświadczenia, które zbliżają ludzi i technologię.
						</p>
					</div>
				</section>

				<section id='offer'>
					<h2>
						<span>{'< '}</span>Oferta<span>{' />'}</span>
					</h2>
					<div className='elements-offer'>
						<div className='element'>
							<div className='logo-title-offer'>
								<img src='/img/web-design.png' className='logo-offer' />
								<div className='offer-title-button'>
									<p className='head-element'>Projekty graficzne</p>
									<button onClick={() => setDescriptionVisible(!isDescriptionVisible)}>
										<img
											src={isDescriptionVisible ? '/img/arrow-up.png' : '/img/down.png'}
											alt={isDescriptionVisible ? 'Ukryj opis' : 'Pokaż opis'}
										/>
									</button>
								</div>
							</div>
							<div
								ref={descriptionRef}
								style={{
									opacity: 0,
									height: 0,
									visibility: 'hidden',
									overflow: 'hidden',
								}}>
								<p className='dscrb-offer'>
									Specjalizujemy się w tworzeniu unikalnych projektów graficznych dla stron, sklepów i aplikacji. Twoja
									wizja, nasze wykonanie – kreujemy design, który przyciąga i zapada w pamięć.
								</p>
							</div>
							<p className='dscrb-offer-desktops'>
								Specjalizujemy się w tworzeniu unikalnych projektów graficznych dla stron, sklepów i aplikacji. Twoja
								wizja, nasze wykonanie – kreujemy design, który przyciąga i zapada w pamięć.
							</p>
						</div>
						<div className='element'>
							<div className='logo-title-offer'>
								<img src='/img/web-programming.png' className='logo-offer' />
								<div className='offer-title-button'>
									<p className='head-element'>Strony internetowe</p>
									<button onClick={() => setDescriptionVisible2(!isDescriptionVisible2)}>
										<img
											src={isDescriptionVisible2 ? '/img/arrow-up.png' : '/img/down.png'}
											alt={isDescriptionVisible2 ? 'Ukryj opis' : 'Pokaż opis'}
										/>
									</button>
								</div>
							</div>
							<div
								ref={descriptionRef2}
								style={{
									opacity: 0,
									height: 0,
									visibility: 'hidden',
									overflow: 'hidden',
								}}>
								<p className='dscrb-offer'>
									Tworzymy responsywne, estetycznie dopracowane strony internetowe, które doskonale prezentują się na
									każdym urządzeniu. Nasze strony są intuicyjne, szybkie i zoptymalizowane pod SEO, aby Twoja marka
									skutecznie dotarła do szerokiego grona odbiorców.
								</p>
							</div>
							<p className='dscrb-offer-desktops'>
								Tworzymy responsywne, estetycznie dopracowane strony internetowe, które doskonale prezentują się na
								każdym urządzeniu. Nasze strony są intuicyjne, szybkie i zoptymalizowane pod SEO, aby Twoja marka
								skutecznie dotarła do szerokiego grona odbiorców.
							</p>
						</div>
						<div className='element'>
							<div className='logo-title-offer'>
								<img src='/img/online-shop.png' className='logo-offer' />
								<div className='offer-title-button'>
									<p className='head-element'>Sklepy internetowe</p>
									<button onClick={() => setDescriptionVisible3(!isDescriptionVisible3)}>
										<img
											src={isDescriptionVisible3 ? '/img/arrow-up.png' : '/img/down.png'}
											alt={isDescriptionVisible3 ? 'Ukryj opis' : 'Pokaż opis'}
										/>
									</button>
								</div>
							</div>
							<div
								ref={descriptionRef3}
								style={{
									opacity: 0,
									height: 0,
									visibility: 'hidden',
									overflow: 'hidden',
								}}>
								<p className='dscrb-offer'>
									Specjalizujemy się w projektowaniu sklepów internetowych, które nie tylko świetnie wyglądają, ale są
									też łatwe w obsłudze i bezpieczne. Nasze rozwiązania e-commerce są skrojone na miarę, aby
									maksymalizować sprzedaż i zwiększać zadowolenie klientów.
								</p>
							</div>
							<p className='dscrb-offer-desktops'>
								Specjalizujemy się w projektowaniu sklepów internetowych, które nie tylko świetnie wyglądają, ale są też
								łatwe w obsłudze i bezpieczne. Nasze rozwiązania e-commerce są skrojone na miarę, aby maksymalizować
								sprzedaż i zwiększać zadowolenie klientów.
							</p>
						</div>
						<div className='element'>
							<div className='logo-title-offer'>
								<img src='/img/mobile-development.png' className='logo-offer' />
								<div className='offer-title-button'>
									<p className='head-element'>Aplikacje </p>
									<button onClick={() => setDescriptionVisible4(!isDescriptionVisible4)}>
										<img
											src={isDescriptionVisible4 ? '/img/arrow-up.png' : '/img/down.png'}
											alt={isDescriptionVisible4 ? 'Ukryj opis' : 'Pokaż opis'}
										/>
									</button>
								</div>
							</div>
							<div
								ref={descriptionRef4}
								style={{
									opacity: 0,
									height: 0,
									visibility: 'hidden',
									overflow: 'hidden',
								}}>
								<p className='dscrb-offer'>
									Projektujemy i rozwijamy aplikacje mobilne i webowe, które wyróżniają się na tle konkurencji.
									Oferujemy innowacyjne, skalowalne i funkcjonalne rozwiązania, dostosowane do potrzeb Twojego biznesu i
									oczekiwań użytkowników.
								</p>
							</div>
							<p className='dscrb-offer-desktops'>
								Projektujemy i rozwijamy aplikacje mobilne i webowe, które wyróżniają się na tle konkurencji. Oferujemy
								innowacyjne, skalowalne i funkcjonalne rozwiązania, dostosowane do potrzeb Twojego biznesu i oczekiwań
								użytkowników.
							</p>
						</div>
					</div>
				</section>

				<section id='workwith'>
					<h3>Pracujemy w...</h3>
					<div className='techs'>
						<div className='part1'>
							<img src='/img/vsc.webp' />
							<img src='/img/html.webp' />
							<img src='/img/css.webp' />
							<img src='/img/JavaScript-logo.webp' />
						</div>
						<div className='part1'>
							<img src='/img/nodejss.webp' />
							<img src='/img/mongodb.webp' />
							<img src='/img/react.webp' />
							<img src='/img/nextjs.webp' />
						</div>
						<div className='part1'>
							<img src='/img/gatsby.webp' />
							<img src='/img/vue.webp' />
							<img src='/img/ts.webp' />
							<img src='/img/php.webp' />
						</div>
						<div className='part1'>
							<img src='/img/figma.webp' />
							<img src='/img/sql.webp' />
							<img src='/img/shoper.webp' />
						</div>
						<div className='part1'>
							<img src='/img/ps.webp' className='ps' />
							<img src='/img/wp.webp' />
						</div>
					</div>

					<div className='techdesktop'>
						<div className='part1'>
							<img src='/img/vsc.webp' />
							<img src='/img/html.webp' />
							<img src='/img/css.webp' />
							<img src='/img/JavaScript-logo.webp' />
							<img src='/img/nodejss.webp' />
							<img src='/img/mongodb.webp' />
							<img src='/img/react.webp' />
							<img src='/img/nextjs.webp' />
						</div>
						{/* <div className='part1'>
							<img src='/img/nodejss.webp' />
							<img src='/img/mongodb.webp' />
							<img src='/img/react.webp' />
							<img src='/img/nextjs.webp' />
						</div> */}
						<div className='part1'>
							<img src='/img/gatsby.webp' />
							<img src='/img/vue.webp' />
							<img src='/img/ts.webp' />
							<img src='/img/php.webp' />
							<img src='/img/figma.webp' />
							<img src='/img/sql.webp' />
							<img src='/img/shoper.webp' />
							<img src='/img/ps.webp' className='ps' />
							<img src='/img/wp.webp' />
						</div>
						{/* <div className='part1'>
							<img src='/img/figma.webp' />
							<img src='/img/sql.webp' />
							<img src='/img/shoper.webp' />
						</div> */}
						{/* <div className='part1'>
							<img src='/img/ps.webp' className='ps' />
							<img src='/img/wp.webp' />
						</div> */}
					</div>
				</section>

				<section id='listenandact'>
					<div className='centercontent'>
						<h2 className='headlaa'>Słuchamy i Działamy...</h2>
						<p className='txtlaa'>
							W Codemly wierzymy, że skuteczna komunikacja jest kluczem do sukcesu każdego projektu. Gdy potrzebujesz
							wyjątkowego projektu graficznego dla swojej aplikacji, nasz zespół przeprowadza z Tobą szczegółowy wywiad.
							Dzięki temu głęboko rozumiemy Twoje potrzeby i oczekiwania. <br></br>
							<br></br>Następnie, angażujemy się w rozmowy o funkcjonalnościach Twojej strony internetowej, sklepu czy
							aplikacji, aby zapewnić Ci rozwiązania, które są nie tylko technologicznie zaawansowane, ale również
							intuicyjne, przyjazne użytkownikowi, i co najważniejsze, wydajne i zoptymalizowane
						</p>
						<h2 className='headlaa'>Dbamy o nasze projekty...</h2>
						<Carousel slides={imgs} />
					</div>
				</section>

				<section id='realization'>
					<h2>
						<span>{'< '}</span>Realizacje<span>{' />'}</span>
					</h2>
				</section>
				{/* <Carousel slides={imgs} />; */}
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
