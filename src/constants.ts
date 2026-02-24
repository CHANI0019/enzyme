import { NavItem, Product, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
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
    image: '/images/p1.jpg',
    tag: 'Best',
    category: 'Enzyme Powders'
  },
  {
    id: '2',
    name: '야생 인삼 추출물',
    description: '6년 숙성 프리미엄 에너지 토닉',
    price: 89000,
    image: '/images/p2.jpg',
    tag: 'New',
    category: 'Fermented Extracts'
  },
  {
    id: '3',
    name: 'Heritage Gift Set',
    description: '엄선된 최고급 발효 제품 모음s',
    price: 120000,
    image: '/images/p3.jpg',
    tag: 'Best',
    category: 'Gift Sets'
  },
  {
    id: '4',
    name: '데일리 효소 스틱종류',
    description: '바쁜 일상 속 휴대용 웰빙',
    price: 38000,
    image: '/images/p4.jpg',
    tag: 'New',
    category: 'Enzyme Powders'
  },
  {
    id: '5',
    name: '숙성 자두 추출물',
    description: '10년 자연 발효 엘릭서(elixir)',
    price: 52000,
    image: '/images/p5.jpg',
    tag: 'Premium',
    category: 'Fermented Extracts'
  },
  {
    id: '6',
    name: '발효된 된장',
    description: '깊고 풍부한 맛을 자랑하는 전통 레시피',
    price: 28000,
    image: '/images/p6.jpg',
    tag: 'Best',
    category: 'Fermented Extracts'
  },
  {
    id: '7',
    name: '흑마늘 에센스',
    description: '활력과 면역력을 극대화하세요',
    price: 75000,
    image: '/images/p7.jpg',
    tag: 'Best',
    category: 'Fermented Extracts'
  },
  {
    id: '8',
    name: '싹튼 곡물 분말',
    description: '건강한 신진대사를 위한 통곡물',
    price: 32000,
    image: '/images/p8.jpg',
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
