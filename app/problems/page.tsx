"use client";

import { useState } from "react";
import {
  Clock,
  Users,
  Trophy,
  Lightbulb,
  Palette,
  Phone,
  Heart,
  GraduationCap,
  BookOpen,
  Wallet,
  Cpu,
} from "lucide-react";

const categories = [
  "All Challenges",
  "Design & UX",
  "Voice AI",
  "Healthcare",
  "Education",
  "Fintech",
  "Automation",
];

const problemStatements = [
  {
    id: 1,
    title:
      "Can You Build Tech That's Not Just Functional—But Beautifully Designed?",
    category: "Design & UX",
    icon: <Palette className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-48 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Building something people actually enjoy using. Focus on creating beautiful, user-friendly experiences that solve real problems.",
    challenge:
      "This hackathon isn't just about writing code—it's about building products that are usable, beautiful, and people-friendly.",
    context:
      "In today's world, building a working app or website is no longer the hard part. Thanks to AI tools, low-code platforms, and ready-to-use frameworks, anyone can launch a product quickly. But the real challenge? Building something people actually enjoy using. That's where great design makes all the difference.",
    whyItMatters:
      "Most Indian engineering students are great at coding—but often ignore design. The result? Apps that work, but are confusing, boring, or hard to use. The most successful tech companies—like Apple, Airbnb, and Stripe—didn't just build powerful tech. They created beautiful, user-friendly experiences.",
    yourTask: [
      "Pick a real-world problem",
      "Build a working solution (web/app/product)",
      "Pay close attention to design, usability, and user experience",
    ],
    focusAreas: [
      "Simple and intuitive interfaces",
      "Clean layouts with thoughtful visual design",
      "Features that solve a real user pain point",
      "Smooth user flows (no clutter, no confusion)",
      "Bonus: Use AI tools like Figma AI, Framer, or Uizard to boost your design process",
    ],
    impact:
      "High - Create products that are not only smart but also a joy to use",
  },
  {
    id: 2,
    title: "Can Voice AI Fix Customer Support Calls?",
    category: "Voice AI",
    icon: <Phone className="h-6 w-6" />,
    difficulty: "Advanced",
    timeEstimate: "30-48 hours",
    teamSize: "3-4 members",
    shortDescription:
      "Use Voice AI and LLMs to revolutionize customer service experiences and eliminate common pain points in support calls.",
    challenge:
      "Build a solution that uses Voice AI to improve customer service experiences and make customer calls faster, simpler, and more human.",
    context:
      "Think about your last call to a customer care number—maybe your bank, mobile service, food delivery, or hospital. You probably faced long wait times, confusing menu options, or had to repeat your issue multiple times. The experience hasn't changed much in decades, but with new Voice AI and Large Language Models (LLMs), we finally have the chance to fix this.",
    whyItMatters:
      "Today's AI voice models can understand natural language, respond with human-like tone and emotion, and hold realistic conversations. With over a trillion customer support calls happening each year worldwide, the opportunity to improve this space is massive—especially in India where phone-based support is still the primary way people reach businesses.",
    yourTask: [
      "A smart voice bot for a local business (e.g., pharmacy, clinic, delivery service)",
      "An AI system that answers FAQs or resolves simple issues over a phone call",
      "A voice assistant that understands regional Indian languages or accents",
      "A hybrid system where AI handles the first 2 minutes and then hands off to a human if needed",
    ],
    focusAreas: [
      "Natural language understanding",
      "Human-like conversation flow",
      "Regional language support",
      "Seamless human handoff",
      "Real-time voice processing",
    ],
    impact: "Very High - Transform customer service for millions of users",
  },
  {
    id: 3,
    title: "Reducing Healthcare Inefficiencies with AI",
    category: "Healthcare",
    icon: <Heart className="h-6 w-6" />,
    difficulty: "Advanced",
    timeEstimate: "36-48 hours",
    teamSize: "3-4 members",
    shortDescription:
      "Use AI to automate administrative tasks in healthcare, reducing paperwork burden and improving patient care efficiency.",
    challenge:
      "Think about how you can use AI to reduce the paperwork burden in Indian healthcare and make the system more efficient.",
    context:
      "India's healthcare system faces major challenges in how healthcare data is handled. From hospitals to clinics to insurance offices, a huge amount of time is spent on manual administrative work: filling out forms by hand, transferring data between systems, digging through patient records stored as PDFs, and manually updating information.",
    whyItMatters:
      "These inefficiencies slow down care, waste resources, and often lead to errors. Medical staff spend valuable time doing paperwork instead of treating patients. In the U.S., it's estimated that over $1 trillion is wasted on similar tasks. But today, LLMs and AI tools are making it possible to automate many of these tasks.",
    yourTask: [
      "Build a system that reads and extracts patient data from scanned prescriptions or reports",
      "Help medical staff fill digital records more easily with voice input or chat",
      "Move information from one hospital software system to another using AI",
      "Create an assistant that supports health workers in rural areas to enter or retrieve data faster",
    ],
    focusAreas: [
      "Document processing and OCR",
      "Data extraction from unstructured sources",
      "Voice-to-text for medical records",
      "System integration and automation",
      "Rural healthcare support tools",
    ],
    impact:
      "Very High - Make Indian healthcare more efficient and patient-friendly",
  },
  {
    id: 4,
    title: "Build an AI Tutor for Every Indian Student",
    category: "Education",
    icon: <GraduationCap className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Create personalized AI tutors that adapt to individual learning styles and help students understand complex topics.",
    challenge:
      "Build an AI-powered learning tool that can help Indian students understand hard topics in engineering, science, or any other subject.",
    context:
      "Engineering students in India face real struggles: huge class sizes with little personal attention, one-size-fits-all lectures, pressure to memorize without understanding, and outdated learning tools. Most online courses still deliver the same content to every student, regardless of their pace or learning style.",
    whyItMatters:
      "For decades, computer scientists have dreamed of using technology to revolutionize learning. That dream is finally possible with today's AI. With the latest LLMs and multimodal AI tools, we can now build AI tutors that adapt to each student's pace, break down tough topics step by step, and answer follow-up questions like a real teacher would.",
    yourTask: [
      "Create visual explanations for complex ideas",
      "Let students interact with concepts (e.g., manipulate 3D objects or ask questions)",
      "Support multiple Indian languages to make learning inclusive",
      "Help students learn at their own pace with a personalized AI tutor",
    ],
    focusAreas: [
      "Personalized learning algorithms",
      "Interactive visualizations",
      "Multi-language support",
      "Adaptive content delivery",
      "Student progress tracking",
    ],
    impact: "Very High - Transform education for millions of Indian students",
  },
  {
    id: 5,
    title: "Can You Reimagine Education in India with AI?",
    category: "Education",
    icon: <BookOpen className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "36-48 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Reinvent how students learn and teachers teach in India—using AI to make education more personalized, accessible, and impactful.",
    challenge:
      "Build an AI-powered solution that transforms any part of India's education system—especially where scale, personalization, and access are challenges.",
    context:
      "India’s education system serves over 260 million students and 9 million teachers. Yet, traditional teaching methods—lecture-based learning, rote memorization, one-size-fits-all materials—remain dominant. Now, with AI, we can build tools that adapt to student needs, support teachers, and improve learning outcomes, especially for underserved regions.",
    whyItMatters:
      "Despite the size of India’s education sector, many students—especially in rural or low-income communities—are left behind. AI offers a chance to create scalable, personalized solutions that actually meet diverse student needs. This is about shaping the future of how India learns.",
    yourTask: [
      "Identify a core problem in the Indian education system",
      "Design and build an AI-driven solution (platform/tool/agent)",
      "Focus on impact, scale, and local usability (e.g., languages, connectivity)",
    ],
    focusAreas: [
      "AI tutors that teach in regional languages",
      "Teacher tools to grade or create content faster",
      "Voice or visual learning for low-connectivity areas",
      "Smart assistants for students to summarize, quiz, and translate content",
      "Bonus: Use GPT, Gemini, or multimodal tools to create rich learning experiences",
    ],
    impact: "Very High - Help millions of Indian students and teachers",
  },
  {
    id: 6,
    title: "Can You Build India's Personal Finance Copilot with AI?",
    category: "Fintech",
    icon: <Wallet className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-48 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Use AI to help individuals across India manage money better—through smart, unbiased, and accessible financial tools.",
    challenge:
      "Create an AI-powered tool that acts as a personalized financial guide for users in India—covering saving, investing, budgeting, loans, and taxes.",
    context:
      "Most Indians rely on friends, YouTube, or guesswork to make financial decisions. Expert help is scarce, expensive, and often biased. With LLMs and APIs, we can now build accessible AI finance tools that provide personalized advice to anyone with a smartphone.",
    whyItMatters:
      "Millions across India make poor financial decisions due to lack of guidance. A simple, AI-powered copilot can help improve financial literacy and long-term wellbeing—especially in Tier-2/3 cities.",
    yourTask: [
      "Identify a core financial pain point (e.g., budgeting, taxes, investing)",
      "Build an AI advisor that gives simple, customized suggestions",
      "Ensure support for Indian users—languages, tax rules, local context",
    ],
    focusAreas: [
      "AI tools for tax planning or investment advice",
      "Budget planners with voice/vernacular interfaces",
      "Debt management and credit improvement tools",
      "Education tools that explain finance in plain language",
      "Bonus: Build for Bharat—focus on non-metro audiences",
    ],
    impact:
      "High - Empower people to make smarter money decisions and plan their financial future with confidence",
  },
  {
    id: 7,
    title: "Can You Build Vertical AI Agents That Automate Real Work?",
    category: "Automation",
    icon: <Cpu className="h-6 w-6" />,
    difficulty: "Advanced",
    timeEstimate: "36-48 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Design AI agents that don't just talk—but think, act, and automate real-world work in specific Indian industries.",
    challenge:
      "Build a domain-specific AI agent that automates complex work—like tax filing, compliance checks, support calls, or data processing—at Indian scale.",
    context:
      "India is full of manual, rule-based jobs in tax, healthcare, compliance, and service sectors. Vertical AI agents can replace these with intelligent systems that deeply understand the domain, integrate with real tools, and deliver end-to-end automation.",
    whyItMatters:
      "This is the next evolution of SaaS—vertical AI that can reason, automate, and replace repetitive work. It’s a massive opportunity to improve productivity and build AI-native businesses in India.",
    yourTask: [
      "Pick a real-world workflow that’s manual and repetitive",
      "Design a domain-specific AI agent that can fully or partially automate it",
      "Include real integrations (PDFs, voice, Excel, APIs) and Indian localization",
    ],
    focusAreas: [
      "AI agents for tax, billing, support, logistics, compliance",
      "Support for Indian languages and legal/tax frameworks",
      "Integration with real-world data (documents, APIs, forms)",
      "End-to-end workflows, not just chatbot front-ends",
      "Bonus: Deploy in a simulation or real-world mock scenario",
    ],
    impact:
      "Very High - Automate massive amounts of manual work across India's industries with vertical AI solutions",
  },
];

export default function ProblemsPage() {
  const [activeCategory, setActiveCategory] = useState("All Challenges");

  const filteredProblems =
    activeCategory === "All Challenges"
      ? problemStatements
      : problemStatements.filter(
          (problem) => problem.category === activeCategory
        );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Advanced":
        return "bg-red-100 text-red-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section - Y Combinator Style */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Challenges for Innovators
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              These are real-world problems we'd like to see teams tackle. Each
              represents an opportunity to create meaningful impact with AI.
              Choose one that excites you, take it as extra validation to dive
              in, but you don't need to work on these ideas to participate in
              the hackathon.
            </p>
          </div>
        </section>

        {/* Category Navigation - Y Combinator Style */}
        <section className="py-8 px-4 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Active Category Description */}
        <section className="py-12 px-4 bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {activeCategory === "All Challenges"
                ? "All Challenges"
                : activeCategory}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {activeCategory === "All Challenges"
                ? "2025 is shaping up to be the year of practical AI applications. We've put together a list of challenge areas that we think are especially promising for creating real-world impact through innovative solutions."
                : `Focused challenges in ${activeCategory.toLowerCase()} that leverage AI to solve critical problems and create meaningful impact in this domain.`}
            </p>
          </div>
        </section>

        {/* Problem Statements - Y Combinator Style */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="container max-w-4xl mx-auto space-y-16">
            {filteredProblems.map((problem) => (
              <div
                key={problem.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                        {problem.icon}
                      </div>
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                        {problem.category}
                      </span>
                      <span
                        className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${getDifficultyColor(
                          problem.difficulty
                        )}`}
                      >
                        {problem.difficulty}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {problem.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {problem.shortDescription}
                    </p>
                  </div>

                  {/* Context */}
                  <div className="mb-8">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {problem.context}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {problem.whyItMatters}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Your Challenge
                    </h4>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {problem.challenge}
                    </p>

                    <div className="space-y-3">
                      {problem.yourTask.map((task, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      What to Focus On
                    </h4>
                    <div className="space-y-3">
                      {problem.focusAreas.map((area, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">{area}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Time Estimate
                        </p>
                        <p className="text-sm text-gray-600">
                          {problem.timeEstimate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Team Size
                        </p>
                        <p className="text-sm text-gray-600">
                          {problem.teamSize}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Impact
                        </p>
                        <p className="text-sm text-gray-600">
                          {problem.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  {/* <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Work on This Challenge
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                      Discuss with Mentors
                    </Button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
