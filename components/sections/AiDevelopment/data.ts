import type { Action, Hero } from "@/lib/types";

export type AIClient = {
  id: string;
  logo: string;
  name: string;
  description: string;
};

export type AIService = {
  title: string;
  description: string;
  features: string[];
  category: string;
};

export type AIBenefit = {
  title: string;
  description: string;
};

export type DevelopmentStep = {
  number: string;
  title: string;
  description: string;
};

export type AIPlan = {
  name: string;
  subtitle: string;
  description: string;
  nprPrice: string;
  usdPrice: string;
  billing: string;
  features: string[];
  hosting: string;
  suitableFor: string;
  popular?: boolean;
  action: Action;
};

export type AIFaq = {
  question: string;
  answer: string;
};

export type AIDevelopmentContent = {
  hero: Hero;
  services: {
    title: string;
    description: string;
    items: AIService[];
  };
  benefits: {
    tag: string;
    title: string;
    description: string;
    image: string;
    items: string[];
    imageAlt: string;
  };
  pricing: {
    title: string;
    description: string;
    note: string;
    items: AIPlan[];
  };
  customPricing: {
    title: string;
    description: string;
    action: {
      label: string;
      href: string;
    };
  };
  faqs: {
    title: string;
    description: string;
    items: AIFaq[];
  };
};

export const aiDevelopmentContent: AIDevelopmentContent = {
  hero: {
    eyebrow: "AI Development & Integration",
    title: "AI Development Company",
    accent: "in Nepal",
    subtitle:
      "Build smarter business solutions with custom AI development in Nepal. From RAG-powered chatbots and predictive machine learning to computer vision applications, we develop practical AI systems that solve real business problems.",
    bullets: [
      "RAG AI Chatbot Development",
      "Predictive Machine Learning",
      "AI Object Detection & Computer Vision",
    ],
    actions: [
      {
        label: "Discuss Your AI Project",
        href: "/contact",
      },
      {
        label: "Explore AI Pricings",
        href: "#pricing",
      },
    ],
    meta: [
      {
        label: "Specialization",
        value: "AI & Machine Learning",
      },
      {
        label: "Core Services",
        value: "Chatbots, Prediction & Vision",
      },
      {
        label: "Project Type",
        value: "Custom AI Development",
      },
    ],
    backgroundImage: "/about-banner.webp",
  },

  services: {
    title: "AI Development & Machine Learning Services",
    description:
      "Explore our AI development services in Nepal, including intelligent chatbots, predictive machine learning models and computer vision systems designed around your business requirements.",
    items: [
      {
        category: "AI Chatbots",
        title: "AI Chatbot Development & RAG Integration",
        description:
          "Develop RAG-powered AI chatbots that retrieve information from your business documents, PDFs, website content and knowledge bases to provide relevant, context-aware responses.",
        features: [
          "RAG-based knowledge retrieval",
          "PDF and document integration",
          "Website and FAQ integration",
          "Context-aware AI responses",
        ],
      },
      {
        category: "Machine Learning",
        title: "Predictive AI & Machine Learning Development",
        description:
          "Build predictive machine learning models that analyze historical business data to forecast demand, identify trends, classify information and support data-driven decisions.",
        features: [
          "Sales and demand forecasting",
          "Predictive data analytics",
          "Data classification models",
          "Machine learning model integration",
        ],
      },
      {
        category: "Computer Vision",
        title: "AI Object Detection & Image Recognition",
        description:
          "Develop computer vision applications that detect, recognize and classify objects in images and videos using suitable AI models for real-world applications.",
        features: [
          "Real-time object detection",
          "Image recognition and classification",
          "Video-based visual analysis",
          "Pretrained model adaptation",
        ],
      },
    ],
  },

  benefits: {
    tag: "Why Choose Navo Cloud Solutions",
    title: "Practical AI Solutions Built Around Your Business",
    description:
      "AI development should solve specific problems, not add unnecessary complexity. We focus on building useful AI applications that integrate with your existing systems, improve business processes and support smarter decisions.",
    image: "/images/additional/benefits.avif",
    imageAlt: "AI development and machine learning solutions",
    items: [
      "Business-focused AI application development",
      "Custom machine learning model integration",
      "RAG-powered business knowledge systems",
      "Computer vision and image recognition solutions",
      "Integration with existing websites and software",
      "Scalable AI architecture based on project requirements",
    ],
  },

  pricing: {
    title: "AI Development Packages & Starting Prices",
    description:
      "Choose an AI development package based on your project requirements. Each package focuses on a specific AI application, with final pricing depending on data availability, functionality, integrations and deployment requirements.",
    note: "Prices are starting estimates for focused projects. AI API usage, cloud hosting, GPU computing, extensive dataset preparation and advanced custom model training may involve additional costs.",
    items: [
      {
        name: "AI Chatbot Development",
        subtitle: "RAG-Powered Business Chatbots",
        description:
          "Build an AI chatbot that understands your business knowledge and provides relevant answers using your documents and information.",
        nprPrice: "85,000",
        usdPrice: "650",
        billing: "One-time",
        features: [
          "RAG-based AI chatbot development",
          "PDF and document knowledge base",
          "Website and FAQ integration",
          "Context-aware AI responses",
          "Basic chatbot interface",
          "Testing and deployment",
        ],
        hosting: "Hosting and AI API usage charged separately.",
        suitableFor:
          "Businesses that want an AI chatbot to answer customer questions using their own information.",
        action: {
          label: "Get Started",
          href: "/contact",
        },
      },
      {
        name: "Predictive AI Development",
        subtitle: "Machine Learning & Predictive Analytics",
        description:
          "Turn available business data into useful predictions, forecasts and insights using machine learning models.",
        nprPrice: "120,000",
        usdPrice: "900",
        billing: "One-time",
        popular: true,
        features: [
          "One focused prediction use case",
          "Data assessment and preparation",
          "Machine learning model development",
          "Prediction and forecasting",
          "Model evaluation and testing",
          "Basic API or software integration",
        ],
        hosting:
          "Cloud hosting and additional computing costs charged separately.",
        suitableFor:
          "Businesses that want to forecast sales, predict demand, analyze trends or classify business data.",
        action: {
          label: "Get Started",
          href: "/contact",
        },
      },
      {
        name: "Computer Vision Development",
        subtitle: "AI Object Detection & Image Recognition",
        description:
          "Develop AI-powered visual applications that detect, recognize and analyze objects in images or video streams.",
        nprPrice: "150,000",
        usdPrice: "1,150",
        billing: "One-time",
        features: [
          "One focused computer vision use case",
          "AI object detection",
          "Image recognition and classification",
          "Pretrained model adaptation",
          "Model evaluation and testing",
          "Basic API or application integration",
        ],
        hosting:
          "GPU computing, video infrastructure and cloud hosting charged separately.",
        suitableFor:
          "Businesses that need visual inspection, object detection, image classification or video-based AI applications.",
        action: {
          label: "Get Started",
          href: "/contact",
        },
      },
    ],
  },

  customPricing: {
    title: "Need a Custom AI Application?",
    description:
      "From speech recognition and OCR document processing to recommendation systems, AI workflow automation and advanced machine learning applications, we develop custom AI solutions based on your requirements. Share your project idea with us for a feasibility assessment and a tailored development quotation.",
    action: {
      label: "Discuss a Custom AI Project",
      href: "/contact",
    },
  },

  faqs: {
    title: "Frequently Asked Questions About AI Development",
    description:
      "Find answers to common questions about AI development, machine learning integration, RAG chatbots and computer vision services in Nepal.",
    items: [
      {
        question: "What is RAG-based AI chatbot development?",
        answer:
          "Retrieval-Augmented Generation (RAG) allows an AI chatbot to retrieve relevant information from your documents, PDFs, website content or knowledge base before generating an answer. This helps provide responses based on your business information.",
      },
      {
        question: "Can you build an AI chatbot using our company documents?",
        answer:
          "Yes. We can develop a RAG-based chatbot that uses your provided PDFs, documents, FAQs and other supported knowledge sources to answer user questions.",
      },
      {
        question: "What types of predictive AI models can you develop?",
        answer:
          "Depending on data availability and project requirements, we can develop machine learning solutions for sales forecasting, demand prediction, trend analysis and data classification.",
      },
      {
        question:
          "What is the difference between predictive AI and computer vision?",
        answer:
          "Predictive AI analyzes data to estimate future outcomes or classify information. Computer vision analyzes images and videos to detect, recognize and classify visual objects or patterns.",
      },
      {
        question: "Can you develop custom object detection systems?",
        answer:
          "Yes. We can adapt suitable pretrained models or develop custom computer vision solutions for specific object detection and image recognition requirements. The scope depends on available data and model complexity.",
      },
      {
        question: "Do AI applications require GPU servers?",
        answer:
          "Not always. Many AI applications can use hosted AI APIs or pretrained models without dedicated GPU infrastructure. GPU computing may be necessary for demanding video processing, large-scale inference or custom model training.",
      },
      {
        question: "Are hosting and AI API costs included in the packages?",
        answer:
          "No. Third-party AI API usage, cloud hosting, vector database services and GPU computing are generally separate operational expenses unless specifically included in your project quotation.",
      },
      {
        question: "Can you build AI applications beyond the listed packages?",
        answer:
          "Yes. We also undertake custom AI development projects involving speech recognition, OCR, recommendation systems, AI workflow automation and other specialized applications. These projects receive custom quotations based on their requirements.",
      },
    ],
  },
};
