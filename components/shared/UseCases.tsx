export function UseCases() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-orange-50 px-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">Categories & Use Cases</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Software Development */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-orange-500 mb-6">
              <span className="text-blue-500 mr-2">♦</span> Software Development
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>AI-powered code generation & debugging assistants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Personalized AI chatbots for customer support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>AI-enhanced document summarization tools</span>
              </li>
            </ul>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-orange-500 mb-6">
              <span className="text-blue-500 mr-2">♦</span> Cybersecurity
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>AI-driven phishing detection & prevention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Automated vulnerability scanning & risk analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>AI models for anomaly detection in network traffic</span>
              </li>
            </ul>
          </div>

          {/* Internet of Things (IoT) */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-orange-500 mb-6">
              <span className="text-blue-500 mr-2">♦</span> Internet of Things (IoT)
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Smart home automation with AI decision-making</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Predictive maintenance for industrial IoT sensors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>AI-powered traffic and environmental monitoring systems</span>
              </li>
            </ul>
          </div>

          {/* Healthcare & Medical AI */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-orange-500 mb-6">
              <span className="text-blue-500 mr-2">♦</span> Healthcare & Medical AI
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Medical image analysis and diagnosis assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Patient data analysis and predictive healthcare</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Drug discovery and development optimization</span>
              </li>
            </ul>
          </div>

          {/* Sustainable AI */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-orange-500 mb-6">
              <span className="text-blue-500 mr-2">♦</span> Sustainable AI
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Energy consumption optimization for smart grids</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Climate change prediction and mitigation models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Sustainable resource management and allocation</span>
              </li>
            </ul>
          </div>

          {/* Financial Crime */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-orange-500 mb-6">
              <span className="text-blue-500 mr-2">♦</span> Financial Crime
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Fraud detection and prevention systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Anti-money laundering pattern recognition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black mt-1">•</span>
                <span>Real-time transaction monitoring and risk scoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
