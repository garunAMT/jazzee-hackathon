"use client";

import { useState } from "react";
import {
  Clock,
  Users,
  Trophy,
  Palette,
  Phone,
  Heart,
  GraduationCap,
  BookOpen,
  Wallet,
  Cpu,
  Stethoscope,
  Leaf,
  Search,
  Activity,
  Brain,
  Briefcase,
  Scan,
  Sprout,
  Eye,
  Building,
  Puzzle,
  AlertTriangle,
} from "lucide-react";

const categories = [
  "All Challenges",
  "Design & UX",
  "Voice AI",
  "Healthcare",
  "Education",
  "Fintech",
  "Automation",
  "Climate",
  "AI + Web Tools",
  "Business",
  "Governance",
  "Agriculture",
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
  {
    id: 8,
    title:
      "Can You Build an AI Assistant That Transforms Doctor-Patient Workflows?",
    category: "Healthcare",
    icon: <Stethoscope className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Design AI tools for doctors and patients that streamline prescription creation and medicine reminders—powered by voice and intelligent automation.",
    challenge:
      "Build an AI assistant that listens to doctors’ voice commands and generates prescriptions, plus a patient-facing app that reminds and validates medicine intake.",
    context:
      "Doctors in India are often overburdened and short on time, while patients struggle with prescription adherence and instructions. With voice AI and smart reminders, we can simplify both ends of the healthcare experience.",
    whyItMatters:
      "Paper-based prescriptions are error-prone and time-consuming. On the other side, many patients skip doses or misunderstand instructions. With voice-enabled AI assistants, we can create a smoother, safer healthcare loop for both doctors and patients.",
    yourTask: [
      "Build a voice-driven prescription assistant for doctors",
      "Create a companion app for patients to track medicine schedules",
      "Add proof-of-intake or confirmation mechanisms (e.g., camera or voice prompts)",
    ],
    focusAreas: [
      "Voice-to-text for medical use cases",
      "Prescription generation and digitization",
      "Automated reminders and alerts",
      "Patient engagement and compliance tracking",
      "Bonus: Support for multiple Indian languages and accents",
    ],
    impact: "High - Improve healthcare efficiency and medication adherence",
  },
  {
    id: 9,
    title: "Can AI Help Us Make Climate-Friendly Daily Decisions?",
    category: "Climate",
    icon: <Leaf className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Build a mobile-based AI system that alerts users before climate-damaging actions and crowdsources weather data from individuals.",
    challenge:
      "Create a dual-purpose app: one that nudges users to act climate-consciously in real time, and another that collects hyperlocal weather data from users (with consent) to improve forecasting.",
    context:
      "Despite growing awareness, most people don’t realize when their everyday actions harm the planet. Meanwhile, India lacks dense, real-time weather data. AI and crowdsourcing can help solve both problems at scale.",
    whyItMatters:
      "Behavior change is critical to fighting climate change, and hyperlocal data is key to better climate models. A mobile AI assistant can help with both—by raising awareness and gathering insights directly from citizens.",
    yourTask: [
      "Build an app that detects and alerts users before high-emission actions (e.g., unnecessary vehicle use, AC usage)",
      "Create a consent-based crowdsourcing system for users to upload local weather data",
      "Incentivize participation and ensure user-friendly data input (e.g., voice or image-based)",
    ],
    focusAreas: [
      "Real-time behavioral nudges using AI",
      "Crowdsourced sensor/data input",
      "Location and privacy-aware app design",
      "Climate education via micro-interactions",
      "Bonus: Integrate with environmental APIs or IoT devices",
    ],
    impact:
      "Very High - Help individuals take climate-positive actions while improving national weather data",
  },
  {
    id: 10,
    title: "Can You Build a Browser Lens That Filters the Internet for You?",
    category: "AI + Web Tools",
    icon: <Search className="h-6 w-6" />,
    difficulty: "Advanced",
    timeEstimate: "36-48 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Create a browser extension that stays with your query, intelligently highlighting or summarizing relevant content across webpages.",
    challenge:
      "Design a persistent browser assistant that remembers your query and helps you find the most relevant information on every page—especially useful for shopping, research, or comparisons.",
    context:
      "Search engines today show you AI answers and links—but once you click, you're on your own. Users are stuck digging through pages. An AI overlay that guides your browsing experience could massively reduce this friction.",
    whyItMatters:
      "Whether comparing product specs, researching a topic, or fact-checking across sites, people spend too much time scanning for answers. A persistent, context-aware browser layer can make digital exploration smarter and more efficient.",
    yourTask: [
      "Build a browser extension that tracks user queries",
      "Overlay relevant highlights, summaries, or insights as users browse webpages",
      "Allow dynamic follow-ups or zooming into specific content on the page",
    ],
    focusAreas: [
      "Browser extension development",
      "Contextual NLP for summarization and relevance",
      "Real-time page augmentation",
      "Support for shopping, learning, or research scenarios",
      "Bonus: Multi-tab memory and query refinement",
    ],
    impact:
      "High - Make the internet less overwhelming and more efficient for everyday users",
  },
  {
    id: 11,
    title:
      "Can You Build a Monitor That Detects Elderly Emergencies Without Being Asked?",
    category: "Healthcare",
    icon: <Activity className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Build a smart wearable that detects emergencies for elderly users based on abnormal motion, silence, or possible falls—without needing them to press a button.",
    challenge:
      "Current devices rely on elderly people pressing buttons during emergencies, but what if they can’t? Your task is to build a smarter, proactive alert system using wearables.",
    context:
      "Elderly users often wear bracelets or pendants that have emergency buttons. But if they fall unconscious or are unable to reach the button, help may not arrive in time. Intelligent monitoring can solve this.",
    whyItMatters:
      "India has over 140 million elderly people. Safety technologies must move from reactive to proactive to truly protect them—especially those living alone or with medical conditions.",
    yourTask: [
      "Design a wearable or mobile app that detects lack of motion or sudden falls",
      "Trigger a soft prompt ('Are you okay?') and escalate to emergency call if no response",
      "Integrate features like GPS tracking, heart rate, and ambient sensors (if available)",
    ],
    focusAreas: [
      "Fall detection using accelerometers/gyroscopes",
      "Emergency protocols and smart escalation",
      "Low power wearable integration",
      "Bonus: Combine with voice response and visual cues",
    ],
    impact:
      "High - Could save lives in situations where the elderly can't call for help themselves",
  },
  {
    id: 12,
    title:
      "Can You Build an AI Assistant That Helps People With Dementia Recall Things?",
    category: "Healthcare",
    icon: <Brain className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Create a mobile app for elderly people with dementia that listens to memory-related queries and helps them recall names, faces, and context using available data.",
    challenge:
      "Design an assistant that can intelligently fill memory gaps when a user says things like 'What’s Kumud’s son’s name again?', using cues from contacts, photos, and call logs.",
    context:
      "Dementia can impair short-term and associative memory. What if we built a kind of AI-powered memory jogger—something like Google, but tuned for personalized, everyday recall?",
    whyItMatters:
      "Families and caretakers of dementia patients struggle to help with constant memory lapses. A patient-friendly assistant could preserve dignity and increase independence.",
    yourTask: [
      "Build a voice-enabled assistant for casual memory queries",
      "Use context from contacts, messages, call logs, and photos to infer and answer",
      "Support multi-modal prompts (e.g., 'Show me his photo', or 'When did we last talk?')",
    ],
    focusAreas: [
      "Voice assistant for elder-friendly UX",
      "Personal knowledge graph from local data",
      "Multimodal recall (text, images, timeline)",
      "Bonus: Privacy and caregiver integration",
    ],
    impact:
      "Very High - Empowers dementia patients and reduces burden on caregivers",
  },
  {
    id: 13,
    title:
      "Can You Build an Executive Assistant That Preps You Before Every Meeting?",
    category: "Business",
    icon: <Briefcase className="h-6 w-6" />,
    difficulty: "Beginner",
    timeEstimate: "12-24 hours",
    teamSize: "1-3 members",
    shortDescription:
      "Create a tool that gives busy professionals a crisp briefing before each meeting—pulling relevant insights from past emails, CRM, calendar, and the web.",
    challenge:
      "Build a system that auto-generates a pre-meeting briefing using the invite info and context from various sources like email, documents, and web data.",
    context:
      "Executives jump from meeting to meeting. Context switching is hard, and prep often slips through. A smart briefing assistant can turn chaos into clarity.",
    whyItMatters:
      "From client names to pitch decks, the info is scattered across inboxes and CRMs. An intelligent summarizer could save hours every week and improve decisions.",
    yourTask: [
      "Pull meeting info from calendar",
      "Correlate with past emails, CRM entries, documents, and relevant external data",
      "Create a short, readable meeting brief (e.g., summary, last touchpoint, open tasks)",
    ],
    focusAreas: [
      "Email and calendar API integration",
      "Contextual summarization with LLMs",
      "Secure data handling",
      "Bonus: Slack/Teams notifications before the meeting",
    ],
    impact:
      "Moderate to High - Save time and raise the bar on meeting effectiveness",
  },
  {
    id: 14,
    title: "Can You Detect Diseases From X-rays Faster Than a Doctor?",
    category: "Healthcare",
    icon: <Scan className="h-6 w-6" />,
    difficulty: "Advanced",
    timeEstimate: "36-48 hours",
    teamSize: "3-4 members",
    shortDescription:
      "Build an AI tool to analyze X-rays and detect diseases like tuberculosis, pneumonia, and cancer—supporting faster, more accurate diagnoses.",
    challenge:
      "Design a diagnostic AI system that can detect anomalies in X-rays and assist doctors in identifying diseases like lung cancer, pneumonia, and tuberculosis.",
    context:
      "Radiologists are in short supply, especially in rural areas. Many diseases go undetected until too late. AI models can now match or exceed human performance in interpreting medical images, making early intervention possible.",
    whyItMatters:
      "Early detection saves lives. With overburdened healthcare systems, AI can augment radiologists and improve care access across India.",
    yourTask: [
      "Use open datasets or dummy medical image sets",
      "Train a model to detect multiple diseases in chest or breast X-rays",
      "Build an interface that gives interpretable visual outputs",
    ],
    focusAreas: [
      "Medical imaging (X-rays, scans)",
      "Disease detection (TB, pneumonia, cancer)",
      "AI interpretability",
      "Low-resource model deployment",
    ],
    impact: "Very High - Help doctors detect diseases earlier and save lives",
  },
  {
    id: 15,
    title: "Can You Help Farmers Get Real-Time Advice in Their Language?",
    category: "Agriculture",
    icon: <Sprout className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Design a multilingual advisory system for Indian farmers that gives real-time crop, weather, and market advice using geospatial data.",
    challenge:
      "Build an app that combines satellite insights and crop models with voice-based farmer support in local languages.",
    context:
      "Smallholder farmers lack access to timely and relevant crop advice. Language, digital illiteracy, and scattered information make it worse. AI + Bhashini + maps can change that.",
    whyItMatters:
      "Improved decisions mean better yields, income stability, and less crop loss. This directly impacts India's food security and rural economy.",
    yourTask: [
      "Pull geospatial data for weather, pests, crop health",
      "Generate actionable advice in Indian languages",
      "Include voice/chat interface for farmer interaction",
    ],
    focusAreas: [
      "Multimodal language support",
      "Crop health analytics and mapping",
      "Voice assistants for rural users",
      "Farmer-centric UX design",
    ],
    impact: "High - Improve income and resilience for millions of farmers",
  },
  {
    id: 16,
    title: "Can You Build an AI System That Sees Retinal Issues Before You Do?",
    category: "Healthcare",
    icon: <Eye className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Create a solution that scans retinal images to detect diabetic retinopathy, cataracts, or conditions needing keratoplasty.",
    challenge:
      "Develop an AI tool that screens for eye conditions using retinal images, reducing blindness and enabling timely treatment.",
    context:
      "India faces a rising burden of diabetes-related blindness. With fewer ophthalmologists per capita, AI can aid early detection and support surgical planning.",
    whyItMatters:
      "Blindness is often preventable if caught early. AI can democratize diagnostics in eye care, especially in remote areas.",
    yourTask: [
      "Analyze retinal image datasets",
      "Detect early signs of diabetic retinopathy or cataracts",
      "Include explainable outputs to aid doctors",
    ],
    focusAreas: [
      "Computer vision in healthcare",
      "Explainable AI for diagnostics",
      "Blindness prevention",
      "Surgical planning assistance",
    ],
    impact: "High - Reduce avoidable blindness and improve surgical outcomes",
  },
  {
    id: 17,
    title: "Can AI Be the Bridge Between Citizens and Government?",
    category: "Governance",
    icon: <Building className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Build a conversational agent in Indian languages that helps citizens access public services and register grievances.",
    challenge:
      "Create a multi-language AI assistant that provides information on schemes, files complaints, and navigates government processes.",
    context:
      "Many Indians—especially in rural areas—struggle to access government services due to language and literacy barriers. AI can simplify access and boost inclusion.",
    whyItMatters:
      "Bridging the citizen-government gap can unlock welfare, support legal empowerment, and improve service delivery.",
    yourTask: [
      "Design a chatbot or voice agent powered by Bhashini",
      "Pull data on government schemes or legal FAQs",
      "Enable complaint registration or service discovery",
    ],
    focusAreas: [
      "Voice/text chat in Indian languages",
      "Legal and public service information",
      "Multimodal accessibility (text, voice, image)",
      "Grievance management integration",
    ],
    impact: "Very High - Empower citizens and strengthen digital governance",
  },
  {
    id: 18,
    title: "Can You Help Kids With Learning Disabilities Learn Better?",
    category: "Education",
    icon: <Puzzle className="h-6 w-6" />,
    difficulty: "Intermediate",
    timeEstimate: "24-36 hours",
    teamSize: "2-4 members",
    shortDescription:
      "Build tools to detect dyslexia and other learning disabilities early—and provide gamified, adaptive learning tools to support them.",
    challenge:
      "Create an AI-based system to detect and support students with learning disabilities through early identification, gamified lessons, and adaptive content.",
    context:
      "SLDs like dyslexia are common but rarely diagnosed in India. Early support is crucial for self-esteem and success.",
    whyItMatters:
      "1 in 5 students may be affected, yet most go undiagnosed. Inclusive education needs AI to scale timely support.",
    yourTask: [
      "Build a diagnostic screening tool for SLDs in Indian languages",
      "Create gamified, accessible learning content",
      "Support different modalities (audio, text, visuals)",
    ],
    focusAreas: [
      "Early detection of dyslexia/dyscalculia",
      "Gamified and adaptive learning tools",
      "Local language and neurodiverse UX",
      "Inclusive education support",
    ],
    impact: "Very High - Enable inclusive education for millions of students",
  },
  {
    id: 19,
    title: "Can You Predict Disasters Before They Strike?",
    category: "Climate",
    icon: <AlertTriangle className="h-6 w-6" />,
    difficulty: "Advanced",
    timeEstimate: "36-48 hours",
    teamSize: "3-4 members",
    shortDescription:
      "Build AI systems that forecast extreme climate events like floods, cyclones, and heatwaves—giving early warnings and saving lives.",
    challenge:
      "Use AI to build early-warning systems for extreme weather. Pull from open datasets and simulate disaster alerts.",
    context:
      "India suffers from recurring climate disasters. AI can give authorities and citizens precious time to act—minimizing loss of life and property.",
    whyItMatters:
      "Early warnings are the frontline of disaster defense. With climate events growing more erratic, scalable forecasting is now a necessity.",
    yourTask: [
      "Model extreme events using weather datasets",
      "Predict floods, heatwaves, or air pollution spikes",
      "Simulate alert messages and action prompts",
    ],
    focusAreas: [
      "Disaster forecasting with AI",
      "Satellite data and weather analytics",
      "Crisis communication automation",
      "Mapping high-risk zones",
    ],
    impact: "Very High - Save lives and resources in vulnerable areas",
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
