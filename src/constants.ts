import { NavItem, Product, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#' },
  { label: 'Products', href: '#products' },
  { label: 'Fermentation Science', href: '#science' },
  { label: 'Blog', href: 'https://m.blog.naver.com/papasong2020?noTrackingCode=true&proxyReferer=&tab=1' },
  { label: 'Contact', href: 'https://map.naver.com/v5/search/%EC%9D%B8%EC%B2%9C%20%EC%84%9C%EA%B5%AC%20%EC%84%9D%EB%82%A8%EB%8F%99%20455' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '프리미엄 곡물 효소',
    description: '고농축 소화 기능 보조제',
    price: 45000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tu1sjP9puhLxShZtGvQ25h3lineWbQg-CEplM1cUktlpIbIpDmS1xbu9WBeZelojoR-0a781dnpIfuF9tzVAcnZXIDQwfEAtmbSIdCBgeALkZZ67M_6pyY7IMhYVnQyIOnvGnyPJSemWoWOBHDPuTFe5yt0LIoBd7NgNhXwEe1_dq-Z8FP7bSgPBtUyUO_Y-6Wq8tkX9G32dlGtse1rLOcSO9qJaacGQzsLyXAjIPU0uPr8HxbhsNz8YuddxLMqoYuJwfehZqs4',
    tag: 'Best',
    category: 'Enzyme Powders'
  },
  {
    id: '2',
    name: '야생 인삼 추출물',
    description: '6년 숙성 프리미엄 에너지 토닉',
    price: 89000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBz1kiB60GR-ZvDWVR8To-ZtygAvd4ADkFFEl_A6o6vVw4h5wDTQC3TXmgqBodpxt8YjQOuRpF3Uf93RbYARciAUcz-87-qEZYVpkZg4bX5vclXwDQWsupO9129uuO8zMT9WsITAb3R89eSsvyklDhy0ukXMCuKe_PvqbUWh100ypL-afAmEijtON2Iwwtk-rUAiwpEI1LxgyEOYlVSlXtTnZ9VM9Jk5FSyC-B8FJSWFspiETvnotWpovnjxl0Hif0i8SqXl9sFgE',
    tag: 'New',
    category: 'Fermented Extracts'
  },
  {
    id: '3',
    name: 'Heritage Gift Set',
    description: '엄선된 최고급 발효 제품 모음s',
    price: 120000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkTf6vPlLSpgc_r0JdhsefN4JYuXmupqSww5ANmn6d8IiSZA-eRimXr92ra-xKlbQSveOoEmgQ07NNT86bce-fSF0PGHSsFp793hQ8w2hBq4hB9gy7Ja7zuKEEyADDQpK_RfjD5uZ0XLY9nFHnli6M162uk0MLT5dF0KbO02zoC_XfmgK_KYi7xfYFGL7N_r_f5mCW1MoHm6Pof8rJY6cMw-43uNqGptu8UZnHx4uRE8ODKE8ykcoJb0oBHhnQf74I-qBPnGk_kCo',
    tag: 'Best',
    category: 'Gift Sets'
  },
  {
    id: '4',
    name: '데일리 효소 스틱종류',
    description: '바쁜 일상 속 휴대용 웰빙',
    price: 38000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOAMc8WHZYMhZHDmZKS-SGJxSS6mJJuo2VRe1HDBDlfAOhINt4yOPbZUjvOiPBp4Hbvj8U4aPAn4R3zwbvxjmvFNbh7GvPzpkZSDsJUkKdbbcKmSCf8-pheSpgX2GbIvHwrvjq9KY4iCfBV_HSipCcLJQ9GBqXfSiGchCccM3BC2S3_kp2iFY6mNoLRCntRZgIx4nrv7inw6C98QyPBrg5GalMZcFkKHS9vyoGTSrCBO1_eoc0Jtz3LyeJCTpjJTyhtECyO-5yBcQ',
    tag: 'New',
    category: 'Enzyme Powders'
  },
  {
    id: '5',
    name: '숙성 자두 추출물',
    description: '10년 자연 발효 엘릭서(elixir)',
    price: 52000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyXGps9BXMV-sRdoQ6UlI8WJxPi06fbKoLbDfcXPXoC2g-885stqAEwz9Qpz_XZD4QqtysaF1eyXOWMbB371vdOsgRfGKQuHeiKuH_rOWm6at5aA8kOtjFklL7bEUZ-pfst9OgaCazMO0VvcRABS5WggCK6zapPrkPMspEy9Umh8r-czLU8wz7FuOtsXqOEKtcUY4xVYSdJe_U7ocWTPX_jKS7oeodBxuzVp6sWXcamPVDPhSSMpwyCEjLvIOBo4oC6DNvuQbrfiA',
    tag: 'Premium',
    category: 'Fermented Extracts'
  },
  {
    id: '6',
    name: '발효된 된장',
    description: '깊고 풍부한 맛을 자랑하는 전통 레시피',
    price: 28000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfZMmcI-eeagVYIFrzZcxHj83PvvEyD-4EM-8D6iKQOYoMx8AvgJATKVKquNUWChL_IGwYvyCmX7Ago1cYeLkhOdnBvn05UYqgQQCTyLkYXerSjpTaKgCjMGxH5NCd6aoY-JX_rsBimg2rGtlDWT237LkUeBVfzkNmczRZUKBPnDRzYr23lGnCXOOgjeRwEwZUL-RRx_DpDQbMiMYTq9WCnMw9qturHMNjMvxaw9m3F4D9EkB4SYN_LuHwYsK-TK3VR9787B16Bgw',
    tag: 'Best',
    category: 'Fermented Extracts'
  },
  {
    id: '7',
    name: '흑마늘 에센스',
    description: '활력과 면역력을 극대화하세요',
    price: 75000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjKo809EgTvcVnhizSCbLG7KpHxCpHQM9W2BN04l5eG7P-EQNhUinK1pH10o0RXPnrZX_tYpmS2-8KapAZUsGB1aGTMOKvr5vujLlf2VVNHMFGz_3Geg7vvZH1TiygoXOhL284dHpn_fyfKeLY4va_EadmSWm0hN9NSKN0xMDX0vADSvPhYj6Lmna_9oDE2Oj4kbpam_oBe87reAM7eEri455fr3E8EI46PGU-_B4WNRuPhmeNgOE7RO0wsAv7Yt0Q-ySlLgzMVo4',
    tag: 'Best',
    category: 'Fermented Extracts'
  },
  {
    id: '8',
    name: '싹튼 곡물 분말',
    description: '건강한 신진대사를 위한 통곡물',
    price: 32000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBll5wXKZLWMTa9a_1k1lOxFljvKfg4-9zHYEMEGsxlB51gJjrA0ceNWUL4do9Z1InAHJGuybWudV-b_21t8274CSmsyO61mYcyCHAd2_E-UTx0wWwWX_SvDzXJx9dqqFH4JT-51eU_Gx9-noJEOCkgZznri2-nOCG60cMH3hFGtAvttqgmNbtrt8G9G6XP7UHhPwJxux6ZXkTcS4YEdW_JRs731SNEO3PYphBlQNpz8pxQZmdhfFdXcv4qSKizhGjJN-yaLq1dbnw',
    tag: 'New',
    category: 'Enzyme Powders'
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '효소명가가 지켜온 30년 발효의 철학',
    excerpt: '우리는 단순한 음식을 만드는 것이 아니라, 시간이 빚어낸 생명력을 담습니다. 30년간 지켜온 항아리 발효의 비밀을 공개합니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWvGkre2V7q-BzU2jZKpI8395gpUILntXUWbJYdM02lWpCU8e4ixgJg0ZlbRt8qkxCztpNH49lwfTt7lYEMPs3F9Snk7IIm9sPzDEfg-uqTO9enRVRqg6c9mNe-QbRx_I1nGTyow6iNCMtCIthQGhJ2OnWR8FErebySzB-_MA4KxXVltofFKv_Urt83gsrpEbZiihs5MCA_EwBt84FcHV3MtKBKZ-CbpUIA4jPnfQ07oIp4I4NmW8mlUrvV4uAEm-fMF3kbIm9-Sg',
    category: 'Tradition'
  },
  {
    id: '2',
    title: '속이 편해지는 매일 한 잔의 습관',
    excerpt: '현대인의 불규칙한 식습관, 어떻게 개선할 수 있을까요? 효소명가와 함께하는 아침 루틴이 가져온 놀라운 변화를 확인하세요.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAotmUqR0ksKgw2Aejz2rp_JlAyLh4zGNExcepA0-jlKAYb6n00jIqU90sT0914P6v-q3Q0eTb_fJInsoaZZdUw4y2NHJnk2g4OVNXbKQSao3xSAFl1A2ygBbOAgM-qiOXn4ldLWZmLRiG_4PpbKDw0J4Ij9z2MDkE7cwUyUXRxwm-fO8lPK7uYjdHYX6SkmVdXmOWkS0_1BxOKBrGKoOV4qKoMOhftjreMEXPq78lJgzQuEz5V-Q9UQ8sxHBNI6jwtrGOCK1-RBf8',
    category: 'Health'
  },
  {
    id: '3',
    title: '발효 미생물이 우리 몸에 미치는 영향',
    excerpt: '보이지 않는 작은 생명들이 만들어내는 기적. 과학적 데이터를 통해 분석한 효소의 체내 흡수 매커니즘을 알아봅니다.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw2TCD9wzMAuWxtQwesDDtgjQm7gTpPMvjVrv9i4qonQiELy98eY3qno5vZ3ZWWJnmJLAYFIk40LaJlfAKcBtpYZOaivJOJ_L-QChJ4IZZGBN9Wllan3ZZJ66U20DXnxT51K7EmPzF4mvy7dUytN1sGOf8pSuuvfH7_Yfy0Ts9ARv4E0w5zYQxTtgom4rbDZxINGtQwlf4DEVXNCJCCfGAp8yboNEs1jPosvFhAeOc5ovzdDIpCRy06Vx-hAX6WHQvgBlmdyC82-Q',
    category: 'Science'
  },
];
