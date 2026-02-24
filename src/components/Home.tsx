import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import BlogCard from './BlogCard';
import { ArrowRight, Rss } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'home' | 'products') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfFnmF-hD3x1Q66fCOqE-pUrxdwLbWiLqfQanFlvTtjX3bnpWIzGF40diqu7lVyvBy1n1O0bPDD7ULgMHh0ncYXWDschu94Au8jwIil_4OTb4SZ6c_I1yj9LbRCqmal1nLGyMafCFd60hl66DKBEnWPXJTWOMbHqIFaY-qDnPxSbo90XRoJ6RMzEXzLpaVKXqRMbzz0lVs9BaKnnOSvblcZ7LqDggF2h4ERYSlDxiYZ9l5uobK992Ig_G9kWxbwcWlXoCjRNUozzA"
            alt="Traditional Jars"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            Premium Natural Fermentation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white leading-[1.2] md:leading-[1.15] mb-8 tracking-tight drop-shadow-2xl"
          >
            시간과 정성이 만드는<br className="hidden md:block" /> 생명의 에너지, <span className="text-primary">효소명가</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            전통의 지혜와 현대 과학이 만나 당신의 일상에 건강한 아름다움을 전합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-primary text-deep-green px-10 py-4 rounded-full font-extrabold text-lg hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/30">
              브랜드 스토리 보기
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-extrabold text-lg hover:bg-white/20 transition-all"
            >
              제품 둘러보기
            </button>
          </motion.div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-24 bg-natural-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-deep-green text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">Science of Fermentation</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">발효의 과학적 원리</h3>
            <div className="w-16 md:w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Infographic */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <div className="relative bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100">
                <div className="aspect-square flex flex-col items-center justify-center space-y-8">
                  <div className="flex items-center justify-around w-full">
                    <div className="w-24 h-24 bg-natural-beige rounded-full flex items-center justify-center border-4 border-primary/20 shadow-inner">
                      <span className="text-4xl text-deep-green">🌾</span>
                    </div>
                    <div className="flex-1 h-px border-t-2 border-dashed border-primary/30 mx-4 relative">
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary bg-white px-2 animate-pulse">🦠</span>
                    </div>
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex flex-col items-center justify-center border-4 border-primary shadow-xl">
                      <span className="text-5xl mb-1">⚡</span>
                      <span className="text-[10px] font-bold text-deep-green">ACTIVE</span>
                    </div>
                  </div>
                  <div className="text-center space-y-4">
                    <p className="text-deep-green font-bold text-xl">미생물 영양소 분해 과정</p>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                      거대 분자의 복합 영양소를 유익 미생물이 직접 분해하여 인체가 즉시 흡수 가능한 저분자 상태로 전환합니다.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden"><div className="h-full w-2/3 bg-primary" /></div>
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden"><div className="h-full w-full bg-primary" /></div>
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-primary" /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="flex flex-col gap-8">
              <SciencePoint
                title="고분자 영양소의 저분자화"
                description="체내 흡수가 어려운 거대 영양소를 잘게 쪼개어 영양 전달 효율을 극대화합니다."
                icon="🧬"
              />
              <SciencePoint
                title="항산화 성분 활성화"
                description="발효 숙성 과정을 거치며 원재료의 항산화 성분을 극대화하여 활력을 부여합니다."
                icon="🛡️"
              />
              <SciencePoint
                title="천연 유익균 생성"
                description="인위적 첨가물 없이 자연 배양된 유익균이 장내 환경을 건강하게 케어합니다."
                icon="🧪"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-deep-green text-sm font-bold tracking-[0.2em] uppercase mb-3">Our Journal</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">발효 이야기</h3>
            </div>
            <a
              href="https://m.blog.naver.com/papasong2020?noTrackingCode=true&proxyReferer=&tab=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold flex items-center gap-2 hover:underline"
            >
              블로그 전체보기 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-green relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
            효소명가의 더 많은 이야기가<br /><span className="text-primary">네이버 블로그</span>에 담겨 있습니다
          </h2>
          <a
            href="https://m.blog.naver.com/papasong2020?noTrackingCode=true&proxyReferer=&tab=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-primary text-deep-green px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20"
          >
            <Rss className="w-6 h-6" />
            효소명가 네이버 블로그 바로가기
          </a>
        </div>
      </section>
    </div>
  );
}

function SciencePoint({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="group flex gap-6 items-start p-8 bg-white rounded-2xl shadow-lg border-l-8 border-primary transition-all"
    >
      <div className="bg-primary/10 p-4 rounded-xl text-2xl group-hover:bg-primary transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
