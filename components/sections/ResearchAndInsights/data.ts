export type ResearchInsight = {
  slug: string;
  id: string;
  heading: string;
  subheading: string;
  description: string; // HTML
  content: string; // HTML
  category: string;
  date: string;
  additionals?: {
    pdf?: string;
    [key: string]: unknown;
  };
};

export const researchAndInsights: ResearchInsight[] = [
  {
    slug: "why-businesses-need-a-website-in-the-era-of-ai",
    id: "business-website-ai-era",

    heading:
      "Why Every Business Needs a Website in the Era of AI: A Navo Cloud Case Study",

    subheading:
      "Understanding how professional business websites build digital credibility, improve search visibility, attract customers, and support long-term growth in an AI-driven economy.",

    description: `
      <p>Artificial intelligence is changing how customers discover businesses, compare services, and make purchasing decisions. This case study by Navo Cloud Solutions examines why professional website development remains essential for business credibility, search engine visibility, AI-powered discovery, lead generation, and sustainable digital growth.</p>
    `,

    content: `
      <h2>Introduction: The Changing Digital Business Landscape</h2>

      <p>The way customers discover and interact with businesses is changing rapidly. Search engines, social media platforms, online directories, and artificial intelligence-powered assistants have introduced new channels through which people research products, compare services, and evaluate companies before making purchasing decisions.</p>

      <p>Despite these changes, a business website remains one of the most important digital assets an organization can establish. Artificial intelligence does not eliminate the need for websites. Instead, it introduces additional reasons for businesses to maintain structured, accessible, informative, and professionally developed online platforms.</p>

      <p>Businesses that depend exclusively on social media profiles or third-party platforms often have limited control over their online presentation, customer experience, information architecture, and digital growth strategies.</p>

      <h2>Case Study Objective and Business Context</h2>

      <p>This case study, developed from the perspective of Navo Cloud Solutions, explores the importance of professional business websites in an increasingly AI-driven economy. It examines how website development connects with search engine optimization (SEO), digital branding, customer acquisition, online credibility, and modern business automation.</p>

      <p>Rather than presenting a single customer implementation or claiming measured commercial results, this study evaluates common business challenges and identifies practical opportunities that organizations can address through a well-planned digital presence.</p>

      <h2>1. Establishing Digital Credibility and Brand Trust</h2>

      <p>Customers frequently research a company before contacting it or purchasing its products and services. A professional business website provides a centralized source of information where potential customers can understand what an organization offers, its experience, its expertise, and how to communicate with it.</p>

      <p>Important website elements include:</p>

      <ul>
        <li><strong>Company Information:</strong> Business background, mission, expertise, and organizational details.</li>
        <li><strong>Service Pages:</strong> Detailed explanations of products, services, pricing approaches, and business capabilities.</li>
        <li><strong>Portfolio and Case Studies:</strong> Project examples, technical capabilities, and previous work.</li>
        <li><strong>Customer Testimonials:</strong> Genuine customer feedback and experiences that support business credibility.</li>
        <li><strong>Contact Information:</strong> Accessible communication channels, inquiry forms, and business locations.</li>
      </ul>

      <p>Unlike social media profiles, a dedicated website provides greater control over brand identity, information architecture, navigation, and user experience. A consistent and professional digital presence can reduce uncertainty and help potential customers make informed decisions.</p>

      <h2>2. Search Engine Optimization and Organic Customer Acquisition</h2>

      <p>Search engine optimization allows businesses to reach people who are actively searching for relevant products, services, and solutions. A properly structured website can target specific search queries through dedicated service pages, informative articles, location-based landing pages, and technically optimized content.</p>

      <p>For example, a software development company can create individual pages targeting website development, custom software development, mobile application development, and AI integration. Each page can address a distinct customer requirement rather than relying on a single general business description.</p>

      <p>Important SEO elements include:</p>

      <ul>
        <li><strong>Keyword Optimization:</strong> Targeting relevant business and service-related search queries.</li>
        <li><strong>Technical SEO:</strong> Improving website performance, crawlability, mobile responsiveness, and indexing.</li>
        <li><strong>Content Strategy:</strong> Publishing informative articles, technical insights, and industry-related resources.</li>
        <li><strong>Structured Data:</strong> Helping search engines understand business information, services, articles, and website relationships.</li>
        <li><strong>Internal Linking:</strong> Connecting related pages to improve navigation and content discovery.</li>
      </ul>

      <p>Without a dedicated website, businesses have fewer opportunities to create search-optimized landing pages and control how their services are represented in organic search results.</p>

      <h2>3. Business Discovery Through AI Search and Language Models</h2>

      <p>Artificial intelligence is introducing new ways for customers to discover companies and research available services. Conversational AI assistants and AI-powered search experiences allow users to ask complex questions, compare business offerings, and explore recommendations using natural language.</p>

      <p>In this environment, websites can act as important sources of structured business information. Clearly written service descriptions, meaningful headings, accurate company information, descriptive page titles, and structured data help search engines and supported AI discovery systems interpret website content.</p>

      <p>Businesses should consider developing websites with:</p>

      <ul>
        <li>Clear and descriptive service information.</li>
        <li>Search-friendly page structures and meaningful headings.</li>
        <li>Schema.org structured data for relevant business entities and content.</li>
        <li>Accessible website content that search engine crawlers can process.</li>
        <li>Original articles that answer real customer questions.</li>
        <li>Consistent company details across digital platforms.</li>
      </ul>

      <p>However, simply owning a website does not guarantee inclusion in AI-generated answers or recommendations. Content relevance, technical accessibility, source credibility, information accuracy, and overall authority remain important considerations.</p>

      <h2>4. Website Ownership and Long-Term Digital Independence</h2>

      <p>Social media platforms and third-party marketplaces provide useful opportunities for business promotion, but organizations operate within the policies, algorithms, and technical limitations of those platforms.</p>

      <p>Changes in content distribution, account restrictions, advertising policies, or platform availability can affect how businesses reach their audiences. Depending entirely on external platforms therefore introduces an element of digital dependency.</p>

      <p>A business website provides greater control over its domain, content, design, navigation, integrations, and customer journeys. It can also serve as the foundation for future digital products, customer portals, e-commerce platforms, and internal business applications.</p>

      <h2>5. Lead Generation and Business Process Automation</h2>

      <p>A modern business website can do considerably more than display company information. It can function as an integrated customer acquisition platform that supports communication, inquiries, bookings, sales, and automated workflows.</p>

      <p>Businesses can implement features such as:</p>

      <ul>
        <li><strong>Inquiry Management:</strong> Contact forms and quotation requests that capture potential customer information.</li>
        <li><strong>Appointment Booking:</strong> Online scheduling for consultations and service appointments.</li>
        <li><strong>Customer Relationship Management:</strong> Integrations that organize customer inquiries and communication.</li>
        <li><strong>E-commerce:</strong> Product catalogs, shopping carts, payment gateways, and online ordering.</li>
        <li><strong>AI Chatbots:</strong> Automated responses to common questions and customer inquiries.</li>
        <li><strong>Workflow Automation:</strong> Connecting website submissions with email notifications, databases, and business management systems.</li>
      </ul>

      <p>These capabilities allow businesses to transform their websites into functional digital infrastructure rather than treating them as static online brochures.</p>

      <h2>6. The Business Cost of Not Having a Website</h2>

      <p>Operating without a professional website does not necessarily prevent a business from acquiring customers. However, it can introduce limitations in visibility, communication, brand presentation, and customer acquisition.</p>

      <p>Potential customers may struggle to find reliable information, understand available services, compare offerings, verify company details, or access convenient contact channels. Businesses may also miss opportunities to attract organic search traffic and communicate their expertise beyond their existing social media audience.</p>

      <p>For growing organizations, the absence of a website can additionally limit future integrations with customer management software, booking systems, payment services, analytics platforms, and AI-powered applications.</p>

      <h2>7. Strategic Recommendations for Modern Businesses</h2>

      <p>Based on this analysis, businesses should approach website development as a long-term digital investment. The website should be planned around the organization's objectives, target audience, operational requirements, and future technology needs.</p>

      <p>A practical business website strategy should include:</p>

      <ul>
        <li><strong>Professional Website Development:</strong> Responsive layouts, intuitive navigation, accessible design, and consistent branding.</li>
        <li><strong>Search Engine Optimization:</strong> Dedicated service pages, relevant keywords, optimized metadata, and useful original content.</li>
        <li><strong>Technical Performance:</strong> Fast loading times, mobile optimization, secure connections, and search engine accessibility.</li>
        <li><strong>AI-Ready Architecture:</strong> Structured content, meaningful information hierarchy, accurate business information, and appropriate schema markup.</li>
        <li><strong>Conversion Optimization:</strong> Clear calls to action, inquiry forms, service information, and customer-focused landing pages.</li>
        <li><strong>Business Software Integration:</strong> CRM platforms, analytics, booking applications, payment gateways, and AI-powered tools.</li>
      </ul>

      <h2>Conclusion: A Website Is Your Digital Business Foundation</h2>

      <p>The growth of artificial intelligence does not make business websites less relevant. It changes how websites contribute to online discovery, customer engagement, and business operations. Search engines, social media, and AI-powered assistants can introduce customers to a company, but a professional website provides a centralized destination where businesses can communicate their value and convert interest into meaningful opportunities.</p>

      <p>At Navo Cloud Solutions, we view website development as more than establishing an online presence. It is an opportunity to build a reliable digital foundation for search visibility, customer acquisition, business automation, and future software integration.</p>

      <p>In an increasingly connected and AI-driven economy, businesses should not simply ask whether they need a website. They should consider how effectively their website supports their long-term digital strategy.</p>
    `,

    category: "Case Study",
    date: "2026-11-06",
  },

  {
    slug: "how-ai-integration-transforms-modern-business-operations",
    id: "ai-business-operations",

    heading:
      "How AI Integration Transforms Modern Business Operations: Practical Applications and Opportunities",

    subheading:
      "A technical overview of artificial intelligence, machine learning, intelligent automation, and AI-powered software integration for modern businesses.",

    description: `
      <p>AI integration is transforming modern business operations through intelligent automation, predictive analytics, language models, and computer vision. This technical insight explores practical artificial intelligence applications, software integration approaches, implementation challenges, and opportunities for building more efficient and intelligent business systems.</p>
    `,

    content: `
      <h2>Introduction: Moving Beyond Traditional Business Automation</h2>

      <p>Artificial intelligence is becoming an increasingly important component of modern business technology. Organizations are exploring AI-powered applications to automate repetitive processes, improve customer interactions, analyze operational data, and support complex decision-making.</p>

      <p>Traditional business automation generally follows predefined rules and workflows. AI-powered systems introduce additional capabilities by processing unstructured information, identifying patterns, interpreting natural language, and generating predictions or responses based on available data.</p>

      <p>However, successful AI adoption involves more than connecting an application to a language model API. Businesses must identify meaningful problems, evaluate available data, select appropriate technologies, integrate them with existing software, and establish reliable evaluation and monitoring processes.</p>

      <h2>1. AI Chatbots and Intelligent Customer Support</h2>

      <p>AI-powered chatbots are among the most accessible applications of artificial intelligence for businesses. They can assist with frequently asked questions, product information, service inquiries, customer guidance, and basic support operations.</p>

      <p>Modern conversational systems use Large Language Models (LLMs) to understand user questions and generate natural-language responses. However, general-purpose language models may not contain accurate or up-to-date information about a particular business.</p>

      <h3>Retrieval-Augmented Generation (RAG)</h3>

      <p>Retrieval-Augmented Generation addresses this limitation by combining language models with external knowledge sources. Instead of relying exclusively on information stored in model parameters, a RAG application retrieves relevant content from an organization's documents, databases, product catalogs, or internal knowledge base before generating a response.</p>

      <p>A typical RAG workflow includes:</p>

      <ol>
        <li><strong>Document Processing:</strong> Extracting text from business documents, PDFs, web pages, and other information sources.</li>
        <li><strong>Text Chunking:</strong> Dividing extracted content into smaller, manageable sections.</li>
        <li><strong>Embedding Generation:</strong> Converting text chunks into numerical vector representations using embedding models.</li>
        <li><strong>Vector Storage:</strong> Storing embeddings and associated metadata in a vector database.</li>
        <li><strong>Semantic Retrieval:</strong> Finding relevant information based on the user's question.</li>
        <li><strong>Response Generation:</strong> Providing retrieved context to an LLM to generate a context-aware answer.</li>
      </ol>

      <p>This architecture can support intelligent customer support, internal knowledge assistants, document search applications, and automated business information systems.</p>

      <h2>2. Predictive Analytics and Machine Learning Applications</h2>

      <p>Businesses generate operational data through sales transactions, customer interactions, inventory records, financial activities, and other processes. Machine learning models can analyze this historical information to identify patterns and estimate future outcomes.</p>

      <p>Predictive analytics can support several business applications:</p>

      <ul>
        <li><strong>Sales Forecasting:</strong> Estimating future sales based on historical transactions, seasonal trends, and other relevant variables.</li>
        <li><strong>Demand Prediction:</strong> Anticipating product demand to support purchasing and inventory planning.</li>
        <li><strong>Customer Churn Prediction:</strong> Identifying patterns associated with customers who may stop using a service.</li>
        <li><strong>Fraud Detection:</strong> Identifying unusual transaction patterns that may require further investigation.</li>
        <li><strong>Customer Segmentation:</strong> Grouping customers according to behavioral and transactional characteristics.</li>
        <li><strong>Risk Assessment:</strong> Supporting business decisions through statistical and machine learning-based analysis.</li>
      </ul>

      <p>Depending on the problem, developers may use regression models, classification algorithms, clustering techniques, time-series forecasting, and deep learning architectures.</p>

      <p>The effectiveness of these systems depends on data quality, feature selection, model evaluation, and the suitability of the training data for the intended business environment.</p>

      <h2>3. Intelligent Workflow and Process Automation</h2>

      <p>Many organizations perform repetitive administrative operations involving document processing, data extraction, information classification, report generation, and communication.</p>

      <p>AI integration can improve selected stages of these workflows by combining machine learning models, language models, document processing systems, APIs, and conventional automation tools.</p>

      <p>For example, an intelligent invoice processing application could extract supplier details, invoice numbers, dates, and transaction amounts from uploaded documents. The extracted information can then be validated and transferred to an accounting or business management system.</p>

      <p>Other practical applications include automated email classification, document summarization, information extraction, report generation, and intelligent task routing.</p>

      <p>For important business processes, AI-generated information should pass through appropriate validation and human approval stages rather than being accepted automatically without verification.</p>

      <h2>4. Computer Vision and Visual Intelligence</h2>

      <p>Computer vision enables software applications to interpret and analyze visual information from images and video streams. It is particularly useful in industries where visual inspection, object identification, and image-based analysis are important.</p>

      <p>Deep learning architectures can support applications such as:</p>

      <ul>
        <li><strong>Object Detection:</strong> Identifying and locating objects within images and video frames.</li>
        <li><strong>Image Classification:</strong> Categorizing images into predefined classes.</li>
        <li><strong>Quality Inspection:</strong> Detecting visible product defects in manufacturing environments.</li>
        <li><strong>Visual Inventory Monitoring:</strong> Recognizing and counting products or objects in controlled environments.</li>
        <li><strong>Intelligent Surveillance:</strong> Analyzing video streams for predefined activities and security-related events.</li>
        <li><strong>OCR and Document Understanding:</strong> Extracting text and relevant information from images and scanned documents.</li>
      </ul>

      <p>Depending on application requirements, developers may use Convolutional Neural Networks (CNNs), object detection architectures such as YOLO, vision transformers, and specialized image processing techniques.</p>

      <p>Deployment considerations include inference latency, hardware requirements, camera quality, environmental conditions, and the accuracy required for the intended application.</p>

      <h2>5. Integrating AI With Existing Business Software</h2>

      <p>AI systems deliver greater practical value when integrated into existing business workflows instead of operating as isolated applications. Businesses can connect AI capabilities with websites, customer relationship management platforms, inventory systems, management dashboards, and internal software applications.</p>

      <p>A typical AI-integrated software architecture may include:</p>

      <ul>
        <li><strong>Frontend Applications:</strong> Web or mobile interfaces through which users interact with AI-powered features.</li>
        <li><strong>Backend Services:</strong> APIs and application logic responsible for handling requests and coordinating operations.</li>
        <li><strong>AI Model Services:</strong> Language models, prediction models, embedding models, or computer vision inference services.</li>
        <li><strong>Data Infrastructure:</strong> Relational databases, document storage, vector databases, and other information sources.</li>
        <li><strong>External Integrations:</strong> Third-party APIs, payment services, CRM platforms, and business management applications.</li>
      </ul>

      <p>Through appropriate API design and backend integration, businesses can introduce intelligent capabilities without necessarily replacing their existing technology infrastructure.</p>

      <h2>6. Challenges and Considerations in AI Adoption</h2>

      <p>Despite its potential, AI implementation introduces technical, financial, and operational challenges that businesses must consider before deployment.</p>

      <ul>
        <li><strong>Data Quality:</strong> Incomplete, inconsistent, or inaccurate data can negatively affect model performance.</li>
        <li><strong>Model Reliability:</strong> Predictions and generated responses may contain errors or incorrect information.</li>
        <li><strong>Infrastructure Costs:</strong> Model hosting, API usage, storage, and computational requirements can increase operational expenses.</li>
        <li><strong>Data Privacy:</strong> Sensitive business and customer information requires appropriate handling and protection.</li>
        <li><strong>Integration Complexity:</strong> Connecting AI services with existing applications may require significant backend development and system changes.</li>
        <li><strong>Maintenance:</strong> Deployed models and applications require monitoring, testing, updates, and performance evaluation.</li>
        <li><strong>Human Oversight:</strong> High-impact business decisions should include suitable verification and accountability mechanisms.</li>
      </ul>

      <p>AI should therefore be implemented where it offers a meaningful advantage over simpler software solutions. Not every business process requires a machine learning model or a language model.</p>

      <h2>7. A Practical Roadmap for AI Integration</h2>

      <p>Businesses planning to introduce artificial intelligence should follow a structured implementation process that connects technical development with measurable operational objectives.</p>

      <ol>
        <li><strong>Identify Business Problems:</strong> Examine existing workflows, repetitive operations, customer challenges, and areas where better data analysis could provide value.</li>
        <li><strong>Define Project Objectives:</strong> Establish what the proposed AI system should accomplish and how its effectiveness will be evaluated.</li>
        <li><strong>Assess Data Availability:</strong> Review available datasets, document sources, data quality, privacy requirements, and accessibility.</li>
        <li><strong>Select Suitable Technologies:</strong> Determine whether the problem requires an LLM, RAG application, predictive machine learning model, computer vision system, or conventional automation.</li>
        <li><strong>Develop a Prototype:</strong> Build an initial implementation to evaluate technical feasibility and identify potential limitations.</li>
        <li><strong>Integrate With Business Systems:</strong> Connect the application with existing databases, APIs, software platforms, and operational workflows.</li>
        <li><strong>Test and Evaluate:</strong> Assess accuracy, reliability, latency, security, infrastructure costs, and actual business usefulness.</li>
        <li><strong>Deploy and Monitor:</strong> Introduce the system with appropriate monitoring, maintenance, access controls, and continuous improvement.</li>
      </ol>

      <h2>Conclusion: Building Intelligent and Connected Business Systems</h2>

      <p>Artificial intelligence offers practical opportunities to improve customer support, automate repetitive operations, analyze business data, and develop more intelligent software applications. Its value comes from solving real operational problems rather than introducing AI technology simply because it is available.</p>

      <p>At Navo Cloud Solutions, we see AI development and integration as an important part of building modern business software. From RAG-powered knowledge applications and predictive machine learning models to computer vision systems and intelligent workflow automation, the objective is to develop reliable solutions that address specific business requirements.</p>

      <p>As AI technologies continue to evolve, organizations that adopt a structured approach to AI integration can build more adaptable software systems, improve operational processes, and explore new opportunities for digital transformation.</p>
    `,

    category: "Technical Insight",
    date: "2026-11-06",
  },

  {
    slug: "ai-threat-detection-smart-surveillance",
    id: "threat-detection",

    heading: "AI Threat Detection Using Deep Learning for Smart Surveillance",

    subheading:
      "A comparative study of lightweight convolutional neural networks for automated threat recognition, image classification, and intelligent surveillance systems.",

    description: `
      <p>This research investigates deep learning-based threat detection for smart surveillance using lightweight Convolutional Neural Networks (CNNs). It evaluates multiple neural network architectures for classifying armed threats, physical fights, and normal activities, with a focus on classification performance, computational efficiency, and practical AI deployment.</p>
    `,

    content: `
      <h2>Abstract</h2>

      <p>Traditional surveillance systems primarily depend on human operators to continuously monitor CCTV footage and identify potentially dangerous activities. However, manual monitoring becomes increasingly difficult when multiple camera feeds must be observed simultaneously, creating challenges in response time, monitoring consistency, and operational scalability.</p>

      <p>This research explores an AI-powered threat detection approach using lightweight Convolutional Neural Networks (CNNs) and deep learning-based image classification. The proposed system focuses on identifying three categories of visual activity: Armed, Fight, and Other. The objective is to investigate whether computationally efficient CNN architectures can provide useful automated classification capabilities for intelligent surveillance applications.</p>

      <h2>1. Research Background and Problem Statement</h2>

      <p>Video surveillance has become an important component of security infrastructure in public spaces, commercial buildings, and controlled environments. Although conventional CCTV systems provide continuous visual monitoring, identifying specific security-related activities still requires considerable human attention.</p>

      <p>Manual monitoring presents several limitations:</p>

      <ul>
        <li><strong>Continuous Monitoring:</strong> Operators must observe multiple video streams over extended periods.</li>
        <li><strong>Human Limitations:</strong> Fatigue and attention loss can affect the consistency of manual observation.</li>
        <li><strong>Response Time:</strong> Potentially dangerous activities may not be recognized immediately.</li>
        <li><strong>Scalability:</strong> Increasing the number of surveillance cameras also increases monitoring requirements.</li>
        <li><strong>Computational Constraints:</strong> Deploying complex deep learning models can introduce additional hardware and inference costs.</li>
      </ul>

      <p>These challenges motivate the development of automated visual classification systems that can assist surveillance operators by identifying predefined categories of potentially relevant activities.</p>

      <h2>2. Research Objectives</h2>

      <p>The primary objective is to investigate lightweight deep learning architectures for automated threat classification in smart surveillance environments.</p>

      <p>The specific research objectives include:</p>

      <ul>
        <li>Developing a unified image dataset containing Armed, Fight, and Other categories.</li>
        <li>Comparing the classification performance of eight CNN architectures.</li>
        <li>Investigating how network depth and model architecture affect classification accuracy.</li>
        <li>Evaluating the effects of data augmentation and optimization configurations during training.</li>
        <li>Identifying a suitable lightweight architecture for practical inference applications.</li>
        <li>Developing a prototype that connects live camera input with a deep learning inference backend.</li>
      </ul>

      <h2>3. Dataset Development and Preparation</h2>

      <p>A unified image dataset containing 3,026 images was developed using publicly available datasets. The collected images were organized into three classification categories:</p>

      <ul>
        <li><strong>Armed:</strong> Images containing visible armed threats or weapons.</li>
        <li><strong>Fight:</strong> Images representing physical altercations and fighting activities.</li>
        <li><strong>Other:</strong> Images representing general activities that do not belong to the two threat-related categories.</li>
      </ul>

      <p>Dataset preparation is an important component of image classification research because inconsistencies in image dimensions, visual quality, class distribution, and labeling can affect model training and evaluation.</p>

      <p>The dataset was prepared for CNN-based classification experiments using consistent image preprocessing and training configurations. Data augmentation was also investigated to evaluate its influence on model generalization and the ability to recognize visual patterns across different image variations.</p>

      <p>Particular attention was given to evaluating the models on unseen test data to assess their ability to classify images beyond the examples directly used during training.</p>

      <h2>4. Deep Learning Architecture and Experimental Methodology</h2>

      <p>Convolutional Neural Networks are widely used in computer vision because they can automatically learn spatial features and visual patterns from image data. Their convolutional layers extract increasingly complex representations, while subsequent classification layers use these learned features to predict image categories.</p>

      <p>This research compares eight CNN architectures under controlled experimental conditions to investigate the relationship between network design and classification performance.</p>

      <h3>4.1 Architecture Comparison</h3>

      <p>The comparative experiments examine differences in network depth, feature extraction capacity, parameter complexity, and computational requirements. The objective is not simply to identify the architecture with the highest classification score, but to investigate the suitability of different models for resource-conscious surveillance applications.</p>

      <h3>4.2 Training Configuration</h3>

      <p>Model training experiments investigate several important configurations:</p>

      <ul>
        <li><strong>Network Depth:</strong> Examining how architectural complexity affects feature learning and classification performance.</li>
        <li><strong>Data Augmentation:</strong> Investigating image transformations to improve generalization and reduce overfitting.</li>
        <li><strong>Learning Rates:</strong> Evaluating their influence on optimization and convergence.</li>
        <li><strong>Optimization Techniques:</strong> Comparing training configurations to support stable model learning.</li>
        <li><strong>Evaluation:</strong> Measuring model performance on unseen test data.</li>
      </ul>

      <h3>4.3 Classification Pipeline</h3>

      <p>The overall classification process involves preparing an input image, applying the required preprocessing operations, passing the image through a trained CNN, and obtaining a predicted category from the model's output probabilities.</p>

      <p>This pipeline provides the foundation for integrating the trained classifier into an application that can process images captured from a camera.</p>

      <h2>5. Experimental Results and Model Evaluation</h2>

      <p>The comparative experiments identified a selected lightweight CNN architecture that achieved the following performance on unseen test data:</p>

      <ul>
        <li><strong>Accuracy:</strong> 85.0%</li>
        <li><strong>Precision:</strong> 85.1%</li>
        <li><strong>Recall:</strong> 85.3%</li>
        <li><strong>F1-Score:</strong> 84.9%</li>
      </ul>

      <p>These evaluation metrics provide different perspectives on classification performance. Accuracy measures the proportion of correctly classified samples, while precision evaluates the proportion of positive predictions that are correct. Recall measures the proportion of actual positive samples identified by the classifier, and the F1-score provides a harmonic balance between precision and recall.</p>

      <p>The results indicate that the selected lightweight architecture achieved a balanced classification performance on the evaluated test dataset. However, image classification accuracy alone does not establish the reliability of a surveillance system in uncontrolled real-world environments.</p>

      <h2>6. Prototype Development and System Integration</h2>

      <p>To demonstrate practical application, a prototype integrating live camera input with a FastAPI-based inference backend was developed.</p>

      <p>The prototype connects visual input with the trained deep learning model to perform automated threat classification. FastAPI provides an interface through which the application can submit image data and receive model predictions.</p>

      <p>The overall system demonstrates the integration of several software components:</p>

      <ul>
        <li><strong>Camera Input:</strong> Capturing visual information from a live camera source.</li>
        <li><strong>Image Processing:</strong> Preparing incoming images for model inference.</li>
        <li><strong>Deep Learning Model:</strong> Performing automated image classification.</li>
        <li><strong>Inference Backend:</strong> Exposing prediction functionality through FastAPI.</li>
        <li><strong>Prediction Output:</strong> Returning the identified classification to the application.</li>
      </ul>

      <p>This prototype demonstrates the feasibility of connecting a lightweight computer vision model with a software application for intelligent surveillance-related classification.</p>

      <h2>7. Research Limitations and Future Work</h2>

      <p>Although the experimental results demonstrate promising classification performance, several limitations must be considered before applying the system in real-world surveillance environments.</p>

      <ul>
        <li><strong>Dataset Generalization:</strong> Publicly available image datasets may not fully represent the visual diversity of real surveillance environments.</li>
        <li><strong>Image-Based Classification:</strong> Classifying individual images does not provide complete temporal understanding of activities across video sequences.</li>
        <li><strong>Environmental Variations:</strong> Lighting conditions, camera angles, occlusion, image quality, and scene complexity can affect prediction performance.</li>
        <li><strong>Real-Time Performance:</strong> Additional evaluation is required to establish inference latency and hardware requirements under continuous camera operation.</li>
        <li><strong>Operational Reliability:</strong> False positives and false negatives must be carefully evaluated before using predictions in security-related decisions.</li>
      </ul>

      <p>Future research can investigate video-based activity recognition, temporal deep learning architectures, real-world CCTV validation, edge-device deployment, and improved model efficiency. Additional work on class-level evaluation and real-world testing would also provide a more comprehensive understanding of system reliability.</p>

      <h2>Conclusion</h2>

      <p>This research investigates lightweight CNN architectures for automated threat classification in smart surveillance environments. Through the development of a 3,026-image dataset, comparative evaluation of eight CNN architectures, and prototype integration with a FastAPI inference backend, the study explores the practical application of deep learning in intelligent security monitoring.</p>

      <p>The selected architecture achieved 85.0% accuracy on unseen test data, demonstrating the potential of lightweight convolutional networks for image-based threat classification. Nevertheless, real-world deployment requires further validation, particularly in video-based recognition, operational reliability, and computational efficiency.</p>

      <p>The findings provide a foundation for further research into efficient computer vision models and AI-assisted surveillance applications.</p>
    `,

    category: "Research",
    date: "2026-08-14",

    additionals: {
      pdf: "/research-and-technical-insights/research/ThreatDetection.pdf",
    },
  },

  {
    slug: "ai-resume-screening-semantic-matching",
    id: "resume-scanner",

    heading:
      "AI Resume Screening and Semantic Candidate Matching Using a Two-Agent LLM Architecture",

    subheading:
      "An AI-powered recruitment approach combining lightweight language models, structured information extraction, and semantic embeddings for intelligent candidate-job matching.",

    description: `
      <p>This research explores an AI-powered resume screening and semantic candidate matching system using a two-agent architecture. It combines a fine-tuned Qwen2.5-0.5B-Instruct language model for structured resume information extraction with an All-MiniLM-L6-v2 sentence embedding model trained using Multiple Negative Ranking loss for context-aware candidate-job matching and recruitment automation.</p>
    `,

    content: `
      <h2>Abstract</h2>

      <p>Traditional recruitment processes frequently rely on manual resume screening and keyword-based candidate filtering. Although these methods can help identify candidates with explicitly matching skills and qualifications, they may overlook relevant applicants whose experience is described using different terminology or contextual expressions.</p>

      <p>This research presents an AI-powered resume screening and semantic candidate matching system based on a two-agent Large Language Model (LLM) architecture. The proposed approach separates resume information extraction from semantic candidate-job matching to create a structured recruitment workflow.</p>

      <p>The first agent uses a fine-tuned Qwen2.5-0.5B-Instruct model to extract candidate information from unstructured resumes. The second agent uses a fine-tuned All-MiniLM-L6-v2 sentence embedding model trained with Multiple Negative Ranking (MNR) loss to compare structured candidate profiles with job descriptions using semantic similarity.</p>

      <p>The research investigates how lightweight language models and embedding-based retrieval techniques can support automated recruitment workflows while reducing dependence on large external AI services.</p>

      <h2>1. Research Background and Problem Statement</h2>

      <p>Recruitment platforms and human resource departments frequently receive large volumes of resumes for different job openings. Reviewing these documents manually requires time and introduces challenges in maintaining consistent candidate evaluation across multiple applications.</p>

      <p>Traditional automated resume screening systems often rely on keyword matching, predefined filters, and exact textual comparisons. These approaches can struggle to recognize contextual relationships between candidate experience and job requirements.</p>

      <p>For example, a candidate describing experience in building REST APIs and backend services may be relevant to a position requiring backend application development, even when the exact keywords used in the job description are different.</p>

      <p>Other limitations include:</p>

      <ul>
        <li><strong>Unstructured Resume Data:</strong> Candidate information is presented in different document layouts and writing styles.</li>
        <li><strong>Keyword Dependency:</strong> Exact keyword matching may overlook relevant experience expressed using alternative terminology.</li>
        <li><strong>Manual Screening Effort:</strong> Reviewing large numbers of applications can increase recruitment workload.</li>
        <li><strong>Inconsistent Information:</strong> Differences in resume formatting make direct candidate comparisons difficult.</li>
        <li><strong>Limited Contextual Understanding:</strong> Simple text matching does not adequately represent semantic relationships between skills and job requirements.</li>
      </ul>

      <p>These challenges motivate the investigation of AI systems that can transform unstructured resumes into structured representations and compare candidate qualifications using semantic information rather than relying exclusively on exact keyword matches.</p>

      <h2>2. Research Objectives</h2>

      <p>The primary objective is to investigate a two-agent AI architecture for automated resume information extraction and semantic candidate-job matching.</p>

      <p>The specific objectives include:</p>

      <ul>
        <li>Investigating lightweight LLMs for extracting structured information from unstructured resumes.</li>
        <li>Developing a standardized candidate representation containing skills, experience, education, and project information.</li>
        <li>Fine-tuning a sentence embedding model for semantic similarity between candidate profiles and job descriptions.</li>
        <li>Exploring Multiple Negative Ranking loss for improving embedding representations.</li>
        <li>Separating information extraction and semantic matching into specialized processing stages.</li>
        <li>Investigating local model deployment to reduce dependence on external inference APIs.</li>
        <li>Exploring the potential for scalable AI-assisted recruitment automation.</li>
      </ul>

      <h2>3. Proposed Two-Agent Architecture</h2>

      <p>The proposed system separates resume understanding and candidate matching into two specialized agents. This modular architecture allows each model to focus on a distinct task rather than relying on one general-purpose model to perform the entire recruitment workflow.</p>

      <h3>3.1 Agent One: Resume Information Extraction</h3>

      <p>The first agent is responsible for processing unstructured resumes and converting their contents into structured candidate information. It uses a fine-tuned Qwen2.5-0.5B-Instruct model to identify and organize relevant information from resume documents.</p>

      <p>The extraction process focuses on fields such as:</p>

      <ul>
        <li><strong>Personal and Professional Information:</strong> Relevant candidate details and professional profile information.</li>
        <li><strong>Technical Skills:</strong> Programming languages, frameworks, tools, and technical competencies.</li>
        <li><strong>Work Experience:</strong> Previous roles, responsibilities, and professional experience.</li>
        <li><strong>Education:</strong> Academic qualifications, institutions, and relevant certifications.</li>
        <li><strong>Projects:</strong> Project descriptions, technologies used, and relevant contributions.</li>
      </ul>

      <p>Using a structured output format makes candidate information easier to process, compare, store, and pass to subsequent components of the recruitment system.</p>

      <h3>3.2 Agent Two: Semantic Candidate Matching</h3>

      <p>The second agent focuses on comparing structured candidate information with job descriptions. It uses a fine-tuned All-MiniLM-L6-v2 sentence embedding model trained with Multiple Negative Ranking loss.</p>

      <p>Sentence embedding models convert text into numerical vector representations that capture semantic relationships. This allows the system to compare candidate profiles and job requirements even when they use different but contextually related expressions.</p>

      <p>For example, a candidate's experience in developing backend APIs may have semantic relevance to a job requirement involving server-side application development, even if the wording is not identical.</p>

      <p>The matching stage generates embeddings for candidate information and job descriptions, compares their vector representations, and uses similarity scores to support candidate ranking.</p>

      <h2>4. Semantic Embeddings and Multiple Negative Ranking Loss</h2>

      <p>Semantic similarity is an important component of the proposed recruitment architecture. Unlike traditional keyword matching, embedding-based comparison represents text as numerical vectors that can be evaluated according to their semantic proximity.</p>

      <p>All-MiniLM-L6-v2 is a lightweight sentence embedding model designed to produce compact representations of textual information. Fine-tuning this model for candidate-job matching provides an opportunity to adapt its representations to recruitment-related language and contextual relationships.</p>

      <h3>4.1 Multiple Negative Ranking Loss</h3>

      <p>Multiple Negative Ranking (MNR) loss is a contrastive learning objective commonly used to train sentence embedding models. It encourages semantically related text pairs to have more similar representations while distinguishing them from unrelated examples within a training batch.</p>

      <p>For a recruitment application, training examples can represent relationships between candidate experience descriptions and relevant job requirements. The objective is to improve the model's ability to represent meaningful candidate-job relationships in the embedding space.</p>

      <h3>4.2 Similarity-Based Matching</h3>

      <p>Once candidate profiles and job descriptions are converted into embeddings, the system can compare their vector representations using cosine similarity or another suitable similarity measure.</p>

      <p>Cosine similarity evaluates the angular relationship between two vectors and can be expressed as:</p>

      <p><strong>Similarity(A, B) = (A · B) / (||A|| × ||B||)</strong></p>

      <p>Here, A and B represent the embedding vectors of the candidate information and job description. Higher similarity indicates greater semantic proximity, although the resulting score should not be interpreted as a calibrated probability of candidate suitability.</p>

      <h2>5. End-to-End Recruitment Workflow</h2>

      <p>The proposed architecture follows a structured processing pipeline that transforms uploaded resumes into comparable candidate representations and generates semantic matching results.</p>

      <ol>
        <li><strong>Resume Submission:</strong> A candidate uploads a resume through the recruitment application.</li>
        <li><strong>Document Processing:</strong> The system extracts readable text from the uploaded document.</li>
        <li><strong>Information Extraction:</strong> Agent One processes the resume using the fine-tuned Qwen2.5-0.5B-Instruct model.</li>
        <li><strong>Structured Representation:</strong> Extracted skills, education, experience, and project information are organized into a consistent format.</li>
        <li><strong>Job Description Processing:</strong> Relevant job requirements are prepared for semantic comparison.</li>
        <li><strong>Embedding Generation:</strong> Agent Two generates vector representations of candidate profiles and job descriptions.</li>
        <li><strong>Similarity Calculation:</strong> Candidate and job embeddings are compared to calculate semantic similarity scores.</li>
        <li><strong>Candidate Ranking:</strong> Candidates can be organized according to their matching scores for further human review.</li>
      </ol>

      <h2>6. Research Significance and Expected Applications</h2>

      <p>The proposed architecture explores how lightweight language models and specialized embedding models can work together to support automated recruitment processes.</p>

      <p>Potential applications include:</p>

      <ul>
        <li><strong>Automated Resume Screening:</strong> Extracting and organizing candidate information from large collections of resumes.</li>
        <li><strong>Semantic Job Matching:</strong> Comparing candidate qualifications with job descriptions using contextual text representations.</li>
        <li><strong>Candidate Search:</strong> Finding relevant candidates through natural-language job requirements.</li>
        <li><strong>Recruitment Workflow Automation:</strong> Reducing repetitive information processing and initial candidate filtering tasks.</li>
        <li><strong>Local AI Deployment:</strong> Exploring inference using locally deployed models rather than depending entirely on external APIs.</li>
        <li><strong>Scalable Recruitment Systems:</strong> Supporting recruitment platforms that process multiple candidates and job openings.</li>
      </ul>

      <h2>7. Research Limitations and Future Improvements</h2>

      <p>Although the proposed two-agent architecture offers a structured approach to AI-assisted recruitment, several technical and operational considerations remain important.</p>

      <ul>
        <li><strong>Resume Extraction Accuracy:</strong> Different document layouts, formatting styles, and incomplete information can affect structured data extraction.</li>
        <li><strong>Embedding Quality:</strong> Semantic matching performance depends on training data quality, example selection, and the relevance of learned representations.</li>
        <li><strong>Contextual Requirements:</strong> A similarity score may not fully represent complex requirements such as seniority, mandatory qualifications, or specific professional experience.</li>
        <li><strong>Bias and Fairness:</strong> Recruitment models require careful evaluation to avoid reproducing discriminatory patterns present in training data.</li>
        <li><strong>Explainability:</strong> Recruiters should be able to understand which qualifications and job requirements contributed to a candidate's matching result.</li>
        <li><strong>Privacy and Security:</strong> Resumes contain personal information and must be processed with appropriate access controls, retention policies, and data protection practices.</li>
      </ul>

      <p>Future improvements could investigate more comprehensive candidate evaluation methods, skill-level extraction, experience-based weighting, multilingual resume processing, improved embedding evaluation, and explainable matching results.</p>

      <p>Further research should also compare semantic matching against traditional keyword-based approaches using appropriate datasets and evaluation metrics. Human evaluation is essential when assessing whether generated candidate rankings correspond to meaningful recruitment decisions.</p>

      <h2>Conclusion</h2>

      <p>This research explores an AI-powered recruitment architecture that combines a lightweight language model with a specialized semantic embedding model. By separating resume information extraction from candidate-job matching, the proposed two-agent approach provides a modular foundation for intelligent recruitment automation.</p>

      <p>The use of Qwen2.5-0.5B-Instruct for structured information extraction and fine-tuned All-MiniLM-L6-v2 embeddings for semantic comparison demonstrates an approach to combining language understanding with representation learning.</p>

      <p>Further evaluation is required to establish the architecture's effectiveness across different recruitment datasets and real-world hiring requirements. Nevertheless, the approach provides a foundation for exploring efficient, locally deployable, and context-aware AI recruitment applications.</p>
    `,

    category: "Research",
    date: "2026-07-29",

    additionals: {
      pdf: "/research-and-technical-insights/technical-report/HR-Tool Technical Report.pdf",
    },
  },
];


export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatCardDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
