'use client';

import { useState } from 'react';
import { Mail, ExternalLink, Code2, Send, CheckCircle2 } from 'lucide-react';

export default function PortfolioPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // قائمة مشاريعك المنشورة على Vercel
  const projects = [
    {
      title: "أكاديمية تدريب الفرنسية (Francais Academy)",
      description: "منصة تعليمية متكاملة لتعلم اللغة الفرنسية والتحضير للامتحانات الرسمية (DELF / DALF / TCF) بدعم متعدد اللغات ونظام Freemium.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
      link: "https://francais-academy.vercel.app",
      badge: "منصة تعليمية"
    },
    {
      title: " تسوق shooping",
      description: "موقع خاص بالتسوق لكل القطع الاساسية للابتوبات والموبايلات",
      tags: ["React", "Node.js", "Tailwind CSS"],
      link: "https://taha-tech.fr",
      badge: "تطبيق ويب"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة لاحقاً.");
      }
    } catch (error) {
      alert("تعذر الاتصال بالسيرفر.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl tracking-wide text-blue-400 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-blue-500" />
            <span>معرض الأعمال</span>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#projects" className="hover:text-blue-400 transition">المشاريع</a>
            <a href="#contact" className="hover:text-blue-400 transition">تواصل معي</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-6">
          مطور تطبيقات وواجهات ويب
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
          أبني حلولاً ومنصات رقمية متكاملة وعالية الأداء
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          مرحباً بك! يمكنك استكشاف أبرز مشاريعي الرقمية المنشورة، كما يسعدني تواصلك معي لأي استفسار أو للتعاون في مشاريع جديدة.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-blue-600/25"
          >
            تصفح المشاريع
          </a>
          <a
            href="#contact"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl border border-slate-700 transition"
          >
            تواصل معي
          </a> 

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">المشاريع المنشورة</h2>
            <p className="text-slate-400 text-sm mt-1">اضغط على أي مشروع للانتقال وتجربته حياً على Vercel</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                    {project.badge}
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 hover:bg-blue-600 text-white font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 transition text-sm"
                >
                  <span>زيارة الموقع</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-3xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <Mail className="w-10 h-10 text-blue-500 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-white">تواصل معي</h2>
            <p className="text-slate-400 text-sm mt-1">أرسل رسالتك وسأقوم بالرد عليك في أقرب وقت</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl p-6 text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-2 text-emerald-400" />
              <h3 className="font-bold text-lg mb-1">تم إرسال رسالتك بنجاح!</h3>
              <p className="text-sm text-slate-300">شكراً لتواصلك، سأرد على بريدك الإلكتروني قريباً.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* مفتاح Web3Forms المجاني */}
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">الاسم</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-blue-500 text-sm"
                  placeholder="اسمك الكريم"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-blue-500 text-sm"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">الرسالة</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-blue-500 text-sm resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                {loading ? (
                  <span>جاري الإرسال...</span>
                ) : (
                  <>
                    <span>إرسال الرسالة</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
    <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
  جميع الحقوق محفوظة © 2026
</footer>
    </div>
  );
}