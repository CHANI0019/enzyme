import React from 'react';
import { Leaf, Share2, Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-primary w-6 h-6" />
              <h2 className="text-xl font-black tracking-tighter text-deep-green">효소명가</h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              전통 발효의 과학을 연구하고 최상의 품질을 전달하는 고품격 발효 전문 브랜드입니다.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Share2 className="w-5 h-5" />} />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<MessageCircle className="w-5 h-5" />} />
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><FooterLink href="#">회사소개</FooterLink></li>
              <li><FooterLink href="#">브랜드 스토리</FooterLink></li>
              <li><FooterLink href="#">발효 과학</FooterLink></li>
              <li><FooterLink href="#">개인정보처리방침</FooterLink></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Products</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><FooterLink href="#">프리미엄 효소액</FooterLink></li>
              <li><FooterLink href="#">발효 분말 시리즈</FooterLink></li>
              <li><FooterLink href="#">전통 장류</FooterLink></li>
              <li><FooterLink href="#">명절 선물세트</FooterLink></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex gap-3">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span>서울특별시 강남구 테헤란로 효소빌딩 5F</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span>02-1234-5678</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span>contact@hyosomyeongga.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2024 효소명가 (Hyo-so-myeong-ga). All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-primary">이용약관</a>
            <a href="#" className="text-xs text-slate-400 hover:text-primary">사업자정보확인</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-deep-green transition-colors">
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-primary transition-colors">
      {children}
    </a>
  );
}
