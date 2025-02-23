import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Inventory Management`,
      description: `Never run out of critical supplies again. Our predictive system maintains optimal stock levels automatically.`,
      icon: <i className="las la-boxes"></i>,
    },
    {
      heading: `Smart Documentation`,
      description: `Reduce administrative work by 40% with our intelligent documentation system that learns your preferences.`,
      icon: <i className="las la-file-medical-alt"></i>,
    },
    {
      heading: `Patient Monitoring Dashboard`,
      description: `Track patient vitals, medications and progress all in one place with real-time alerts and insights.`,
      icon: <i className="las la-heartbeat"></i>,
    },
    {
      heading: `Automated Reordering`,
      description: `Set it and forget it. Supplies are automatically reordered based on your usage patterns and preferences.`,
      icon: <i className="las la-sync"></i>,
    },
    {
      heading: `Secure Communication`,
      description: `HIPAA-compliant messaging system for seamless communication between staff and patients.`,
      icon: <i className="las la-comments-dollar"></i>,
    },
    {
      heading: `Analytics & Reporting`,
      description: `Make data-driven decisions with comprehensive analytics on inventory, patient care and practice efficiency.`,
      icon: <i className="las la-chart-line"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Dr. Sarah Chen`,
      designation: `Family Practice Physician`,
      content: `AxxessDeezFacts cut our administrative work in half. I can finally focus on what matters most - my patients.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `James Wilson`,
      designation: `Practice Manager`,
      content: `The inventory management system saved us $50,000 in the first year alone by preventing waste and stockouts.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Dr. Michael Rodriguez`,
      designation: `Internal Medicine`,
      content: `Patient monitoring has never been easier. The automated alerts help us catch issues before they become serious.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Essential`,
      description: `Perfect for small practices just getting started`,
      monthly: 199,
      yearly: 1990,
      features: [
        `Basic inventory management`,
        `Patient records`,
        `Email support`,
      ],
    },
    {
      title: `Professional`,
      description: `Most popular for growing medical practices`,
      monthly: 399,
      yearly: 3990,
      features: [
        `Advanced inventory AI`,
        `Patient monitoring`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for large healthcare facilities`,
      monthly: 799,
      yearly: 7990,
      features: [
        `Custom integrations`,
        `Dedicated account manager`,
        `24/7 support`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How long does it take to implement AxxessDeezFacts?`,
      answer: `Most practices are up and running within 48 hours. Our team provides comprehensive onboarding support to ensure a smooth transition.`,
    },
    {
      question: `Is AxxessDeezFacts HIPAA compliant?`,
      answer: `Yes, we maintain strict HIPAA compliance with bank-level encryption and security protocols to protect patient data.`,
    },
    {
      question: `Can I integrate AxxessDeezFacts with my existing EHR system?`,
      answer: `Yes, we offer seamless integration with major EHR systems. Our team will work with you to ensure compatibility.`,
    },
    {
      question: `What kind of support do you offer?`,
      answer: `We provide 24/7 technical support, comprehensive training, and dedicated account management for enterprise clients.`,
    },
  ]

  const steps = [
    {
      heading: `Quick Setup`,
      description: `Get started in minutes with our guided setup process and import your existing data.`,
    },
    {
      heading: `Customize Your Workflow`,
      description: `Configure alerts, inventory thresholds, and monitoring parameters to match your practice.`,
    },
    {
      heading: `Train Your Team`,
      description: `Access our comprehensive training resources and get your staff up to speed quickly.`,
    },
    {
      heading: `Start Saving Time`,
      description: `Watch as administrative tasks are automated and efficiency improves across your practice.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😫`,
      title: `Drowning in paperwork and spending hours on administrative tasks`,
    },
    {
      emoji: `😤`,
      title: `Constantly running out of supplies or dealing with expired inventory`,
    },
    {
      emoji: `😰`,
      title: `Missing critical patient updates and feeling overwhelmed with monitoring`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform Your Healthcare Practice with Smart Automation`}
        subtitle={`Join over 1,000 healthcare providers who reduced administrative work by 40% while improving patient care`}
        buttonText={`Start Free Trial`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/TJE6zr-axxessdeezfacts-VnrO`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={1000}
            suffixText={`healthcare providers trust us`}
          />
        }
      />
      <LandingSocialProof title={`Featured on`} />
      <LandingPainPoints
        title={`Healthcare providers spend 4.5 hours daily on administrative tasks - that's time you could spend with patients`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Start Saving Time in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need to Run an Efficient Practice`}
        subtitle={`Powerful tools that reduce administrative burden and improve patient care`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Healthcare Providers Who Transformed Their Practice`}
        subtitle={`See how practices like yours achieved better efficiency and patient care`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Practice's Future`}
        subtitle={`Choose the plan that fits your practice size and needs`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About AxxessDeezFacts`}
        subtitle={`Everything you need to know about transforming your practice`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Practice?`}
        subtitle={`Join 1,000+ healthcare providers who are saving time and improving patient care`}
        buttonText={`Start Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
