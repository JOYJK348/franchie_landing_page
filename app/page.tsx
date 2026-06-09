"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Award,
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
  ["Testimonials", "testimonials"]
];

const heroStats = ["10+ Centres", "20,000+ Students", "French", "German", "Japanese"];

const foreignLanguageCards = [
  { title: "Study Abroad", text: "Access universities in France, Germany and Japan.", icon: Plane },
  { title: "Career Growth", text: "High demand among MNCs and global employers.", icon: BriefcaseBusiness },
  { title: "Migration Opportunities", text: "Improve international mobility pathways.", icon: MapPin },
  { title: "Global Skill Development", text: "Develop cross-cultural communication skills.", icon: Languages }
];

const heroHighlights: IconTuple[] = [
  ["Investment starts Rs. 5 Lakhs", Banknote],
  ["Revenue Sharing up to 50%", LineChart],
  ["ISML Handles Operations", Target],
  ["Expanding Across India", MapPin],
  ["10+ Years Legacy", Award],
  ["20,000+ Students Impacted", Users]
];

const aboutFeatures = [
  "Online courses",
  "offline courses",
  "Institution Tieups",
  "Co-operate training",
  "Expert Trainers",
  "Career-Oriented Learning",
  "Centralized Academic Platform"
];


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

const clientLogos = [
  "https://www.dsmstry.ac.in/images/dsms-logo.png",
  "https://www.indianschoolformodernlanguages.com/static/media/c1.6fea63aa9af1e9990984.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c2.ba9334b3142cb36d90f6.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c3.425f995df3d54c39b95d.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c4.772a3b99fe2f7b81bfe2.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c5.210ebbcc2d96c516501f.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c6.76be6a283e984434f422.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c7.a127a7544df37886b76c.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c8.22cb98beb3def3c85de9.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c9.3984a89073d4556f1d96.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c12.02b027f24bb147022625.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c13.dc1e47bde7e2ddee441b.jpeg",
  "https://www.indianschoolformodernlanguages.com/static/media/c14.c013ea748b58e672e780.jpeg"
];

const journey: IconTuple[] = [
  ["Enquire", MessageCircle],
  ["Discuss", Phone],
  ["Documentation", BookOpen],
  ["Signing of MOU", Handshake],
  ["Initiation of Operations", Sparkles],
  ["Scale Up", LineChart]
];

const targetStates = [
  "Andhra Pradesh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Karnataka",
  "Madhya Pradesh",
  "Maharashtra",
  "Punjab",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh"
];

const partnerTestimonials = [
  {
    name: "Franchise Partner",
    city: "Trichy",
    quote: "As an ISML franchise partner in Trichy since April 2024, we have witnessed remarkable growth for both our students and our organization. ISML's strong academic foundation, professional management, and unwavering support have made our journey smooth and rewarding. We are proud to represent ISML in Trichy."
  },
  {
    name: "Centre Partner",
    city: "Karaikudi",
    quote: "The Synergy Pro approach helped us enter education with clarity, systems and a trusted language-learning brand."
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
  },
  {
    name: "Strategic Partner",
    city: "Chromepet",
    quote: "Partnering with ISML has been an incredibly rewarding experience. The comprehensive operational support and excellent academic framework allowed us to focus entirely on community growth and student success."
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
  ["How much revenue can I expect?", "A revenue of over 100% of the investment can be generated within a period of 5 years."],
  ["Does ISML handle admissions?", "Yes. ISML supports admissions, marketing, academics, trainers, technology and student support."],
  ["Do I need language expertise?", "No. The model is designed for investors and business owners while ISML manages academic operations."],
  ["What support does ISML provide?", "ISML provides trainers, academic delivery, marketing systems, admissions handling, technology and operations."],
  ["How long is the franchise agreement?", "The franchise agreement is structured for 5 years."],
  ["When will operations start?", "Operations begin after discussion, documentation, signing of MOU and centre readiness."]
];

const textOnlyPattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requiredFields = [
  "fullName",
  "mobile",
  "email",
  "city",
  "business",
  "experience",
  "preferredLocation",
  "investment",
  "message"
] as const;

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/learnwithisml",
    color: "#E4405F",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    )
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917338895754",
    color: "#25D366",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.22c5.507 0 9.99-4.477 9.991-9.985C22.004 6.478 17.519 2 12.012 2zm5.835 14.24c-.246.693-1.424 1.348-1.954 1.417-.48.062-.977.29-3.084-.539-2.535-.997-4.137-3.564-4.263-3.733-.127-.168-.96-1.277-.96-2.438 0-1.162.608-1.733.824-1.962.215-.229.477-.287.636-.287.16 0 .319.002.457.008.143.007.337-.054.528.406.195.47.669 1.638.727 1.758.058.12.096.258.016.417-.08.16-.12.259-.24.398-.12.14-.252.312-.359.418-.12.12-.244.251-.105.489.139.238.618 1.02 1.328 1.652.915.815 1.684 1.068 1.923 1.187.239.12.378.102.463.004.085-.098.363-.424.46-.57.098-.146.196-.122.33-.073.136.049.856.403 1.003.477.147.073.245.109.282.172.037.063.037.368-.209 1.061z"/></svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/learnwithisml/",
    color: "#0A66C2",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    )
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@learnwithisml",
    color: "#FF0000",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    )
  }
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
    <motion.div className="mx-auto mb-12 max-w-5xl text-center" {...fadeUp()}>
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
      className={`inline-flex w-full sm:w-auto min-h-12 items-center justify-center gap-1.5 sm:gap-2 rounded-md px-2 sm:px-6 text-[11px] sm:text-sm font-bold transition hover:-translate-y-0.5 ${isPrimary
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
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                style={{ color: social.color }}
              >
                {social.icon}
              </a>
            ))}
          </div>
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
            <div className="flex items-center gap-3 px-3 py-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                  style={{ color: social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
          src="/hero_students_languages.png"
          alt="Students in a modern classroom at ISML"
          className="h-[440px] w-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const faqStructuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer
        }
      }))
    }),
    []
  );
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    business: "",
    experience: "",
    preferredLocation: "",
    investment: "",
    message: ""
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialIndex((index) => (index + 1) % partnerTestimonials.length);
    }, 4300);
    return () => window.clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (showSuccessModal) setShowSuccessModal(false);
    const nextValue = (() => {
      if (name === "fullName" || name === "city") return value.replace(/[^A-Za-z\s]/g, "");
      if (name === "mobile") return value.replace(/\D/g, "").slice(0, 10);
      return value;
    })();

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue
    }));
  };

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const leadData = Object.fromEntries(new FormData(form).entries());

    const isMissingRequiredField = requiredFields.some((field) => formData[field].trim() === "");
    if (isMissingRequiredField) {
      alert("Please fill all mandatory fields.");
      return;
    }

    if (!textOnlyPattern.test(formData.fullName.trim())) {
      alert("Name should contain letters only.");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      alert("Mobile number should be exactly 10 digits.");
      return;
    }

    if (!emailPattern.test(formData.email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!textOnlyPattern.test(formData.city.trim())) {
      alert("City should contain letters only.");
      return;
    }

    setIsSubmitting(true);
    
    fetch("https://api.sheetmonkey.io/form/dxBvL5k3UCZGZNKXY3fgxZ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(leadData)
    })
      .then(() => {
        setShowSuccessModal(true);
        form.reset();
        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          city: "",
          business: "",
          experience: "",
          preferredLocation: "",
          investment: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />
      <main id="home" className="overflow-hidden">

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
              Partner with ISML through our Synergy Pro model and build a profitable education business while ISML handles admissions, academics, operations and growth.
            </motion.p>
            <motion.div className="mt-8 grid gap-3 sm:grid-cols-2" {...fadeUp(0.15)}>
              {heroHighlights.map(([label, Icon]) => (
                <div key={String(label)} className="color-card flex items-center gap-3 rounded-md px-4 py-3">
                  <Icon className="text-[#16A6C9]" size={20} />
                  <span className="text-sm font-bold text-slate-700">{label}</span>
                </div>
              ))}
            </motion.div>
            <motion.div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4" {...fadeUp(0.2)}>
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
              <div className="group relative">
                <span className="flex h-full cursor-pointer items-center rounded-md bg-[#F7FAFC] px-4 py-2 text-sm font-black text-[#0B4EA2] transition hover:bg-[#E9FBFF]">
                  + More languages
                </span>
                <div className="invisible absolute left-0 top-full z-10 mt-2 w-max opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="flex flex-col gap-2 rounded-md border border-slate-100 bg-white p-3 shadow-lg">
                    <span className="text-sm font-bold text-slate-700 transition-colors hover:text-[#0B4EA2]">Spanish</span>
                    <span className="text-sm font-bold text-slate-700 transition-colors hover:text-[#0B4EA2]">Korean</span>
                    <span className="text-sm font-bold text-slate-700 transition-colors hover:text-[#0B4EA2]">Mandarin</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <HeroImage />
        </div>
      </section>

      <section className="bg-[#F7FAFC] pt-8 pb-12 md:pt-12 md:pb-24">
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
                className="group relative flex flex-row items-start gap-4 rounded-xl bg-white p-5 shadow-[0_8px_30px_rgba(11,78,162,0.08)] border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,78,162,0.15)] hover:border-[#0B4EA2]/20 overflow-hidden"
                {...fadeUp(index * 0.08)}
              >
                {/* Top accent gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0B4EA2] via-[#16A6C9] to-[#5CE1E6] opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E9FBFF] to-[#D0F0FF] text-[#0B4EA2] transition-all duration-300 group-hover:scale-105 group-hover:from-[#0B4EA2] group-hover:to-[#16A6C9] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25">
                  <card.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="text-left">
                  {/* Title */}
                  <h3 className="mb-1.5 text-base font-black text-[#0F172A] group-hover:text-[#0B4EA2] transition-colors">{card.title}</h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-[#64748B]">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(11,78,162,0.06)] border border-slate-100">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {[
                ["Growing Demand", 68, "%"],
                ["Global Careers", 42, "K+"],
                ["Study Abroad Growth", 3, "x"],
                ["Language Jobs", 25, "K+"]
              ].map(([label, value, suffix], idx) => (
                <div 
                  key={String(label)} 
                  className={`p-4 flex flex-col justify-center text-center ${
                    idx === 0 ? "border-r border-b border-slate-100 pb-6 pr-6" : 
                    idx === 1 ? "border-b border-slate-100 pb-6 pl-6" : 
                    idx === 2 ? "border-r border-slate-100 pt-6 pr-6" : 
                    "pt-6 pl-6"
                  }`}
                >
                  <p className="text-4xl font-black text-[#0B4EA2]">
                    <Counter value={Number(value)} suffix={String(suffix)} />
                  </p>
                  <p className="mt-2 text-sm font-bold text-[#64748B]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white pt-8 pb-12 md:pt-12 md:pb-[88px]">
        <div className="container grid items-start gap-10 lg:grid-cols-2">
          {/* Image side - Creative Visual Panel */}
          <motion.div className="relative overflow-hidden rounded-3xl min-h-[320px] max-h-[620px] lg:min-h-0 group shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-100 bg-slate-950/5" {...fadeUp()}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-4 p-4 md:p-6">
              <div className="inline-flex self-center items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-950 shadow-sm ring-1 ring-slate-200">
                <Sparkles className="h-4 w-4 text-[#16A6C9]" />
                <span>OUR Clients</span>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white/95 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <div className="clients-marquee h-[256px] min-w-0">
                  <div className="clients-track">
                    {[...clientLogos, ...clientLogos].map((logo, index) => (
                      <div key={index} className="flex h-28 min-w-[190px] items-center justify-center rounded-2xl bg-white/70 p-3">
                        <img src={logo} alt={`Client logo ${index + 1}`} className="max-h-full max-w-full h-auto w-auto object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-[#64748B] shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9FBFF] text-[#0B4EA2]">
                      <Target className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#0B4EA2]">Our Vision</h3>
                  </div>
                  <p className="mt-3">Overcome language barriers and create seamless communication across communities.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-[#64748B] shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9FBFF] text-[#16A6C9]">
                      <Award className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-black text-[#16A6C9]">Our Mission</h3>
                  </div>
                  <p className="mt-3">Empower learners with practical language skills and global mindsets.</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Content side - Creative Content Card */}
          <motion.div className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-[#F8FAFC]/50 p-6 lg:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.04)]" {...fadeUp(0.1)}>
            <div>
              <p className="mb-3 inline-block rounded-full bg-[#E9FBFF] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0B4EA2]">About ISML</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-[#0F172A] md:text-4xl">About Indian School for<br />Modern Languages</h2>
              <p className="mt-5 text-base leading-relaxed text-[#64748B]">
                Indian School for Modern Languages (ISML) is a leading language education institute dedicated to helping learners develop practical communication skills, cultural awareness, and global career opportunities through foreign language learning.
              </p>

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
          <SectionHeading title="Your Journey with ISML" subtitle="A clear, step-by-step roadmap to launch and grow your language learning franchise partner centre." />
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

      <section id="revenue" className="bg-[#F7FAFC] pt-8 pb-12 md:pt-12 md:pb-[88px]">
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
                    <h3 className="mt-1.5 text-base font-black text-white">Franchise Cost starts from</h3>
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
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Initial on signing</p>
                    <p className="mt-1 text-xl font-black text-white">Rs. 3,00,000</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">After Performance</p>
                    <p className="mt-1 text-xl font-black text-[#16A6C9]">Rs. 2,00,000</p>
                  </div>
                </div>
              </div>

              {/* Minimum Guarantee Highlight Box */}
              <div className="mt-8 relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-blue-950/40 p-5">
                <div className="absolute top-0 right-0 h-16 w-16 rounded-full bg-cyan-400/10 blur-[20px] pointer-events-none" />
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#16A6C9]">Guaranteed Security</p>
                <p className="mt-1.5 text-sm font-bold text-slate-200 leading-relaxed">
                  Minimum Guaranteed Payout: <span className="text-white font-extrabold text-base">Rs. 13,500/month</span> starting from Month 4 onwards.
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

      <section className="bg-white pt-8 pb-12 md:pt-12 md:pb-[88px]">
        <div className="container">
          <SectionHeading title="Is Your Location a Good Fit?" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {locationCards.map(([label, Icon], index) => (
              <motion.div 
                key={String(label)} 
                className="group flex flex-row items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-[0_8px_30px_rgba(11,78,162,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(11,78,162,0.12)] hover:border-cyan-100" 
                {...fadeUp(index * 0.03)}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50/50 text-[#16A6C9] group-hover:bg-[#16A6C9] group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="flex-1 text-sm font-black leading-tight text-slate-800">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="locations" className="pb-16 pt-0 bg-white md:pb-24">
        <div className="container max-w-3xl">
          <motion.div {...fadeUp()}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-center text-[#16A6C9]">Limited state expansion</p>
            <h2 className="text-2xl font-black md:text-3xl text-center mb-2">Limited State Expansion Opportunities</h2>
            <p className="text-center text-slate-600 mb-8 text-lg">We&apos;re strategically expanding across India with carefully selected partners</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {targetStates.map((state) => (
                <span key={state} className="rounded-lg bg-gradient-to-br from-[#E9FBFF] to-[#F7FAFC] px-4 py-3 text-center text-sm font-bold text-[#0B4EA2] flex items-center justify-center gap-2 border border-cyan-100 hover:border-cyan-300 transition">
                  <MapPin size={16} className="text-[#16A6C9] flex-shrink-0" />
                  {state}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-xl bg-gradient-to-r from-[#0B4EA2] to-[#083f84] p-5 text-white shadow-lg text-center">
              <p className="text-xl font-black">Limited Partnerships Available</p>
              <p className="mt-1 text-blue-100 text-base">Apply Now Before Your State Gets Locked</p>
              <div className="mt-4 flex justify-center">
                <CtaButton variant="primary">Apply Now</CtaButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#F7FAFC] pt-4 pb-4 md:pt-8 md:pb-8">
        <div className="container">
          <SectionHeading title="Partner Testimonials" subtitle="Stories from ISML centre partners building education businesses with operational support." />
          {/* Desktop View: 3D Auto-Scrolling Carousel */}
          <div className="hidden md:flex relative h-[280px] w-full max-w-[1000px] mx-auto items-center justify-center overflow-visible">
            {partnerTestimonials.map((testimonial, idx) => {
              const len = partnerTestimonials.length;
              let offset = idx - testimonialIndex;
              if (offset > Math.floor(len / 2)) offset -= len;
              if (offset < -Math.floor(len / 2)) offset += len;

              const isVisible = Math.abs(offset) <= 1;
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={testimonial.city}
                  initial={false}
                  animate={{
                    x: offset * 320,
                    scale: isCenter ? 1 : 0.85,
                    opacity: isVisible ? (isCenter ? 1 : 0.4) : 0,
                    filter: isCenter ? "blur(0px)" : "blur(4px)",
                    zIndex: isCenter ? 20 : 10,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute w-[360px] color-card rounded-[12px] p-6 text-center shadow-[0_10px_30px_rgba(11,78,162,0.1)]"
                  style={{ pointerEvents: isCenter ? "auto" : "none" }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#085195] flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.city.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-[#0F172A]">{testimonial.city} Partner</div>
                      <div className="text-sm text-slate-600">ISML Franchise Partner</div>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <div className="flex gap-1 text-[#F5B301]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-base font-bold leading-relaxed text-[#0F172A] line-clamp-4">&quot;{testimonial.quote}&quot;</p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile View: Swipable List */}
          <div className="block md:hidden mt-6 -mx-4 sm:mx-0">
            <div className="student-review-marquee">
              <div className="student-review-track">
                {partnerTestimonials.map((testimonial, index) => (
                  <div key={index} className="color-card student-review-card flex flex-col items-center justify-center gap-3 rounded-[8px] p-6 text-center h-fit">
                    <div className="mb-3 flex items-center gap-2.5">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#085195] flex items-center justify-center text-white font-bold">
                        {testimonial.city.charAt(0)}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-sm text-[#0F172A]">{testimonial.city} Partner</div>
                        <div className="text-xs text-slate-600">ISML Franchise Partner</div>
                      </div>
                    </div>
                    <div className="mb-3 flex items-center justify-center gap-2">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <div className="flex gap-1 text-[#F5B301]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-base font-bold leading-relaxed text-[#0F172A] line-clamp-4">&quot;{testimonial.quote}&quot;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-2 pb-8 md:pt-4 md:pb-12">
        <div className="container">
          <SectionHeading title="Student Success Stories" />
          <div className="student-review-marquee">
            <div className="student-review-track">
              {[...studentStories, ...studentStories].map(([name, language, story], index) => (
                <motion.div key={`${name}-${index}`} aria-hidden={index >= studentStories.length} className="color-card student-review-card flex flex-col gap-3 rounded-[8px] p-5 h-fit" {...fadeUp((index % studentStories.length) * 0.03)}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-black leading-tight text-[#0F172A]">{name}</p>
                      <p className="mt-0.5 text-[11px] font-bold text-[#16A6C9]">{language}</p>
                      <div className="mt-1.5 flex gap-1 text-[#F5B301]">{Array.from({ length: 5 }).map((_, star) => <Star key={star} size={13} fill="currentColor" />)}</div>
                    </div>
                    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-[#64748B] text-justify">{story}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex justify-center gap-1.5 md:hidden">
              <div className="h-2 w-2 rounded-full bg-[#0B4EA2]"></div>
              <div className="h-2 w-2 rounded-full bg-[#0B4EA2]/20"></div>
              <div className="h-2 w-2 rounded-full bg-[#0B4EA2]/20"></div>
              <div className="h-2 w-2 rounded-full bg-[#0B4EA2]/20"></div>
              <div className="h-2 w-2 rounded-full bg-[#0B4EA2]/20"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad !pt-4 !pb-10 bg-[#F7FAFC]">
        <div className="container">
          <motion.div className="mx-auto mb-6 max-w-3xl text-center" {...fadeUp()}>
            <h2 className="text-3xl font-bold text-[#0F172A] md:text-5xl">Frequently Asked Questions</h2>
          </motion.div>
          <div className="mx-auto max-w-4xl">
            {faqs.map(([question, answer], index) => (
              <motion.div key={question} className="color-card mb-3 overflow-hidden rounded-[8px]" {...fadeUp(index * 0.03)}>
                <button onClick={() => setActiveFaq(index)} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-black text-[#0F172A]">
                  {question}
                  <ChevronDown className={`shrink-0 text-[#0B4EA2] transition ${activeFaq === index ? "rotate-180" : ""}`} />
                </button>
                {activeFaq === index ? <p className="px-6 pb-4 leading-7 text-[#64748B]">{answer}</p> : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="container max-w-4xl">
          <SectionHeading 
            title="Apply for Your City" 
            subtitle="Share your details and the ISML franchise team can discuss location fit, investment structure and next steps." 
          />
          <motion.form onSubmit={submitLead} className="color-card mt-10 rounded-[12px] border border-slate-100 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-10" {...fadeUp(0.1)}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Full Name
                <input
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  pattern="[A-Za-z\s]+"
                  title="Name should contain letters only."
                  className="min-h-12 rounded-md border border-slate-200 bg-white px-4 outline-none transition focus:border-[#0B4EA2]"
                  placeholder="Full Name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Mobile Number
                <input
                  required
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  inputMode="numeric"
                  maxLength={10}
                  pattern="\d{10}"
                  title="Mobile number should be exactly 10 digits."
                  className="min-h-12 rounded-md border border-slate-200 bg-white px-4 outline-none transition focus:border-[#0B4EA2]"
                  placeholder="Mobile Number"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  title="Please enter a valid email address."
                  className="min-h-12 rounded-md border border-slate-200 bg-white px-4 outline-none transition focus:border-[#0B4EA2]"
                  placeholder="Email"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                City
                <input
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  pattern="[A-Za-z\s]+"
                  title="City should contain letters only."
                  className="min-h-12 rounded-md border border-slate-200 bg-white px-4 outline-none transition focus:border-[#0B4EA2]"
                  placeholder="City"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Current Business / Profession
                <input
                  required
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  className="min-h-12 rounded-md border border-slate-200 bg-white px-4 outline-none transition focus:border-[#0B4EA2]"
                  placeholder="Current Business / Profession"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Experience in Education Sector
                <input
                  required
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="min-h-12 rounded-md border border-slate-200 bg-white px-4 outline-none transition focus:border-[#0B4EA2]"
                  placeholder="Experience in Education Sector"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Preferred Location of the Center
                <input
                  required
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleInputChange}
                  className="min-h-12 rounded-md border border-slate-200 bg-white px-4 outline-none transition focus:border-[#0B4EA2]"
                  placeholder="Preferred Location of the Center"
                />
              </label>

                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Investment Range
                  <select
                    name="investment"
                    value={formData.investment}
                    onChange={handleInputChange}
                    required
                    className="min-h-12 rounded-md border border-slate-200 bg-white px-4 outline-none transition focus:border-[#0B4EA2]"
                  >
                    <option value="">Select Investment Range</option>
                    <option value="5-10">5 to 10 lakhs</option>
                    <option value="10-20">10 to 20 lakhs</option>
                    <option value="above-20">Above 20 lakhs</option>
                  </select>
                </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700 md:col-span-2">
                Message
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-32 rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0B4EA2]"
                  placeholder="Tell us about your preferred market and timeline"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0B4EA2] px-6 text-sm font-black text-white transition hover:bg-[#083f84] disabled:bg-slate-400"
            >
              {isSubmitting ? "Submitting..." : "Apply Now"}
              <Send size={18} />
            </button>
            {showSuccessModal ? (
              <motion.div
                role="status"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
              >
                <motion.div
                  className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                >
                  {/* Top accent bar */}
                  <div className="h-1.5 bg-gradient-to-r from-[#0B4EA2] via-[#16A6C9] to-[#5CE1E6]" />
                  
                  {/* Content */}
                  <div className="p-8 text-center">
                    {/* Success Icon */}
                    <motion.div
                      className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E9FBFF]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <svg className="h-8 w-8 text-[#16A6C9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </motion.div>

                    {/* Message content */}
                    <div className="mb-6">
                      <p className="text-lg leading-relaxed text-[#64748B]">
                        Thank you for your interest in
                      </p>
                      <p className="mt-2 text-2xl font-black bg-gradient-to-r from-[#0B4EA2] via-[#16A6C9] to-[#5CE1E6] bg-clip-text text-transparent">
                        ISML Synergy Pro
                      </p>
                      <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
                        Our team will review your application and contact you shortly to discuss the opportunity, location suitability, and next steps. 🚀
                      </p>
                    </div>

                    {/* Close button */}
                    <motion.button
                      onClick={() => setShowSuccessModal(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0B4EA2] to-[#16A6C9] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:shadow-xl hover:shadow-blue-900/30"
                    >
                      Got It
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ) : null}
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
            <p className="text-sm leading-7 text-slate-300 pl-1">India<br />+91 7338895754</p>
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
            <div className="mt-4 flex items-center gap-3 pl-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{ color: social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
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

      {/* Floating Action Buttons */}
      <ApplyNowFloatingButton />
      <ScrollToTop />
      <WhatsAppButton />
      </main>
    </>
  );
}

function ApplyNowFloatingButton() {
  return (
    <a
      href="#contact"
      aria-label="Apply Now"
      className="group fixed bottom-[144px] right-6 z-50 flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#16A6C9] text-white shadow-lg shadow-cyan-900/20 transition-all duration-300 hover:scale-105 hover:bg-[#138fae]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <Send size={22} className="-ml-0.5 mt-0.5" />
      </div>
      <span className="w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:w-24 group-hover:pr-5">
        Apply Now
      </span>
    </a>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917338895754"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-22 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a]"
    >
      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.22c5.507 0 9.99-4.477 9.991-9.985C22.004 6.478 17.519 2 12.012 2zm5.835 14.24c-.246.693-1.424 1.348-1.954 1.417-.48.062-.977.29-3.084-.539-2.535-.997-4.137-3.564-4.263-3.733-.127-.168-.96-1.277-.96-2.438 0-1.162.608-1.733.824-1.962.215-.229.477-.287.636-.287.16 0 .319.002.457.008.143.007.337-.054.528.406.195.47.669 1.638.727 1.758.058.12.096.258.016.417-.08.16-.12.259-.24.398-.12.14-.252.312-.359.418-.12.12-.244.251-.105.489.139.238.618 1.02 1.328 1.652.915.815 1.684 1.068 1.923 1.187.239.12.378.102.463.004.085-.098.363-.424.46-.57.098-.146.196-.122.33-.073.136.049.856.403 1.003.477.147.073.245.109.282.172.037.063.037.368-.209 1.061z"/>
      </svg>
    </a>
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
