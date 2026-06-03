"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Award,
  BadgeCheck,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  Globe,
  GraduationCap,
  Handshake,
  Headphones,
  Languages,
  LineChart,
  Link,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  School,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type IconTuple = readonly [string, LucideIcon];

const navItems = [
  ["About ISML", "about"],
  ["Why ISML", "why-isml"],
  ["Franchise Model", "model"],
  ["Revenue Model", "revenue"],
  ["Locations", "locations"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"]
];

const heroStats = ["10+ Centres", "20,000+ Students", "French", "German", "Japanese"];

const languages = [
  { label: "French", flag: "FR", color: "#0B4EA2" },
  { label: "German", flag: "DE", color: "#111827" },
  { label: "Japanese", flag: "JP", color: "#C1121F" }
];

const foreignLanguageCards = [
  { title: "Study Abroad", text: "Access universities in France, Germany and Japan.", icon: Plane },
  { title: "Career Growth", text: "High demand among MNCs and global employers.", icon: BriefcaseBusiness },
  { title: "Migration Opportunities", text: "Improve international mobility pathways.", icon: MapPin },
  { title: "Global Skill Development", text: "Develop cross-cultural communication skills.", icon: Languages }
];

const heroHighlights: IconTuple[] = [
  ["Investment from Rs. 5 Lakhs", Banknote],
  ["Revenue Sharing up to 50%", LineChart],
  ["ISML Handles Operations", Target],
  ["Expanding Across India", MapPin],
  ["10+ Years Legacy", Award],
  ["20,000+ Students Impacted", Users]
];

const aboutFeatures = [
  "French Programs",
  "German Programs",
  "Japanese Programs",
  "Online & Offline Learning",
  "Centralized Academic Platform",
  "Student Community",
  "Expert Trainers",
  "Career-Oriented Learning"
];

const cityList = ["Chennai", "Bengaluru", "Coimbatore", "Madurai", "and more"];

const traditional = [
  "Manage admissions",
  "Hire trainers",
  "Marketing responsibility",
  "Academic management",
  "Technology setup",
  "High operational burden"
];

const synergy = [
  "ISML handles admissions",
  "ISML handles marketing",
  "ISML provides trainers",
  "ISML manages academics",
  "ISML provides technology",
  "Low operational burden"
];

const revenueStages = [
  { period: "Months 1-18", partner: "30%", isml: "70%" },
  { period: "Months 19-48", partner: "40%", isml: "60%" },
  { period: "Months 49-60", partner: "50%", isml: "50%" }
];

const locationCards: IconTuple[] = [
  ["College Clusters", GraduationCap],
  ["Hostel & PG Ecosystem", Building2],
  ["Abroad Aspirants", Plane],
  ["Coaching Hub", BookOpen],
  ["Spending Capacity", CircleDollarSign],
  ["Connectivity", MapPin],
  ["Existing Education Ecosystem", School],
  ["Youth Activity Areas", Users],
  ["Sustainable Rentals", ShieldCheck],
  ["Market Potential", LineChart]
];

const journey: IconTuple[] = [
  ["Enquire", MessageCircle],
  ["Discuss", Phone],
  ["Documentation", BookOpen],
  ["Signing of MOU", Handshake],
  ["Initiation of Operations", Sparkles],
  ["Scale Up", LineChart]
];

const modelSteps: IconTuple[] = [
  ["Partner", Handshake],
  ["Infrastructure & Commercial Space", Building2],
  ["ISML Operations", Headphones],
  ["Student Enrolments", Users],
  ["Revenue Sharing", Banknote]
];

const targetCities = [
  "Pune",
  "Bengaluru",
  "Hyderabad",
  "Delhi NCR",
  "Ahmedabad",
  "Mysuru",
  "Indore",
  "Coimbatore",
  "Madurai",
  "Trichy"
];

const partnerTestimonials = [
  {
    name: "Synergy Partner",
    city: "Trichy",
    quote: "ISML gave us a structured model where academics, admissions and brand support moved together from day one."
  },
  {
    name: "Centre Partner",
    city: "Karaikudi",
    quote: "The FOCO approach helped us enter education with clarity, systems and a trusted language-learning brand."
  },
  {
    name: "Growth Partner",
    city: "Madurai",
    quote: "Transparent revenue sharing and central operations made the business easier to understand and scale."
  },
  {
    name: "Expansion Partner",
    city: "Avinashi",
    quote: "The ISML team brought curriculum strength, student support and marketing momentum to our centre."
  }
];

const studentStories = [
  ["Swetha Venkat", "French", "Appreciated ISML's patient teaching, doubt clarification, and continuous support throughout her French learning journey."],
  ["Chitransha Tanwar", "French", "Completed A1 French with strong trainer guidance and described the learning journey at ISML as supportive and rewarding."],
  ["Cris Joy", "German", "Found German grammar easier through simple teaching methods, flexible timings, and a positive classroom environment."],
  ["Nithish Raghavendar T K", "Japanese", "Valued the native-speaker sessions, structured lessons, speaking practice, and JLPT-focused preparation at ISML."],
  ["Priya Raman", "German", "Gained confidence in speaking German through regular practice sessions, clear grammar explanations, and supportive trainer feedback."],
  ["Arjun Prakash", "Japanese", "Started as a beginner and improved steadily with ISML's structured lessons, vocabulary drills, and exam-oriented practice."],
  ["Meera Suresh", "French", "Enjoyed the interactive classes and practical conversations that helped her use French naturally in everyday situations."],
  ["Karthik Narayanan", "German", "Found the flexible batch timing helpful while balancing work, and appreciated the step-by-step certification preparation."],
  ["Ananya Krishnan", "Japanese", "Loved the cultural learning, listening activities, and speaking support that made Japanese feel easier and more engaging."]
];

const faqs = [
  ["What is the investment required?", "The Synergy Pro opportunity starts from Rs. 5,00,000 with a 5-year agreement structure."],
  ["How much revenue can I expect?", "Partner share begins at 30%, grows to 40%, and reaches up to 50% across the agreement timeline."],
  ["Does ISML handle admissions?", "Yes. ISML supports admissions, marketing, academics, trainers, technology and student support."],
  ["Do I need language expertise?", "No. The model is designed for investors and business owners while ISML manages academic operations."],
  ["What support does ISML provide?", "ISML provides trainers, academic delivery, marketing systems, admissions handling, technology and operations."],
  ["How long is the franchise agreement?", "The franchise agreement is structured for 5 years."],
  ["When will operations start?", "Operations begin after discussion, documentation, signing of MOU and centre readiness."]
];

function fadeUp(delay = 0) {
  return {
    initial: false,
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const }
  };
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 18 });
  const rounded = useTransform(spring, (latest) => Math.round(latest).toLocaleString("en-IN"));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function SectionHeading({ eyebrow, title, subtitle, hClass }: { eyebrow?: string; title: string; subtitle?: string; hClass?: string }) {
  return (
    <motion.div className="mx-auto mb-12 max-w-3xl text-center" {...fadeUp()}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#16A6C9]">{eyebrow}</p> : null}
      <h2 className={hClass ?? "text-3xl font-bold text-[#0F172A] md:text-5xl"}>{title}</h2>
      {subtitle ? <p className="mt-5 text-lg leading-8 text-[#64748B]">{subtitle}</p> : null}
    </motion.div>
  );
}

function CtaButton({ children, href = "#contact", variant = "primary" }: { children: React.ReactNode; href?: string; variant?: "primary" | "secondary" }) {
  const isPrimary = variant === "primary";
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-bold transition hover:-translate-y-0.5 ${isPrimary
          ? "bg-[#0B4EA2] text-white shadow-lg shadow-blue-900/20 hover:bg-[#083f84]"
          : "border border-[#0B4EA2]/20 bg-white text-[#0B4EA2] hover:border-[#0B4EA2]"
        }`}
    >
      {children}
      <ArrowRight size={18} />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-5">
        <a href="#home" className="flex flex-col shrink-0 py-1">
          <div className="text-[10px] font-black leading-[1.1] tracking-wide text-[#0B4EA2]">
            <div><span className="text-[#5CE1E6]">I</span>NDIAN</div>
            <div><span className="text-[#5CE1E6]">S</span>CHOOL FOR</div>
            <div><span className="text-[#5CE1E6]">M</span>ODERN</div>
            <div><span className="text-[#5CE1E6]">L</span>ANGUAGES</div>
          </div>
          <span className="mt-[2px] text-[6.5px] font-bold text-[#64748B]">IYPAN Educational Centre Pvt.Ltd</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-600 transition hover:text-[#0B4EA2]">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <CtaButton>Apply Now</CtaButton>
        </div>
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#0B4EA2] lg:hidden"
        >
          <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container grid gap-1 py-4">
            {navItems.map(([label, id]) => (
              <a key={id} onClick={() => setOpen(false)} href={`#${id}`} className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {label}
              </a>
            ))}
            <CtaButton>Apply Now</CtaButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroImage() {
  return (
    <motion.div className="relative" {...fadeUp(0.15)}>
      <div className="overflow-hidden rounded-[8px] border border-white bg-white soft-shadow">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=85"
          alt="Students in a modern classroom"
          className="h-[440px] w-full object-cover"
        />
      </div>
      <div className="absolute -left-4 top-8 rounded-md bg-white p-4 shadow-xl">
        <p className="text-2xl font-black text-[#0B4EA2]">50%</p>
        <p className="text-xs font-bold text-slate-500">Revenue Share</p>
      </div>
      <div className="absolute -bottom-5 right-6 rounded-md bg-white p-4 shadow-xl">
        <p className="text-2xl font-black text-[#0B4EA2]">Rs. 5L</p>
        <p className="text-xs font-bold text-slate-500">Investment From</p>
      </div>
      <div className="absolute right-5 top-5 flex gap-2">
        {languages.map((language) => (
          <span key={language.label} className="rounded-md bg-white/95 px-3 py-2 text-xs font-black shadow" style={{ color: language.color }}>
            {language.flag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialIndex((index) => (index + 1) % partnerTestimonials.length);
    }, 4300);
    return () => window.clearInterval(timer);
  }, []);

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Thank you. The ISML franchise team will contact you soon.");
  }

  return (
    <main id="home" className="overflow-hidden">
      <Header />

      <section className="hero-grid bg-white pt-8 md:pt-12 pb-0 md:pb-0">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <motion.div className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#16A6C9]/25 bg-white px-4 py-2 text-sm font-bold text-[#0B4EA2] shadow-sm" {...fadeUp()}>
              <Award size={17} />
              India&apos;s Fast Growing Language Learning Network
            </motion.div>
            <motion.h1 className="max-w-3xl text-3xl font-black leading-tight text-[#0F172A] md:text-5xl" {...fadeUp(0.05)}>
              Own a Premium <span className="blue-gradient-text">Language Learning Centre</span> in Your City
            </motion.h1>
            <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-[#64748B]" {...fadeUp(0.1)}>
              Partner with ISML through our Synergy Pro FOCO Model and build a profitable education business while ISML handles admissions, academics, operations and growth.
            </motion.p>
            <motion.div className="mt-8 grid gap-3 sm:grid-cols-2" {...fadeUp(0.15)}>
              {heroHighlights.map(([label, Icon]) => (
                <div key={String(label)} className="color-card flex items-center gap-3 rounded-md px-4 py-3">
                  <Icon className="text-[#16A6C9]" size={20} />
                  <span className="text-sm font-bold text-slate-700">{label}</span>
                </div>
              ))}
            </motion.div>
            <motion.div className="mt-8 flex flex-wrap gap-4" {...fadeUp(0.2)}>
              <CtaButton>Apply Now</CtaButton>
              <CtaButton href="#contact" variant="secondary">
                Book a Discussion
              </CtaButton>
            </motion.div>
            <motion.div className="mt-8 flex flex-wrap gap-3" {...fadeUp(0.25)}>
              {heroStats.map((stat) => (
                <span key={stat} className="rounded-md bg-[#F7FAFC] px-4 py-2 text-sm font-black text-[#0B4EA2]">
                  {stat}
                </span>
              ))}
            </motion.div>
          </div>
          <HeroImage />
        </div>
      </section>

      <section className="section-pad pt-4 bg-[#F7FAFC]">
        <div className="container">
          <SectionHeading
            eyebrow="Why foreign languages?"
            title="Why Foreign Languages Are the Future"
            subtitle="Language skills unlock global opportunities in education, careers and migration."
            hClass="text-2xl font-bold text-[#0F172A] md:text-4xl"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foreignLanguageCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="group relative flex flex-col items-center text-center rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(11,78,162,0.08)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,78,162,0.15)] hover:border-[#0B4EA2]/20 overflow-hidden"
                {...fadeUp(index * 0.08)}
              >
                {/* Top accent gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0B4EA2] via-[#16A6C9] to-[#5CE1E6] opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E9FBFF] to-[#D0F0FF] text-[#0B4EA2] transition-all duration-300 group-hover:scale-110 group-hover:from-[#0B4EA2] group-hover:to-[#16A6C9] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25">
                  <card.icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-black text-[#0F172A] group-hover:text-[#0B4EA2] transition-colors">{card.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#64748B]">{card.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["Growing Demand", 68, "%"],
              ["Global Careers", 42, "K+"],
              ["Study Abroad Growth", 3, "x"],
              ["Language Jobs", 25, "K+"]
            ].map(([label, value, suffix]) => (
              <motion.div key={String(label)} className="color-card rounded-[8px] p-6 text-center" {...fadeUp()}>
                <p className="text-4xl font-black text-[#0B4EA2]">
                  <Counter value={Number(value)} suffix={String(suffix)} />
                </p>
                <p className="mt-2 text-sm font-bold text-[#64748B]">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-pad bg-white">
        <div className="container grid items-stretch gap-10 lg:grid-cols-2">
          {/* Image side - Creative Visual Panel */}
          <motion.div className="relative overflow-hidden rounded-3xl h-full min-h-[480px] lg:min-h-0 group shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100" {...fadeUp()}>
            <img src="/about-isml.png" alt="ISML Language Learning Centre" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/10 pointer-events-none" />
            
            {/* Top Floating Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 rounded-xl bg-white/90 backdrop-blur-md px-4 py-2.5 shadow-lg border border-white/20">
              <Sparkles className="h-4 w-4 text-[#16A6C9]" />
              <span className="text-xs font-bold text-[#0F172A]">Premium Experience</span>
            </div>

            {/* Bottom Content / Info Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2.5 rounded-xl bg-white/95 backdrop-blur-sm px-4.5 py-3 shadow-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B4EA2] text-white">
                    <Globe className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#0B4EA2] leading-tight">3 Languages</p>
                    <p className="text-[10px] font-bold text-[#64748B] mt-0.5">French · German · Japanese</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2.5 rounded-xl bg-white/95 backdrop-blur-sm px-4.5 py-3 shadow-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#16A6C9] text-white">
                    <Users className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#16A6C9] leading-tight">20K+ Students</p>
                    <p className="text-[10px] font-bold text-[#64748B] mt-0.5">Certified & Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side - Creative Content Card */}
          <motion.div className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-[#F8FAFC]/50 p-6 lg:p-10 h-full shadow-[0_20px_50px_rgba(15,23,42,0.04)]" {...fadeUp(0.1)}>
            <div>
              <p className="mb-3 inline-block rounded-full bg-[#E9FBFF] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0B4EA2]">About ISML</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-[#0F172A] md:text-4xl">About Indian School for<br />Modern Languages</h2>
              <p className="mt-5 text-base leading-relaxed text-[#64748B]">
                Indian School for Modern Languages (ISML) is a leading language education institute dedicated to helping learners develop practical communication skills, cultural awareness, and global career opportunities through foreign language learning.
              </p>

              {/* Vision & Mission */}
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9FBFF] text-[#0B4EA2]">
                      <Target className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0B4EA2]">Our Vision</h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[#64748B]">To build a society where language barriers are overcome, facilitating seamless communication among diverse communities.</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9FBFF] text-[#16A6C9]">
                      <Award className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#16A6C9]">Our Mission</h3>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[#64748B]">To empower individuals with linguistic proficiency while fostering cross-cultural appreciation and understanding.</p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2 border-t border-slate-100 pt-6">
                {aboutFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E9FBFF] text-[#16A6C9]">
                      <Check size={11} />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Centers card */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#0B4EA2] to-[#16A6C9] p-5 text-white shadow-lg shadow-blue-900/15">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <MapPin className="h-5.5 w-5.5" />
              </div>
              <div>
                <p className="text-base font-black">10+ Centers Across India</p>
                <p className="mt-0.5 text-xs font-semibold text-blue-100 leading-normal">{cityList.join("  ·  ")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="why-isml" className="section-pad bg-[#F7FAFC]">
        <div className="container">
          <SectionHeading title="Why Choose ISML Synergy Pro?" subtitle="A franchise model designed for investors who want growth without operational burden." />
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div className="color-card rounded-[8px] p-7" {...fadeUp()}>
              <h3 className="text-2xl font-black">Traditional Franchise</h3>
              <div className="mt-6 grid gap-4">
                {traditional.map((item) => (
                  <p key={item} className="flex items-center gap-3 font-semibold text-[#64748B]">
                    <X className="text-red-500" size={20} />
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div className="rounded-[8px] bg-[#0B4EA2] p-7 text-white soft-shadow" {...fadeUp(0.1)}>
              <h3 className="text-2xl font-black">ISML Synergy Pro</h3>
              <div className="mt-6 grid gap-4">
                {synergy.map((item) => (
                  <p key={item} className="flex items-center gap-3 font-semibold text-blue-50">
                    <Check className="text-[#8EF0FF]" size={20} />
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div className="color-card mt-8 rounded-[8px] p-8 text-center" {...fadeUp()}>
            <p className="text-2xl font-black text-[#0F172A]">You provide infrastructure. <span className="blue-gradient-text">ISML runs the business.</span></p>
          </motion.div>
        </div>
      </section>

      <section id="model" className="section-pad bg-white">
        <div className="container">
          <SectionHeading
            title="How the Synergy Pro FOCO Model Works"
            subtitle="A clear operating system for centre ownership, student acquisition and revenue sharing."
            hClass="text-2xl font-bold text-[#0F172A] md:text-3xl"
          />
          <div className="grid gap-4 md:grid-cols-5">
            {modelSteps.map(([label, Icon], index) => (
              <motion.div key={String(label)} className="relative flex items-center gap-4 rounded-[8px] border border-[#0B4EA2]/12 bg-[#F7FAFC] p-6 md:block md:text-center" {...fadeUp(index * 0.06)}>
                <Icon className="h-8 w-8 shrink-0 text-[#0B4EA2] md:mx-auto md:mb-4" />
                <div className="flex-1">
                  <h3 className="text-base font-black leading-tight">{label}</h3>
                  {index === 2 ? <p className="mt-3 text-xs font-semibold leading-6 text-[#64748B]">Admissions | Marketing | Academics | Technology | Support</p> : null}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div className="mx-auto mt-8 max-w-3xl rounded-[8px] bg-[#0B4EA2] p-7 text-center text-white" {...fadeUp()}>
            <p className="text-2xl font-black">You invest in infrastructure. We build and run the learning ecosystem.</p>
          </motion.div>
        </div>
      </section>

      <section id="revenue" className="section-pad bg-[#F7FAFC]">
        <div className="container">
          <SectionHeading
            title="Transparent Revenue Sharing Model"
            subtitle="Simple investment structure with partner share increasing across the agreement period."
            hClass="text-2xl font-bold text-[#0F172A] md:text-4xl"
          />
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-stretch">
            {/* Left Card - Premium Franchise Investment Overview */}
            <motion.div 
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-900 text-white p-8 lg:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.18)] border border-slate-800"
              {...fadeUp()}
            >
              {/* Background gradient effects */}
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-600/10 blur-[80px] pointer-events-none" />

              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <Banknote className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400 leading-none">Investment Structure</p>
                    <h3 className="mt-1.5 text-base font-black text-white">Franchise Cost</h3>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-5xl font-black tracking-tight text-white md:text-6xl">
                    Rs. 5,00,000
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-400 flex items-center gap-2">
                    <ShieldCheck className="h-4.5 w-4.5 text-emerald-400" />
                    5-Year Agreement Period
                  </p>
                </div>

                {/* Investment Split Badges */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fixed Setup fee</p>
                    <p className="mt-1 text-xl font-black text-white">Rs. 2,00,000</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Performance Fee</p>
                    <p className="mt-1 text-xl font-black text-[#16A6C9]">Rs. 3,00,000</p>
                  </div>
                </div>
              </div>

              {/* Minimum Guarantee Highlight Box */}
              <div className="mt-8 relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-blue-950/40 p-5">
                <div className="absolute top-0 right-0 h-16 w-16 rounded-full bg-cyan-400/10 blur-[20px] pointer-events-none" />
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#16A6C9]">Guaranteed Security</p>
                <p className="mt-1.5 text-sm font-bold text-slate-200 leading-relaxed">
                  Minimum Guaranteed Payout: <span className="text-white font-extrabold text-base">Rs. 15,000/month</span> starting from Month 3 onwards.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Timeline Stages with Dual Progress Bars */}
            <div className="flex flex-col justify-between gap-5 h-full">
              {revenueStages.map((stage, index) => {
                // Numeric width values for custom styles
                const partnerVal = parseFloat(stage.partner);
                const ismlVal = parseFloat(stage.isml);

                return (
                  <motion.div 
                    key={stage.period} 
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 lg:p-7 shadow-[0_15px_35px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_rgba(11,78,162,0.08)] transition-all duration-300" 
                    {...fadeUp(index * 0.06)}
                  >
                    {/* Header bar of the stage */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9FBFF] text-xs font-black text-[#0B4EA2]">
                          0{index + 1}
                        </span>
                        <p className="text-lg font-black text-slate-800">{stage.period}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#0B4EA2]">
                          Partner: {stage.partner}
                        </span>
                        <span className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600">
                          ISML: {stage.isml}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Split Progress Bar */}
                    <div className="mt-6">
                      <div className="relative h-4 w-full overflow-hidden rounded-full bg-slate-100 flex">
                        {/* Partner Share side */}
                        <div 
                          className="h-full bg-gradient-to-r from-[#0B4EA2] to-[#16A6C9] transition-all duration-500 rounded-l-full relative" 
                          style={{ width: `${partnerVal}%` }}
                        >
                          <span className="absolute inset-0 flex items-center justify-end pr-2 text-[8px] font-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            {stage.partner}
                          </span>
                        </div>
                        {/* ISML Share side */}
                        <div 
                          className="h-full bg-slate-200 transition-all duration-500 rounded-r-full relative" 
                          style={{ width: `${ismlVal}%` }}
                        >
                          <span className="absolute inset-0 flex items-center justify-start pl-2 text-[8px] font-black text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            {stage.isml}
                          </span>
                        </div>
                      </div>

                      {/* Legends */}
                      <div className="mt-2.5 flex items-center justify-between text-[11px] font-bold text-slate-400">
                        <span>Partner Share ({stage.partner})</span>
                        <span>ISML Operations ({stage.isml})</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeading title="Is Your Location a Good Fit?" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {locationCards.map(([label, Icon], index) => (
              <motion.div key={String(label)} className="color-card flex min-h-[96px] items-center gap-4 rounded-[8px] p-5 transition hover:-translate-y-1 lg:block lg:min-h-0" {...fadeUp(index * 0.03)}>
                <Icon className="h-8 w-8 shrink-0 text-[#16A6C9] lg:mb-4" />
                <p className="flex-1 font-black leading-tight">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F7FAFC]">
        <div className="container">
          <SectionHeading title="Your Journey with ISML" />
          <div className="relative grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {journey.map(([label, Icon], index) => (
              <motion.div
                key={String(label)}
                className="group relative flex min-h-[116px] items-center gap-4 overflow-hidden rounded-[8px] border border-[#16A6C9]/20 bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-[#0B4EA2]/30 hover:shadow-[0_24px_58px_rgba(11,78,162,0.16)] md:block md:text-center"
                {...fadeUp(index * 0.04)}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0B4EA2] via-[#16A6C9] to-[#F5B301]" />
                <div className="flex shrink-0 items-center gap-3 md:block">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0B4EA2] text-sm font-black text-white shadow-lg shadow-blue-900/20 md:mx-auto md:mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#E9FBFF] text-[#16A6C9] transition group-hover:bg-[#16A6C9] group-hover:text-white md:mx-auto md:mb-4">
                    <Icon className="h-7 w-7" />
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-black leading-tight text-[#0F172A]">{label}</p>
                  <div className="mt-3 hidden h-1 rounded-full bg-[#E9FBFF] md:block">
                    <div className="h-full rounded-full bg-[#16A6C9]" style={{ width: `${Math.min(100, (index + 1) * 18)}%` }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="section-pad bg-white">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...fadeUp()}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#16A6C9]">Limited city expansion</p>
            <h2 className="text-2xl font-black md:text-3xl">Limited City Expansion Opportunities</h2>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {targetCities.map((city) => (
                <span key={city} className="rounded-md bg-[#F7FAFC] px-4 py-3 text-center text-sm font-black text-[#0B4EA2]">
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-[8px] bg-[#0B4EA2] p-6 text-white">
              <p className="text-2xl font-black">Limited Partnerships Available</p>
              <p className="mt-2 text-blue-50">Apply Before Your City Gets Locked</p>
            </div>
          </motion.div>
          <motion.div className="relative min-h-[430px] rounded-[8px] bg-[#F7FAFC] p-6 soft-shadow" {...fadeUp(0.1)}>
            <div className="absolute left-[42%] top-[16%] h-[68%] w-[32%] rounded-[42%_58%_55%_45%] bg-[#E9FBFF] shadow-inner" />
            {targetCities.map((city, index) => (
              <span
                key={city}
                className="absolute rounded-md bg-white px-3 py-2 text-xs font-black text-[#0B4EA2] shadow"
                style={{
                  left: `${18 + (index % 3) * 24}%`,
                  top: `${14 + Math.floor(index / 3) * 18}%`
                }}
              >
                <MapPin className="mr-1 inline" size={13} />
                {city}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="section-pad !pt-8 bg-[#F7FAFC]">
        <div className="container">
          <SectionHeading title="Partner Testimonials" subtitle="Stories from ISML centre partners building education businesses with operational support." />
          <motion.div className="color-card mx-auto max-w-4xl rounded-[8px] p-8 text-center" key={testimonialIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
            <div className="mx-auto mb-5 inline-flex min-h-14 items-center justify-center rounded-md bg-[#E9FBFF] px-5 text-base font-black text-[#0B4EA2]">
              {partnerTestimonials[testimonialIndex].city} Partner
            </div>
            <div className="mb-5 flex justify-center gap-1 text-[#F5B301]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-2xl font-bold leading-10 text-[#0F172A]">&quot;{partnerTestimonials[testimonialIndex].quote}&quot;</p>
            <p className="mt-6 font-black text-[#0B4EA2]">{partnerTestimonials[testimonialIndex].name}</p>
            <p className="text-sm font-bold text-[#64748B]">{partnerTestimonials[testimonialIndex].city} Partner</p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad !pt-8 bg-white">
        <div className="container">
          <SectionHeading title="Student Success Stories" />
          <div className="student-review-marquee">
            <div className="student-review-track">
              {[...studentStories, ...studentStories].map(([name, language, story], index) => (
                <motion.div key={`${name}-${index}`} aria-hidden={index >= studentStories.length} className="color-card student-review-card flex items-start gap-4 rounded-[8px] p-5 md:block" {...fadeUp((index % studentStories.length) * 0.03)}>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#E9FBFF] font-black text-[#0B4EA2] md:mb-4">{language.slice(0, 2)}</div>
                  <div className="flex-1">
                    <p className="font-black leading-tight">{name}</p>
                    <p className="mt-1 text-sm font-bold text-[#16A6C9]">{language}</p>
                    <p className="mt-4 text-sm leading-6 text-[#64748B]">{story}</p>
                    <div className="mt-4 flex gap-1 text-[#F5B301]">{Array.from({ length: 5 }).map((_, star) => <Star key={star} size={15} fill="currentColor" />)}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-8 bg-[#F7FAFC]">
        <div className="container">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mx-auto max-w-4xl">
            {faqs.map(([question, answer], index) => (
              <motion.div key={question} className="color-card mb-3 overflow-hidden rounded-[8px]" {...fadeUp(index * 0.03)}>
                <button onClick={() => setActiveFaq(index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-black text-[#0F172A]">
                  {question}
                  <ChevronDown className={`shrink-0 text-[#0B4EA2] transition ${activeFaq === index ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === index ? <p className="px-6 pb-5 leading-7 text-[#64748B]">{answer}</p> : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad !pt-8 bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...fadeUp()}>
            <h2 className="text-2xl font-black md:text-4xl">Apply for Your City</h2>
            <p className="mt-5 leading-8 text-[#64748B]">Share your details and the ISML franchise team can discuss location fit, investment structure and next steps.</p>
            <div className="mt-8 grid gap-4">
              {["Multiple Apply Now CTAs", "Trust indicators and testimonials", "Transparent revenue sharing", "Urgency for limited city partnerships"].map((item) => (
                <p key={item} className="flex items-center gap-3 font-bold text-slate-700">
                  <BadgeCheck className="text-[#16A6C9]" />
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
          <motion.form onSubmit={submitLead} className="color-card rounded-[8px] p-6 md:p-8" {...fadeUp(0.1)}>
            <div className="grid gap-4 md:grid-cols-2">
              {["Full Name", "Mobile Number", "Email", "City", "Current Business / Profession", "Investment Capacity", "Preferred Location"].map((label) => (
                <label key={label} className="grid gap-2 text-sm font-bold text-slate-700">
                  {label}
                  <input required className="min-h-12 rounded-md border border-slate-200 bg-white px-4 outline-none transition focus:border-[#0B4EA2]" placeholder={label} />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-bold text-slate-700 md:col-span-2">
                Message
                <textarea className="min-h-32 rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0B4EA2]" placeholder="Tell us about your preferred market and timeline" />
              </label>
            </div>
            <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0B4EA2] px-6 text-sm font-black text-white transition hover:bg-[#083f84]">
              Apply Now
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="bg-[#0F172A] py-12 text-white">
        <div className="container grid gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="flex flex-col shrink-0">
              <div className="text-[19px] font-black leading-[1.1] tracking-wide text-white">
                <div><span className="text-[#5CE1E6]">I</span>NDIAN</div>
                <div><span className="text-[#5CE1E6]">S</span>CHOOL FOR</div>
                <div><span className="text-[#5CE1E6]">M</span>ODERN</div>
                <div><span className="text-[#5CE1E6]">L</span>ANGUAGES</div>
              </div>
              <span className="mt-1 text-[10px] font-bold text-slate-400">IYPAN Educational Centre Pvt.Ltd</span>
            </div>
          </div>

          {/* Quick Links column — icon inline with heading */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Link className="text-[#5CE1E6] shrink-0" size={18} />
              <span className="text-sm font-bold text-white">Quick Links</span>
            </div>
            <div className="grid gap-2 text-sm text-slate-300 pl-1">
              {navItems.slice(0, 5).map(([label, id]) => (
                <a key={id} href={`#${id}`} className="transition hover:text-[#5CE1E6]">{label}</a>
              ))}
              <a
                href="https://indianschoolformodernlanguages.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#5CE1E6]"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact column — icon inline with heading */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Phone className="text-[#5CE1E6] shrink-0" size={18} />
              <span className="text-sm font-bold text-white">Contact</span>
            </div>
            <p className="text-sm leading-7 text-slate-300 pl-1">India<br />+91 98765 43210</p>
          </div>

          {/* Website column — icon inline with heading */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Globe className="text-[#5CE1E6] shrink-0" size={18} />
              <span className="text-sm font-bold text-white">Website</span>
            </div>
            <a
              href="https://indianschoolformodernlanguages.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-300 transition hover:text-[#5CE1E6] pl-1 block"
            >
              indianschoolformodernlanguages.com
            </a>
          </div>
        </div>
        <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>Copyright {currentYear} Indian School for Modern Languages</span>
          <a
            href="https://indianschoolformodernlanguages.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Privacy Policy
          </a>
        </div>
      </footer>

      {/* Scroll to top button */}
      <ScrollToTop />
    </main>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.7, pointerEvents: visible ? "auto" : "none" }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B4EA2] text-white shadow-lg shadow-blue-900/30 hover:bg-[#083f84] transition"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
