import { Shield, Scale, FileText, Users, Trophy, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

// Rules data structure from PDF
const rulesData = {
  title: "JAZZEE T$O GEN-AI HACKATHON – RULES & REGULATIONS",
  subtitle:
    "To ensure a fair, innovative, and impactful experience for all participants, the following rules and regulations must be strictly followed:",
  sections: [
    {
      title: "Integrity & Originality",
      icon: <Shield className="h-6 w-6" />,
      rules: [
        {
          number: 1,
          title: "No Plagiarism",
          description:
            "All submissions must be original. Any instance of copied work (from the internet, existing products, or other teams) will lead to immediate disqualification.",
        },
        {
          number: 2,
          title: "AI Assistance Declaration",
          description:
            "If external Gen-AI tools (e.g., ChatGPT, Gemini, Copilot) are used during ideation, they must be declared in the framework document.",
        },
      ],
    },
    {
      title: "Submission Rules",
      icon: <FileText className="h-6 w-6" />,
      rules: [
        {
          number: 3,
          title: "One Submission per Team",
          description:
            "Only one submission (video + document) is allowed per registered team. Multiple entries will not be considered.",
        },
        {
          number: 4,
          title: "Submission Deadline",
          description:
            "All files must be submitted before 11:59 PM on 16th June 2025 through the Jazzee Edtech App. Late submissions will not be evaluated.",
        },
        {
          number: 5,
          title: "File Format & Naming",
          description:
            "GitHub Repository must be submitted through the Jazzee Edtech app and public mode must be enabled. The GitHub Repository must contain both the Video link + Document in one single repository itself following the naming convention.",
          details: [
            "TeamName_TeamLeader_Jazzee2025 (GitHub Repository)",
            "TeamName_TeamLeader_Jazzee2025_PitchVideo (YouTube Video Name)",
            "TeamName_TeamLeader_Jazzzee2025_Document (format-pdf)",
          ],
        },
      ],
    },
    {
      title: "Evaluation & Decisions",
      icon: <Scale className="h-6 w-6" />,
      rules: [
        {
          number: 6,
          title: "Judges' Decision is Final",
          description:
            "The judging panel's evaluation and scoring will be final and binding. No queries or objections will be entertained post-evaluation.",
        },
        {
          number: 7,
          title: "Evaluation is Confidential",
          description:
            "Judging scores, feedback, and discussions will remain confidential and will not be shared with participants.",
        },
      ],
    },
    {
      title: "Team Conduct & Eligibility",
      icon: <Users className="h-6 w-6" />,
      rules: [
        {
          number: 8,
          title: "Respectful Behavior",
          description:
            "All participants must maintain professionalism, respect mentors, judges, and fellow teams. Any form of misconduct may result in disqualification.",
        },
        {
          number: 9,
          title: "Team Composition",
          description:
            "A team must consist of 2–5 members. All members must have been registered by the official registration deadline.",
        },
      ],
    },
    {
      title: "Use of External Resources",
      icon: <CheckCircle className="h-6 w-6" />,
      rules: [
        {
          number: 10,
          title: "Allowed Tools",
          description:
            "Publicly available APIs, open-source datasets, and Gen-AI tools can be used as long as proper credits are given and originality is maintained.",
        },
        {
          number: 11,
          title: "No Pre-built Solutions",
          description:
            "Pre-existing commercial or open-source solutions that are only marginally modified will not be accepted.",
        },
      ],
    },
    {
      title: "General Provisions",
      icon: <AlertTriangle className="h-6 w-6" />,
      rules: [
        {
          number: 12,
          title: "Publicity Rights",
          description:
            "By participating, you grant Jazzee the right to showcase your idea, team name, and pitch for promotional or educational purposes.",
        },
        {
          number: 13,
          title: "Data Confidentiality",
          description:
            "Participants are responsible for ensuring that no confidential or sensitive information is included in their submission.",
        },
        {
          number: 14,
          title: "Disqualification Rights",
          description:
            "Jazzee reserves the right to disqualify any team at any stage for violating any of the above rules or engaging in unfair practices.",
        },
      ],
    },
  ],
}

// Evaluation criteria data structure from PDF
const evaluationData = {
  title: "T$O GEN-AI HACKATHON EVALUATION JUDGING CRITERIA",
  subtitle: "Round 1 Evaluation Guidelines",
  totalPoints: 100,
  deadline: "16th June 2025, 11:59 pm",
  submissionRequirements: [
    {
      title: "2-Minute Video Pitch",
      format: "YouTube video through GitHub Repository (Link must be given in the repository)",
      objective: "Clearly communicate the problem, your proposed solution, and the role of Gen-AI",
      note: "Your 2-minute video can be animated, illustrated, narrated, or creatively presented—feel free to explain the problem and solution in any engaging format.",
    },
    {
      title: "2-Page Framework Document (PDF)",
      format: "PDF format with Verdana font, size 12",
      content: [
        "Page 1: Problem Statement, Target Audience, Relevance of Problem",
        "Page 2: Gen-AI Use Case, Solution Framework or Workflow, and Expected Impact",
      ],
    },
  ],
  judgingCriteria: {
    videoPitch: {
      title: "VIDEO PITCH",
      totalPoints: 60,
      criteria: [
        {
          name: "Communication & Clarity",
          description: "How clearly and concisely is the idea and solution conveyed?",
          points: 20,
        },
        {
          name: "Problem Understanding",
          description: "Is the problem relevant and well-articulated?",
          points: 20,
        },
        {
          name: "Creativity & Innovation",
          description: "How creative or original is the solution and its presentation?",
          points: 10,
        },
        {
          name: "Gen-AI Relevance",
          description: "Is the use of Gen-AI meaningful and aligned with the problem?",
          points: 10,
        },
      ],
      timeDistribution: [
        {
          segment: "Introduction",
          content: "Briefly introduce your team and the problem you're solving",
          time: "0:00 – 0:20 (20s)",
        },
        {
          segment: "Problem Explanation",
          content: "Clearly define the problem, its context, and why it matters",
          time: "0:20 – 0:45 (25s)",
        },
        {
          segment: "Gen-AI Solution Overview",
          content: "Explain your proposed solution and how Generative AI is being applied",
          time: "0:45 – 1:20 (35s)",
        },
        {
          segment: "Innovation & Impact",
          content: "Highlight what makes your approach unique and the potential impact",
          time: "1:20 – 1:45 (25s)",
        },
        {
          segment: "Closing",
          content: "Summarize your idea and make a strong closing statement",
          time: "1:45 – 2:00 (15s)",
        },
      ],
    },
    frameworkDocument: {
      title: "FRAMEWORK DOCUMENT",
      totalPoints: 40,
      bonusPoints: 10,
      criteria: [
        {
          name: "Solution Approach & Structure",
          description: "Is the proposed approach realistic, well-organized, and technically feasible?",
          points: 15,
        },
        {
          name: "Depth of Problem Analysis",
          description: "Does the document reflect a thoughtful understanding of the problem?",
          points: 10,
        },
        {
          name: "Gen-AI Application Framework",
          description: "Is the role of Gen-AI clearly defined and incorporated logically into the solution?",
          points: 10,
        },
        {
          name: "Document Quality & Presentation",
          description: "Is the document professional, clear, and well-structured?",
          points: 5,
        },
        {
          name: "Bonus Minimum Lovable Product",
          description: "Turn your idea into a viable business to gain extra 10 points!",
          points: 10,
          isBonus: true,
        },
      ],
      wordCountBreakdown: [
        {
          section: "Problem Statement",
          description: "Clearly define the problem, who it affects, and why it is important to solve it",
          wordCount: "100–120 words",
        },
        {
          section: "Target Audience & Context",
          description: "Describe the specific audience or users affected and the background context",
          wordCount: "80–100 words",
        },
        {
          section: "Use of Gen-AI",
          description: "Explain how Generative AI will be applied to solve the problem and why it's suitable",
          wordCount: "120–150 words",
        },
        {
          section: "Solution Framework",
          description: "Detail the core idea, approach, workflow, or high-level architecture (can include diagram)",
          wordCount: "200–250 words",
        },
        {
          section: "Feasibility & Execution",
          description: "Mention how the idea can be implemented practically, including tools or data needed",
          wordCount: "80–100 words",
        },
        {
          section: "Scalability & Impact",
          description: "Explain the potential for scaling the solution and its impact if implemented",
          wordCount: "80–100 words",
        },
        {
          section: "Conclusion / Summary & Bonus Minimum Lovable Product",
          description: "Summarize your idea, highlight its uniqueness, and show its potential as a viable business",
          wordCount: "50–70 words",
        },
      ],
    },
  },
}

export default function RulesPage() {
  return (
    <div className="flex flex-col min-h-screen px-4">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-orange-50">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Rules & Evaluation Criteria</h1>
            <p className="text-center mt-2 text-gray-600 max-w-3xl mx-auto">
              Complete guidelines for participation, submission requirements, and judging criteria for the GENAI
              HACKATHON T$O - 2025.
            </p>
          </div>
        </section>

        {/* Rules Section */}
        <section className="py-12 bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{rulesData.title}</h2>
              <p className="text-gray-600 leading-relaxed">{rulesData.subtitle}</p>
            </div>

            <div className="space-y-12">
              {rulesData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-orange-50 p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="text-orange-600">{section.icon}</div>
                      <h3 className="text-xl font-bold">{section.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {section.rules.map((rule, ruleIndex) => (
                        <div key={ruleIndex} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold">
                            {rule.number}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold mb-2">{rule.title}</h4>
                            <p className="text-gray-600 mb-3">{rule.description}</p>
                            {rule.details && (
                              <ul className="space-y-1">
                                {rule.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="flex items-start gap-2">
                                    <span className="text-orange-500 mt-1">•</span>
                                    <span className="text-gray-600 text-sm font-mono">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation Criteria Section */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{evaluationData.title}</h2>
              <p className="text-lg text-gray-600 mb-2">{evaluationData.subtitle}</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-orange-500" />
                  <span>Total: {evaluationData.totalPoints} Points</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span>Deadline: {evaluationData.deadline}</span>
                </div>
              </div>
            </div>

            {/* Submission Requirements */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">ROUND 1: SUBMISSION DETAILS</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {evaluationData.submissionRequirements.map((req, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-lg mb-3">{req.title}</h4>
                    <p className="text-gray-600 mb-3">
                      <strong>Format:</strong> {req.format}
                    </p>
                    {req.objective && (
                      <p className="text-gray-600 mb-3">
                        <strong>Objective:</strong> {req.objective}
                      </p>
                    )}
                    {req.content && (
                      <div className="mb-3">
                        <strong className="text-gray-700">Content:</strong>
                        <ul className="mt-2 space-y-1">
                          {req.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {req.note && <p className="text-sm text-gray-500 italic">{req.note}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Video Pitch Criteria */}
            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                    {evaluationData.judgingCriteria.videoPitch.totalPoints} Points
                  </span>
                  {evaluationData.judgingCriteria.videoPitch.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Judging Criteria</h4>
                    <div className="space-y-4">
                      {evaluationData.judgingCriteria.videoPitch.criteria.map((criterion, index) => (
                        <div key={index} className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h5 className="font-medium">{criterion.name}</h5>
                            <p className="text-sm text-gray-600">{criterion.description}</p>
                          </div>
                          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-bold">
                            {criterion.points} pts
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4">Suggested Time Distribution</h4>
                    <div className="space-y-3">
                      {evaluationData.judgingCriteria.videoPitch.timeDistribution.map((segment, index) => (
                        <div key={index} className="border-l-2 border-orange-200 pl-4">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="font-medium text-sm">{segment.segment}</h5>
                            <span className="text-xs text-gray-500 font-mono">{segment.time}</span>
                          </div>
                          <p className="text-xs text-gray-600">{segment.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Framework Document Criteria */}
            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                    {evaluationData.judgingCriteria.frameworkDocument.totalPoints} +{" "}
                    {evaluationData.judgingCriteria.frameworkDocument.bonusPoints} Bonus Points
                  </span>
                  {evaluationData.judgingCriteria.frameworkDocument.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Judging Criteria</h4>
                    <div className="space-y-4">
                      {evaluationData.judgingCriteria.frameworkDocument.criteria.map((criterion, index) => (
                        <div key={index} className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <h5 className="font-medium">{criterion.name}</h5>
                            <p className="text-sm text-gray-600">{criterion.description}</p>
                          </div>
                          <span
                            className={`px-2 py-1 rounded text-sm font-bold ${
                              criterion.isBonus ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                            }`}
                          >
                            {criterion.points} pts
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4">Word Count Breakdown</h4>
                    <div className="space-y-3">
                      {evaluationData.judgingCriteria.frameworkDocument.wordCountBreakdown.map((section, index) => (
                        <div key={index} className="border border-gray-200 rounded p-3">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium text-sm">{section.section}</h5>
                            <span className="text-xs text-orange-600 font-bold">{section.wordCount}</span>
                          </div>
                          <p className="text-xs text-gray-600">{section.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-4">Need Help or Clarification?</h3>
              <p className="text-gray-600 mb-4">
                We're excited to see how you think about using Gen-AI to tackle real-world challenges. Think bold, think
                practical, and most importantly—think impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <span>📧 tdo@jazzee.ai</span>
                <span>📞 +91 9911024979</span>
                <Link href={"/"}>🌐 hackathon.jazzeetechnologies.com</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
