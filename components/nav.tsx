import React, { useState, useEffect, useRef, MouseEvent } from 'react'
import { gsap } from 'gsap'
import { useTranslation } from 'next-i18next';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Navbar: React.FC = () => {
	const [isLinksVisible, setLinksVisible] = useState<boolean>(false)
	const linksRef = useRef<HTMLDivElement>(null)
	const [logoSrc, setLogoSrc] = useState('/img/c6b.png')
	const [hasScrolled, setHasScrolled] = useState(false)
	const { t } = useTranslation('common');

	const handleScroll = () => {
		const offset = window.scrollY
		if (offset > 370 && !hasScrolled) {
			setLogoSrc('/img/c2.png') // Ścieżka do nowego obrazu
			setHasScrolled(true) // Ustaw flagę, że scroll już się wydarzył
		} else if (offset <= 370 && hasScrolled) {
			setLogoSrc('/img/c6b.png') // Powrót do oryginalnego obrazu
			setHasScrolled(false) // Reset flagi, gdy wrócimy na górę
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [hasScrolled])

	useEffect(() => {
		if (linksRef.current) {
			gsap.set(linksRef.current, { autoAlpha: 0, y: -100 });
			gsap.set(linksRef.current.children, { opacity: 0, y: 20 }); // Inicjalizacja stanu linków
		}
	}, []);
	
	const toggleLinks = () => {
		const newIsLinksVisible = !isLinksVisible;
		setLinksVisible(newIsLinksVisible);
	
		if (linksRef.current) {
			const links = Array.from(linksRef.current.children);
			const tl = gsap.timeline();
	
			if (newIsLinksVisible) {
				tl.to(linksRef.current, {
					duration: 1.5,
					ease: 'power1.out',
					y: 0,
					autoAlpha: 1,
				}).to(links, {
					duration: 0.5,
					ease: 'power1.out',
					y: 0,
					opacity: 1,
					stagger: 0.2,
				}, "-=0.5"); // Rozpoczęcie animacji linków przed zakończeniem animacji kontenera
			} else {
				tl.to(links, {
					duration: 0.1,
					ease: 'power1.in',
					y: 20,
					opacity: 0,
					stagger: 0.1
				}).to(linksRef.current, {
					duration: 0.1,
					ease: 'power1.in',
					y: -100,
					autoAlpha: 0,
				}, "+=0.2"); // Opóźnienie zamykania kontenera
			}
		}
	};
	
	
	
	

	useEffect(() => {
		if (linksRef.current) {
			if (isLinksVisible) {
				linksRef.current.style.display = 'flex'
				linksRef.current.style.animation = 'slideInUp 0.5s forwards'
			} else {
				linksRef.current.style.animation = 'slideOutDown 0.5s forwards'
				setTimeout(() => {
					if (linksRef.current) {
						linksRef.current.style.display = 'none'
					}
				}, 500) // czas trwania animacji w ms
			}
		}
	}, [isLinksVisible])

	return (
		<>
			<div className='uplogo'>
				<img
					src={logoSrc}
					alt='logo'
					className={hasScrolled ? 'logo-hidden' : ''}
					onLoad={() => setHasScrolled(false)}
				/>
			</div>
			{/* <div className='mediamob'>
				<div className='social'>
					<img src='/img/facebook-f.svg' />
					<img src='/img/instagram.svg' />
				</div>
				<div className='social'>
					<img src='/img/phone-volume-solid.svg' />
					<img src='/img/envelope-solid.svg' />
				</div>
			</div> */}
			<div className='navbar' id='myNavbar'>
				<div className='menu'>
					<label>
						<input type='checkbox' id='check' onClick={toggleLinks} />
						<span></span>
						<span></span>
						<span></span>
					</label>
					<div className='socialecontact'>
						<a href=''>
							<img src='/img/phone-volume-solid.svg' alt='' />
						</a>
						<a href=''>
							<img src='/img/envelope-solid.svg' alt='' />
						</a>
						<a href=''>
							<img src='/img/facebook-f.svg' alt='' />
						</a>
						<a href=''>
							<img src='/img/instagram.svg' alt='' />
						</a>
					</div>
				</div>
				<div className='links' ref={linksRef}>
					{/* ... links ... */}
					<a href='#news'>{t('welcome')}</a>
					<a href='#news'>{'< REALIZACJE />'}</a>
					<a href='#news'>{'< KONTAKT />'}</a>
				</div>
			</div>

			<div className='desktop-nav'>
				<div className='desktop-nav-logo'>
					<img src='/img/c6b.png' />
				</div>
				<div className='desktop-nav-links'>
					<a href='#news'>{t('welcome')}</a>
					<a href='#news'>{'< REALIZACJE />'}</a>
					<a href='#news'>{'< KONTAKT />'}</a>
				</div>
				<div className='mailtel'>
					<div className='tel'>
						<img src='/img/phone-volume-solid.svg' alt='' />
						<a href=''>+48 516 598 792</a>
					</div>
					<div className='mailmess'>
						<img src='/img/envelope-solid.svg' alt='' />
						<a href=''>office@codemly.com</a>
					</div>
				</div>
				<div className='media'>
					<img src='/img/facebook-f.svg' />
					<img src='/img/instagram.svg' />
				</div>
			</div>
		</>
	)
}

export default Navbar