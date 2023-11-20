"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/index.tsx
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (pages),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.tsx
var _app = __webpack_require__(178);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "gsap"
const external_gsap_namespaceObject = require("gsap");
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(377);
;// CONCATENATED MODULE: ./components/nav.tsx




const Navbar = ()=>{
    const [isLinksVisible, setLinksVisible] = (0,external_react_.useState)(false);
    const linksRef = (0,external_react_.useRef)(null);
    const [logoSrc, setLogoSrc] = (0,external_react_.useState)("/img/c6b.png");
    const [hasScrolled, setHasScrolled] = (0,external_react_.useState)(false);
    const { t } = (0,external_next_i18next_.useTranslation)("common");
    const handleScroll = ()=>{
        const offset = window.scrollY;
        if (offset > 370 && !hasScrolled) {
            setLogoSrc("/img/c2.png") // Ścieżka do nowego obrazu
            ;
            setHasScrolled(true) // Ustaw flagę, że scroll już się wydarzył
            ;
        } else if (offset <= 370 && hasScrolled) {
            setLogoSrc("/img/c6b.png") // Powrót do oryginalnego obrazu
            ;
            setHasScrolled(false) // Reset flagi, gdy wrócimy na górę
            ;
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        hasScrolled
    ]);
    (0,external_react_.useEffect)(()=>{
        if (linksRef.current) {
            external_gsap_namespaceObject.gsap.set(linksRef.current, {
                autoAlpha: 0,
                y: -100
            });
            external_gsap_namespaceObject.gsap.set(linksRef.current.children, {
                opacity: 0,
                y: 20
            }); // Inicjalizacja stanu linków
        }
    }, []);
    const toggleLinks = ()=>{
        const newIsLinksVisible = !isLinksVisible;
        setLinksVisible(newIsLinksVisible);
        if (linksRef.current) {
            const links = Array.from(linksRef.current.children);
            const tl = external_gsap_namespaceObject.gsap.timeline();
            if (newIsLinksVisible) {
                tl.to(linksRef.current, {
                    duration: 1.5,
                    ease: "power1.out",
                    y: 0,
                    autoAlpha: 1
                }).to(links, {
                    duration: 0.5,
                    ease: "power1.out",
                    y: 0,
                    opacity: 1,
                    stagger: 0.2
                }, "-=0.5"); // Rozpoczęcie animacji linków przed zakończeniem animacji kontenera
            } else {
                tl.to(links, {
                    duration: 0.1,
                    ease: "power1.in",
                    y: 20,
                    opacity: 0,
                    stagger: 0.1
                }).to(linksRef.current, {
                    duration: 0.1,
                    ease: "power1.in",
                    y: -100,
                    autoAlpha: 0
                }, "+=0.2"); // Opóźnienie zamykania kontenera
            }
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (linksRef.current) {
            if (isLinksVisible) {
                linksRef.current.style.display = "flex";
                linksRef.current.style.animation = "slideInUp 0.5s forwards";
            } else {
                linksRef.current.style.animation = "slideOutDown 0.5s forwards";
                setTimeout(()=>{
                    if (linksRef.current) {
                        linksRef.current.style.display = "none";
                    }
                }, 500) // czas trwania animacji w ms
                ;
            }
        }
    }, [
        isLinksVisible
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "uplogo",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: logoSrc,
                    alt: "logo",
                    className: hasScrolled ? "logo-hidden" : "",
                    onLoad: ()=>setHasScrolled(false)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "navbar",
                id: "myNavbar",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "menu",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                        type: "checkbox",
                                        id: "check",
                                        onClick: toggleLinks
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "socialecontact",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/img/phone-volume-solid.svg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/img/envelope-solid.svg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/img/facebook-f.svg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/img/instagram.svg",
                                            alt: ""
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "links",
                        ref: linksRef,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#news",
                                children: t("welcome")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#news",
                                children: "< REALIZACJE />"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#news",
                                children: "< KONTAKT />"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "desktop-nav",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "desktop-nav-logo",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/img/c6b.png"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "desktop-nav-links",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#news",
                                children: t("welcome")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#news",
                                children: "< REALIZACJE />"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#news",
                                children: "< KONTAKT />"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mailtel",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "tel",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/img/phone-volume-solid.svg",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "",
                                        children: "+48 516 598 792"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mailmess",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/img/envelope-solid.svg",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "",
                                        children: "office@codemly.com"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "media",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/img/facebook-f.svg"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/img/instagram.svg"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const nav = (Navbar);

;// CONCATENATED MODULE: external "next-i18next/serverSideTranslations"
const serverSideTranslations_namespaceObject = require("next-i18next/serverSideTranslations");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.tsx







const Home = ()=>{
    const [isDescriptionVisible, setDescriptionVisible] = (0,external_react_.useState)(false);
    const [isDescriptionVisible2, setDescriptionVisible2] = (0,external_react_.useState)(false);
    const [isDescriptionVisible3, setDescriptionVisible3] = (0,external_react_.useState)(false);
    const [isDescriptionVisible4, setDescriptionVisible4] = (0,external_react_.useState)(false);
    const descriptionRef = (0,external_react_.useRef)(null);
    const descriptionRef2 = (0,external_react_.useRef)(null);
    const descriptionRef3 = (0,external_react_.useRef)(null);
    const descriptionRef4 = (0,external_react_.useRef)(null);
    const router = (0,router_namespaceObject.useRouter)();
    const { locale } = router;
    const title = locale === "pl" ? "Tytuł po polsku" : "Title in English";
    const description = locale === "pl" ? "Opis po polsku" : "Description in English";
    const handleLocaleChange = (locale)=>{
        router.push(router.pathname, router.asPath, {
            locale
        });
    };
    const toggleAnimation = (ref, isVisible)=>{
        external_gsap_default().to(ref.current, {
            autoAlpha: isVisible ? 1 : 0,
            height: isVisible ? "auto" : 0,
            duration: 0.5
        });
    };
    (0,external_react_.useEffect)(()=>{
        toggleAnimation(descriptionRef, isDescriptionVisible);
        toggleAnimation(descriptionRef2, isDescriptionVisible2);
        toggleAnimation(descriptionRef3, isDescriptionVisible3);
        toggleAnimation(descriptionRef4, isDescriptionVisible4);
    }, [
        isDescriptionVisible,
        isDescriptionVisible2,
        isDescriptionVisible3,
        isDescriptionVisible4
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "alternate",
                        hrefLang: "en",
                        href: "https://www.twojadomena.com/en"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "alternate",
                        hrefLang: "pl",
                        href: "https://www.twojadomena.com/pl"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "alternate",
                        hrefLang: "x-default",
                        href: "https://www.twojadomena.com/"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(nav, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                        className: "header-ms",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("video", {
                                className: "video-background",
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("source", {
                                    src: "/img/video-bgc-mobile-re-2.mp4",
                                    type: "video/mp4"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "welcome",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/img/cbgcno.png",
                                    className: "white-ms-logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "line"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "btn-lang",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        onClick: ()=>handleLocaleChange("pl"),
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/img/poland.png"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        onClick: ()=>handleLocaleChange("en"),
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/img/united-kingdom.png"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        id: "about",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "outline-text",
                                children: "CODEMLY = FRIENDLY"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "title-about",
                                children: "Połączenie Technologii i Przyjazności"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/img/cbgcno.png"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "element-about",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "txt-about",
                                        children: [
                                            "Nazwa naszej firmy uosabia to, co dla nas najważniejsze: pasję do kodowania i tworzenia przyjaznego środowiska dla naszych klient\xf3w i zespołu.",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "txt-about",
                                        children: [
                                            "Słowo ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "code"
                                            }),
                                            " w naszej nazwie odzwierciedla nasze umiejętności techniczne i zamiłowanie do tworzenia oprogramowania. ",
                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                            "Natomiast ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "mly"
                                            }),
                                            " jest odzwierciedleniem naszej misji, aby każdy aspekt naszej pracy był przyjazny, dostępny i miły w obsłudze."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "txt-about",
                                        children: [
                                            "Dążymy do tego, aby każdy projekt ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "Codemly"
                                            }),
                                            " był synonimem technologicznej doskonałości i ciepłego, ludzkiego podejścia."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "txt-about",
                                        children: [
                                            "Działając na rynkach krajowych i międzynarodowych, dążymy do tego, aby każdy projekt ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "Codemly"
                                            }),
                                            " ",
                                            "był synonimem technologicznej doskonałości i ciepłego, ludzkiego podejścia. Kodujemy nie tylko technologię – kodujemy doświadczenia, kt\xf3re zbliżają ludzi i technologię."
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        id: "offer",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "< "
                                    }),
                                    "Oferta",
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: " />"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "elements-offer",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "element",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "logo-title-offer",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/img/web-design.png",
                                                        className: "logo-offer"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "offer-title-button",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "head-element",
                                                                children: "Projekty graficzne"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                onClick: ()=>setDescriptionVisible(!isDescriptionVisible),
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: isDescriptionVisible ? "/img/arrow-up.png" : "/img/down.png",
                                                                    alt: isDescriptionVisible ? "Ukryj opis" : "Pokaż opis"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                ref: descriptionRef,
                                                style: {
                                                    opacity: 0,
                                                    height: 0,
                                                    visibility: "hidden",
                                                    overflow: "hidden"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "dscrb-offer",
                                                    children: "Specjalizujemy się w tworzeniu unikalnych projekt\xf3w graficznych dla stron, sklep\xf3w i aplikacji. Twoja wizja, nasze wykonanie – kreujemy design, kt\xf3ry przyciąga i zapada w pamięć."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "dscrb-offer-desktops",
                                                children: "Specjalizujemy się w tworzeniu unikalnych projekt\xf3w graficznych dla stron, sklep\xf3w i aplikacji. Twoja wizja, nasze wykonanie – kreujemy design, kt\xf3ry przyciąga i zapada w pamięć."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "element",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "logo-title-offer",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/img/web-programming.png",
                                                        className: "logo-offer"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "offer-title-button",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "head-element",
                                                                children: "Strony internetowe"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                onClick: ()=>setDescriptionVisible2(!isDescriptionVisible2),
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: isDescriptionVisible2 ? "/img/arrow-up.png" : "/img/down.png",
                                                                    alt: isDescriptionVisible2 ? "Ukryj opis" : "Pokaż opis"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                ref: descriptionRef2,
                                                style: {
                                                    opacity: 0,
                                                    height: 0,
                                                    visibility: "hidden",
                                                    overflow: "hidden"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "dscrb-offer",
                                                    children: "Tworzymy responsywne, estetycznie dopracowane strony internetowe, kt\xf3re doskonale prezentują się na każdym urządzeniu. Nasze strony są intuicyjne, szybkie i zoptymalizowane pod SEO, aby Twoja marka skutecznie dotarła do szerokiego grona odbiorc\xf3w."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "dscrb-offer-desktops",
                                                children: "Tworzymy responsywne, estetycznie dopracowane strony internetowe, kt\xf3re doskonale prezentują się na każdym urządzeniu. Nasze strony są intuicyjne, szybkie i zoptymalizowane pod SEO, aby Twoja marka skutecznie dotarła do szerokiego grona odbiorc\xf3w."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "element",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "logo-title-offer",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/img/online-shop.png",
                                                        className: "logo-offer"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "offer-title-button",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "head-element",
                                                                children: "Sklepy internetowe"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                onClick: ()=>setDescriptionVisible3(!isDescriptionVisible3),
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: isDescriptionVisible3 ? "/img/arrow-up.png" : "/img/down.png",
                                                                    alt: isDescriptionVisible3 ? "Ukryj opis" : "Pokaż opis"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                ref: descriptionRef3,
                                                style: {
                                                    opacity: 0,
                                                    height: 0,
                                                    visibility: "hidden",
                                                    overflow: "hidden"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "dscrb-offer",
                                                    children: "Specjalizujemy się w projektowaniu sklep\xf3w internetowych, kt\xf3re nie tylko świetnie wyglądają, ale są też łatwe w obsłudze i bezpieczne. Nasze rozwiązania e-commerce są skrojone na miarę, aby maksymalizować sprzedaż i zwiększać zadowolenie klient\xf3w."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "dscrb-offer-desktops",
                                                children: "Specjalizujemy się w projektowaniu sklep\xf3w internetowych, kt\xf3re nie tylko świetnie wyglądają, ale są też łatwe w obsłudze i bezpieczne. Nasze rozwiązania e-commerce są skrojone na miarę, aby maksymalizować sprzedaż i zwiększać zadowolenie klient\xf3w."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "element",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "logo-title-offer",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/img/mobile-development.png",
                                                        className: "logo-offer"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "offer-title-button",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "head-element",
                                                                children: "Aplikacje "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                onClick: ()=>setDescriptionVisible4(!isDescriptionVisible4),
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: isDescriptionVisible4 ? "/img/arrow-up.png" : "/img/down.png",
                                                                    alt: isDescriptionVisible4 ? "Ukryj opis" : "Pokaż opis"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                ref: descriptionRef4,
                                                style: {
                                                    opacity: 0,
                                                    height: 0,
                                                    visibility: "hidden",
                                                    overflow: "hidden"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "dscrb-offer",
                                                    children: "Projektujemy i rozwijamy aplikacje mobilne i webowe, kt\xf3re wyr\xf3żniają się na tle konkurencji. Oferujemy innowacyjne, skalowalne i funkcjonalne rozwiązania, dostosowane do potrzeb Twojego biznesu i oczekiwań użytkownik\xf3w."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "dscrb-offer-desktops",
                                                children: "Projektujemy i rozwijamy aplikacje mobilne i webowe, kt\xf3re wyr\xf3żniają się na tle konkurencji. Oferujemy innowacyjne, skalowalne i funkcjonalne rozwiązania, dostosowane do potrzeb Twojego biznesu i oczekiwań użytkownik\xf3w."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);
// Reszta kodu komponentu strony...
const getStaticProps = async (context)=>{
    const { locale } = context;
    return {
        props: {
            ...await (0,serverSideTranslations_namespaceObject.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=private-next-pages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2F_preferredRegion_absolutePagePath_private_next_pages_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: (_document_default())
    },
    userland: pages_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,815,178], () => (__webpack_exec__(623)));
module.exports = __webpack_exports__;

})();