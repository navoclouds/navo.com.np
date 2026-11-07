export type PrivacySection = {
  id: string;
  heading: string;
  content: string;
};

export type PrivacyPolicy = {
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  introduction: string;
  sections: PrivacySection[];
};

export const privacyPolicy: PrivacyPolicy = {
  title: "Privacy Policy",
  subtitle:
    "Learn how Navo Cloud Solutions collects, uses, stores, processes, and protects your personal information when you access our website, use our digital services, or interact with our software and applications.",
  effectiveDate: "2026-11-06",
  lastUpdated: "2026-11-06",
  introduction: `
    <p>
      Navo Cloud Solutions Pvt. Ltd. ("Navo Cloud", "Navo", "we", "our", or "us")
      is committed to protecting the privacy, confidentiality, and security of
      personal information entrusted to us. This Privacy Policy explains how
      we collect, use, store, process, disclose, and protect information when
      you visit our website, communicate with our team, use our digital
      services, or interact with software, applications, and SaaS products
      developed or operated by Navo Cloud.
    </p>
    <p>
      We provide website development, custom software development, mobile
      application development, artificial intelligence (AI) development and
      integration, and other digital technology solutions. Depending on the
      nature of the service, we may process information belonging to website
      visitors, prospective clients, business representatives, customers,
      application users, and other individuals who interact with our services.
    </p>
    <p>
      This Privacy Policy describes our data practices and explains the
      choices and rights available to you. We aim to handle personal
      information responsibly, collect only what is reasonably necessary, and
      use it for legitimate business, contractual, operational, and legal
      purposes.
    </p>
    <p>
      By accessing our website or using our services, you acknowledge that
      you have had an opportunity to review this Privacy Policy. Where
      applicable law requires consent for a particular processing activity,
      we will seek that consent separately.
    </p>
  `,
  sections: [
    {
      id: "scope",
      heading: "1. Scope of This Privacy Policy",
      content: `
        <p>
          This Privacy Policy applies to personal information collected
          through the official Navo Cloud website, our digital platforms,
          communication channels, business operations, and services that
          reference or link to this policy.
        </p>
        <p>It applies to information collected through:</p>
        <ul>
          <li>Our official website and its associated pages, landing pages, and digital resources.</li>
          <li>Contact forms, inquiry forms, quotation requests, and project consultation forms.</li>
          <li>Email communications, telephone calls, and other direct communications with our team.</li>
          <li>Website development, custom software development, and mobile application projects.</li>
          <li>SaaS platforms and digital products developed, maintained, or operated by Navo Cloud.</li>
          <li>Customer support, technical assistance, troubleshooting, and project management activities.</li>
          <li>Marketing, promotional, and business communication activities.</li>
          <li>Other digital channels through which we interact with individuals or organizations.</li>
        </ul>
        <p>
          This policy applies to information that we collect directly and
          information that may be provided to us by clients, authorized
          representatives, service providers, or other legitimate sources.
        </p>
        <p>
          Certain products and services may have additional privacy notices,
          contractual terms, or data processing agreements. Where applicable,
          those documents should be read together with this Privacy Policy.
        </p>
      `,
    },
    {
      id: "information-collected",
      heading: "2. Information We Collect",
      content: `
        <p>
          The information we collect depends on how you interact with Navo
          Cloud and which services you use. We aim to collect information
          that is reasonably necessary for the relevant business, operational,
          contractual, or legal purpose.
        </p>

        <h3>2.1 Personal Identification Information</h3>
        <p>
          When you contact us, request a quotation, enter into a business
          relationship, or register for a service, we may collect information
          that identifies or helps us communicate with you, including:
        </p>
        <ul>
          <li>Full name and preferred name.</li>
          <li>Business or organization name.</li>
          <li>Email address and telephone number.</li>
          <li>Job title, designation, or professional role.</li>
          <li>Business address or billing address.</li>
          <li>Other contact details voluntarily provided through our forms or communications.</li>
        </ul>

        <h3>2.2 Business and Project Information</h3>
        <p>
          When you request our website development, software development,
          mobile application development, or AI development services, we may
          collect project-related information, such as:
        </p>
        <ul>
          <li>Business requirements, project descriptions, and technical specifications.</li>
          <li>Branding materials, logos, images, documents, and other supplied assets.</li>
          <li>Business workflows, operational requirements, and product information.</li>
          <li>Integration requirements, third-party platform details, and technical configurations.</li>
          <li>Project feedback, revision requests, and communication history.</li>
          <li>Information required for quotations, proposals, invoices, and service agreements.</li>
        </ul>
        <p>
          Project information may contain personal information belonging to
          your employees, customers, suppliers, or other individuals. Clients
          are responsible for ensuring that they have the appropriate rights
          and permissions to share such information with us.
        </p>

        <h3>2.3 Account and Authentication Information</h3>
        <p>
          Where you register for or use a Navo Cloud application or SaaS
          platform, we may collect information necessary to create and
          maintain your account, including:
        </p>
        <ul>
          <li>Account name, username, and email address.</li>
          <li>Encrypted or securely hashed authentication credentials, where applicable.</li>
          <li>Account roles, permissions, and organization membership.</li>
          <li>Authentication tokens, session identifiers, and account security information.</li>
          <li>Account preferences, settings, and subscription information.</li>
          <li>Login history and relevant account activity.</li>
        </ul>
        <p>
          We do not intend to collect your plain-text password through
          ordinary support communications. You should never send passwords,
          authentication codes, or private access credentials to our team
          through unsecured channels.
        </p>

        <h3>2.4 Transaction and Billing Information</h3>
        <p>
          When you purchase services, subscribe to a product, or make a
          payment, we may process information necessary for billing,
          accounting, and transaction management, including:
        </p>
        <ul>
          <li>Billing name and business details.</li>
          <li>Billing address and applicable tax identification information.</li>
          <li>Invoice numbers, payment amounts, transaction dates, and payment status.</li>
          <li>Subscription plans, renewal dates, and service history.</li>
          <li>Payment references and transaction confirmation details.</li>
        </ul>
        <p>
          Payment card information and other sensitive payment credentials
          should be handled by the relevant payment service provider where
          such a provider is used. We do not claim to store complete payment
          card details unless a specific service arrangement expressly
          requires and supports such processing.
        </p>

        <h3>2.5 Technical and Device Information</h3>
        <p>
          When you visit our website or use our digital services, certain
          technical information may be collected automatically, depending on
          your browser, device, hosting environment, and enabled technologies.
          This may include:
        </p>
        <ul>
          <li>Internet Protocol (IP) address.</li>
          <li>Browser type, version, and language settings.</li>
          <li>Device type, operating system, and screen characteristics.</li>
          <li>Website pages visited, referral sources, and navigation activity.</li>
          <li>Access timestamps, session information, and approximate usage patterns.</li>
          <li>Diagnostic information, error logs, and performance data.</li>
        </ul>

        <h3>2.6 Communication and Support Information</h3>
        <p>
          We may retain information you provide when communicating with our
          team, including emails, support requests, feedback, meeting notes,
          project discussions, and responses to inquiries. This information
          helps us understand requests, maintain project continuity, and
          provide appropriate assistance.
        </p>

        <h3>2.7 Information Provided by Third Parties</h3>
        <p>
          In certain circumstances, we may receive information from clients,
          authorized business representatives, hosting providers, payment
          processors, integration partners, or other service providers.
          We process such information only for relevant and legitimate
          business purposes and in accordance with applicable obligations.
        </p>
      `,
    },
    {
      id: "collection-methods",
      heading: "3. How We Collect Information",
      content: `
        <p>
          Navo Cloud collects information through several methods depending
          on the service or interaction involved.
        </p>

        <h3>3.1 Information You Provide Directly</h3>
        <p>
          We collect information when you submit a contact form, request a
          quotation, register for an account, purchase a service, participate
          in a project, communicate with our team, or voluntarily provide
          information through another supported channel.
        </p>

        <h3>3.2 Information Collected Automatically</h3>
        <p>
          Some information may be generated automatically when you access
          our website or applications. This may include technical logs,
          device information, browser information, access timestamps, and
          website interaction data.
        </p>

        <h3>3.3 Information Received Through Business Relationships</h3>
        <p>
          We may receive information from clients, organizations, project
          representatives, authorized users, and integration partners where
          such information is required to deliver contracted services or
          maintain an existing business relationship.
        </p>

        <h3>3.4 Information From Publicly Available Sources</h3>
        <p>
          Where appropriate for legitimate business purposes, we may use
          publicly available business contact information or professional
          information. We do not intentionally collect unnecessary personal
          information from public sources.
        </p>
      `,
    },
    {
      id: "use-of-information",
      heading: "4. How We Use Your Information",
      content: `
        <p>
          We use collected information for clearly defined business,
          operational, contractual, security, and legal purposes. The
          information may be used for the following activities:
        </p>

        <h3>4.1 Providing and Delivering Services</h3>
        <ul>
          <li>Responding to website development and software development inquiries.</li>
          <li>Preparing project proposals, quotations, and technical recommendations.</li>
          <li>Developing, deploying, configuring, and maintaining websites and applications.</li>
          <li>Providing AI development, integration, and automation services.</li>
          <li>Creating and managing customer accounts and service subscriptions.</li>
          <li>Providing technical support, troubleshooting, and maintenance.</li>
        </ul>

        <h3>4.2 Communication and Customer Support</h3>
        <ul>
          <li>Responding to questions, requests, and feedback.</li>
          <li>Sending project updates, service notifications, and support responses.</li>
          <li>Communicating important changes to services, terms, or policies.</li>
          <li>Managing client relationships and maintaining communication records.</li>
        </ul>

        <h3>4.3 Account and Subscription Management</h3>
        <ul>
          <li>Creating and maintaining user accounts.</li>
          <li>Managing organization membership, roles, and permissions.</li>
          <li>Processing subscription activation, renewal, suspension, and cancellation.</li>
          <li>Maintaining relevant billing and transaction records.</li>
          <li>Protecting accounts against unauthorized access and misuse.</li>
        </ul>

        <h3>4.4 Website Performance and Improvement</h3>
        <ul>
          <li>Understanding how visitors interact with our website.</li>
          <li>Identifying broken pages, technical errors, and performance issues.</li>
          <li>Improving website navigation, accessibility, and user experience.</li>
          <li>Evaluating the effectiveness of website content and service pages.</li>
          <li>Improving the reliability and functionality of our digital platforms.</li>
        </ul>

        <h3>4.5 Security and Fraud Prevention</h3>
        <ul>
          <li>Detecting suspicious activity and unauthorized account access.</li>
          <li>Protecting our systems, infrastructure, and customer information.</li>
          <li>Investigating potential security incidents and service abuse.</li>
          <li>Maintaining audit records and technical security logs.</li>
          <li>Enforcing applicable contractual terms and acceptable-use requirements.</li>
        </ul>

        <h3>4.6 Legal and Regulatory Compliance</h3>
        <p>
          We may process information where necessary to comply with applicable
          laws, regulations, lawful requests, tax obligations, accounting
          requirements, court orders, or other legal processes.
        </p>

        <h3>4.7 Marketing and Business Development</h3>
        <p>
          Where permitted by applicable law, we may use business contact
          information to communicate relevant service updates, company news,
          product announcements, or promotional information. You may opt out
          of non-essential marketing communications using the available
          unsubscribe method or by contacting us.
        </p>
      `,
    },
    {
      id: "legal-basis",
      heading: "5. Legal Basis for Processing Information",
      content: `
        <p>
          We process personal information only where we have an appropriate
          legal basis or other lawful justification under applicable law.
          Depending on the circumstances, this may include:
        </p>
        <ul>
          <li><strong>Consent:</strong> Where you have voluntarily agreed to a specific processing activity, such as certain marketing or optional cookie technologies.</li>
          <li><strong>Contractual necessity:</strong> Where processing is necessary to provide a service, fulfil an agreement, manage an account, or respond to a request made before entering into a contract.</li>
          <li><strong>Legal obligations:</strong> Where processing is required to comply with applicable tax, accounting, regulatory, or other legal requirements.</li>
          <li><strong>Legitimate business interests:</strong> Where processing is reasonably necessary for activities such as service improvement, fraud prevention, system security, and business administration, subject to applicable legal requirements.</li>
          <li><strong>Protection of rights and interests:</strong> Where processing is necessary to establish, exercise, or defend legal claims or protect individuals and systems.</li>
        </ul>
        <p>
          The appropriate legal basis may vary depending on the type of
          information, the service involved, and the jurisdiction in which
          the relevant individual is located.
        </p>
      `,
    },
    {
      id: "cookies",
      heading: "6. Cookies and Similar Technologies",
      content: `
        <p>
          Our website and digital services may use cookies, local storage,
          session identifiers, and similar technologies to support website
          functionality, remember preferences, understand website usage,
          and improve the overall user experience.
        </p>

        <h3>6.1 What Are Cookies?</h3>
        <p>
          Cookies are small text files stored by your browser when you visit
          a website. They may help a website remember certain information
          about your visit, such as session status, preferences, or other
          settings.
        </p>

        <h3>6.2 Types of Cookies We May Use</h3>
        <ul>
          <li><strong>Essential cookies:</strong> Required for basic website functionality, security, navigation, and other necessary operations.</li>
          <li><strong>Functional cookies:</strong> Used to remember user preferences and improve website usability.</li>
          <li><strong>Analytics cookies:</strong> May help us understand website traffic, visitor interactions, and performance trends.</li>
          <li><strong>Performance cookies:</strong> May be used to identify technical issues and improve loading speed and reliability.</li>
          <li><strong>Marketing cookies:</strong> If enabled, these may support relevant promotional activities and campaign measurement.</li>
        </ul>

        <h3>6.3 Managing Cookies</h3>
        <p>
          Most web browsers allow users to review, block, or delete cookies
          through browser settings. Disabling certain cookies may affect
          website functionality or prevent some features from working
          correctly.
        </p>
        <p>
          Where applicable law requires consent for non-essential cookies
          or similar technologies, we will provide an appropriate consent
          mechanism before using them.
        </p>
        <p>
          The specific cookies and technologies used may vary depending on
          the website features, third-party integrations, and services
          currently enabled.
        </p>
      `,
    },
    {
      id: "sharing",
      heading: "7. How We Share Your Information",
      content: `
        <p>
          Navo Cloud does not treat personal information as a publicly
          available resource. We do not sell personal information to third
          parties as a business practice. However, information may be shared
          in limited circumstances where necessary for service delivery,
          business operations, legal compliance, or security.
        </p>

        <h3>7.1 Service Providers and Technology Partners</h3>
        <p>
          We may share relevant information with trusted third-party
          providers that support our operations, such as:
        </p>
        <ul>
          <li>Website hosting and cloud infrastructure providers.</li>
          <li>Domain registration and DNS service providers.</li>
          <li>Email delivery and communication service providers.</li>
          <li>Payment processing and billing service providers.</li>
          <li>Analytics, monitoring, and performance service providers.</li>
          <li>Database, storage, backup, and security service providers.</li>
          <li>Software development and project collaboration platforms.</li>
          <li>AI model providers and application integration services, where required for a particular product or service.</li>
        </ul>
        <p>
          Such providers may process information on our behalf or as
          independent service providers, depending on their role and
          contractual arrangements. We seek to work with providers that
          maintain appropriate privacy and security practices.
        </p>

        <h3>7.2 Client-Authorized Sharing</h3>
        <p>
          We may share information with individuals or organizations
          authorized by the relevant client, such as project representatives,
          administrators, or other designated users, where necessary to
          deliver the requested service.
        </p>

        <h3>7.3 Legal and Regulatory Requirements</h3>
        <p>
          We may disclose information where reasonably necessary to comply
          with applicable laws, lawful government requests, court orders,
          legal proceedings, or regulatory obligations.
        </p>

        <h3>7.4 Security and Protection</h3>
        <p>
          We may disclose relevant information where necessary to investigate
          suspected fraud, address security incidents, enforce contractual
          rights, or protect the rights, property, and safety of Navo Cloud,
          our clients, users, or other individuals.
        </p>

        <h3>7.5 Business Transfers</h3>
        <p>
          If Navo Cloud undergoes a merger, acquisition, restructuring,
          financing, asset transfer, or similar business transaction,
          relevant information may be transferred as part of that transaction,
          subject to applicable legal requirements and appropriate safeguards.
        </p>
        <p>
          We do not authorize third parties to use client information for
          unrelated purposes merely because they provide services to us.
        </p>
      `,
    },
    {
      id: "ai-processing",
      heading: "8. Artificial Intelligence and Automated Processing",
      content: `
        <p>
          Navo Cloud develops and integrates artificial intelligence
          solutions, including AI-powered applications, automation systems,
          language model integrations, semantic search systems, and machine
          learning applications. Certain services may process personal
          information or user-provided content through automated systems.
        </p>

        <h3>8.1 AI-Powered Services</h3>
        <p>
          Depending on the application, information may be processed to
          support functionalities such as:
        </p>
        <ul>
          <li>AI-powered chatbots and conversational assistants.</li>
          <li>Document processing, extraction, and summarization.</li>
          <li>Semantic search and information retrieval.</li>
          <li>Automated classification and recommendation systems.</li>
          <li>Prediction, detection, and analytical applications.</li>
          <li>Business process automation and intelligent workflows.</li>
        </ul>

        <h3>8.2 Third-Party AI Providers</h3>
        <p>
          Some AI applications may rely on third-party model providers,
          APIs, hosting platforms, or infrastructure services. Where such
          integrations are used, relevant input data may be transmitted to
          those providers for processing in accordance with the applicable
          service configuration and contractual terms.
        </p>
        <p>
          The data handling practices of third-party AI providers are
          governed by their own privacy policies and service terms.
          Users should review those documents where an application relies
          on an external provider.
        </p>

        <h3>8.3 Use of Customer Data</h3>
        <p>
          We do not automatically assume that information supplied by a
          client may be used to train public or general-purpose AI models.
          Any use of client-provided information for model training,
          evaluation, fine-tuning, or research must be supported by an
          appropriate agreement, authorization, or other lawful basis.
        </p>

        <h3>8.4 Automated Decisions</h3>
        <p>
          Certain applications may generate recommendations, classifications,
          scores, predictions, or other automated outputs. These outputs
          should be evaluated in the context of their intended purpose and
          limitations.
        </p>
        <p>
          Unless expressly stated in a specific product agreement, Navo
          Cloud does not represent that automated outputs are guaranteed to
          be accurate, complete, unbiased, or suitable for making decisions
          without appropriate human review.
        </p>

        <h3>8.5 Sensitive Information</h3>
        <p>
          Users should avoid submitting passwords, financial credentials,
          government identification numbers, health information, or other
          sensitive personal information to AI tools unless the relevant
          service is specifically designed and authorized to process such
          information.
        </p>
      `,
    },
    {
      id: "data-security",
      heading: "9. Data Security and Protection",
      content: `
        <p>
          We take reasonable technical and organizational measures to
          protect personal information against unauthorized access,
          alteration, disclosure, destruction, and accidental loss.
          Our security practices may vary depending on the nature of the
          information, the service architecture, and the risks associated
          with processing.
        </p>

        <h3>9.1 Security Measures</h3>
        <p>
          Depending on the applicable system and service, safeguards may
          include:
        </p>
        <ul>
          <li>Secure communication protocols, including HTTPS and TLS where supported.</li>
          <li>Authentication mechanisms and access controls.</li>
          <li>Role-based access permissions and account management.</li>
          <li>Password hashing and secure credential handling.</li>
          <li>Infrastructure monitoring and technical logging.</li>
          <li>Database access restrictions and security configurations.</li>
          <li>Backups and recovery procedures where implemented.</li>
          <li>Software updates, vulnerability management, and maintenance.</li>
          <li>Internal access restrictions based on operational requirements.</li>
        </ul>

        <h3>9.2 Security Limitations</h3>
        <p>
          No website, application, server, database, or internet-based
          transmission method can be guaranteed to be completely secure.
          Although we take reasonable precautions, we cannot guarantee
          absolute security against every possible cyberattack, system
          failure, unauthorized access attempt, or other security incident.
        </p>

        <h3>9.3 User Responsibilities</h3>
        <p>
          Users are responsible for maintaining the confidentiality of
          their login credentials, using strong passwords, securing their
          devices, and notifying us promptly if they suspect unauthorized
          access to an account or service.
        </p>
      `,
    },
    {
      id: "retention",
      heading: "10. Data Retention and Storage",
      content: `
        <p>
          We retain personal information only for as long as reasonably
          necessary to fulfil the purposes for which it was collected,
          provide requested services, maintain business records, resolve
          disputes, enforce agreements, and comply with applicable legal
          obligations.
        </p>
        <p>
          Retention periods may depend on:
        </p>
        <ul>
          <li>The type and sensitivity of the information.</li>
          <li>The duration of a client relationship or active service subscription.</li>
          <li>Contractual, accounting, tax, and legal recordkeeping requirements.</li>
          <li>Security, fraud prevention, and dispute resolution needs.</li>
          <li>The availability of deletion, archival, and backup mechanisms.</li>
        </ul>

        <h3>10.1 Account and Service Information</h3>
        <p>
          Account information may be retained while an account remains
          active and for a reasonable period afterward where necessary
          for billing, security, legal compliance, or dispute resolution.
        </p>

        <h3>10.2 Project and Business Records</h3>
        <p>
          Project documents, correspondence, invoices, and service records
          may be retained for an appropriate period to support contractual
          obligations, ongoing maintenance, accounting, and business
          administration.
        </p>

        <h3>10.3 Technical Logs and Backups</h3>
        <p>
          Technical logs, diagnostic records, and backups may remain in
          storage for limited operational or security-related periods.
          Deleted information may persist temporarily in backup systems
          until those systems are updated or overwritten according to
          their retention procedures.
        </p>

        <h3>10.4 Deletion</h3>
        <p>
          When information is no longer required, we may delete it,
          anonymize it, or securely dispose of it, subject to applicable
          legal and contractual requirements.
        </p>
      `,
    },
    {
      id: "international-transfers",
      heading: "11. International Data Transfers",
      content: `
        <p>
          Navo Cloud may use hosting providers, cloud infrastructure,
          software platforms, APIs, and other technology services that
          operate in different countries. As a result, personal information
          may be stored or processed outside the country in which it was
          originally collected.
        </p>
        <p>
          International transfers may occur when required to provide
          services, maintain infrastructure, process transactions, or
          support integrations.
        </p>
        <p>
          Where applicable law imposes requirements on international
          transfers, we will seek to apply appropriate safeguards and
          contractual or legal mechanisms.
        </p>
        <p>
          The privacy protections and legal requirements of the destination
          country may differ from those in your country of residence.
        </p>
      `,
    },
    {
      id: "user-rights",
      heading: "12. Your Privacy Rights and Choices",
      content: `
        <p>
          Depending on your location and applicable law, you may have
          certain rights concerning your personal information. These
          rights may include:
        </p>

        <h3>12.1 Right to Access</h3>
        <p>
          You may request information about whether we process your
          personal information and ask for a copy of relevant information,
          subject to applicable legal restrictions.
        </p>

        <h3>12.2 Right to Correction</h3>
        <p>
          You may request correction of inaccurate, incomplete, or
          outdated personal information.
        </p>

        <h3>12.3 Right to Deletion</h3>
        <p>
          You may request deletion of personal information where it is
          no longer necessary for the purpose for which it was collected
          or where applicable law provides a right to deletion.
        </p>

        <h3>12.4 Right to Withdraw Consent</h3>
        <p>
          Where we rely on your consent, you may withdraw that consent
          subject to applicable law. Withdrawal does not affect the
          lawfulness of processing carried out before withdrawal.
        </p>

        <h3>12.5 Right to Object or Restrict Processing</h3>
        <p>
          Where applicable, you may object to certain processing activities
          or request restrictions on how your personal information is used.
        </p>

        <h3>12.6 Right to Data Portability</h3>
        <p>
          Where applicable law provides this right, you may request a copy
          of certain personal information in a commonly used and
          machine-readable format.
        </p>

        <h3>12.7 Marketing Preferences</h3>
        <p>
          You may opt out of non-essential marketing communications at
          any time. This will not prevent us from sending important
          service-related, security, transactional, or legal notifications.
        </p>

        <h3>12.8 Exercising Your Rights</h3>
        <p>
          To exercise a privacy right, contact us using the details
          provided in the Contact Information section. We may request
          reasonable information to verify your identity and confirm
          that you are authorized to make the request.
        </p>
        <p>
          We will review and respond to requests within the time required
          by applicable law. Certain requests may be limited or declined
          where a legal obligation, contractual requirement, security
          concern, or other lawful exception applies.
        </p>
      `,
    },
    {
      id: "third-party-links",
      heading: "13. Third-Party Websites and External Services",
      content: `
        <p>
          Our website, applications, and communications may contain links
          to third-party websites, platforms, services, or integrations.
          These may include payment providers, social media platforms,
          external documentation, hosting services, and other digital tools.
        </p>
        <p>
          Third-party websites and services operate independently and may
          have their own privacy policies, terms of service, cookie
          practices, and data handling procedures.
        </p>
        <p>
          Navo Cloud does not control the privacy practices of independent
          third parties and is not responsible for the content, security,
          or data handling practices of websites that we do not operate.
          We encourage you to review the relevant privacy policies before
          submitting personal information to external services.
        </p>
      `,
    },
    {
      id: "children",
      heading: "14. Children's Privacy",
      content: `
        <p>
          Our general business website and professional technology
          services are not intentionally directed toward children under
          the age of 16, unless a particular product or service explicitly
          states otherwise.
        </p>
        <p>
          We do not knowingly collect personal information from children
          without appropriate authorization or a lawful basis where such
          authorization is required.
        </p>
        <p>
          If you believe that a child has provided personal information
          to us without appropriate authorization, please contact us.
          We will review the request and take appropriate steps where
          required by applicable law.
        </p>
      `,
    },
    {
      id: "business-clients",
      heading: "15. Privacy Responsibilities for Business Clients",
      content: `
        <p>
          When Navo Cloud provides website development, custom software,
          mobile application, hosting-related, or AI integration services
          to a business client, the client may provide personal information
          belonging to its employees, customers, suppliers, or other users.
        </p>
        <p>
          Depending on the service arrangement, the client may determine
          the purposes and means of processing, while Navo Cloud may
          process information on the client's behalf to deliver the
          contracted service.
        </p>
        <p>
          In these circumstances, the client is generally responsible for:
        </p>
        <ul>
          <li>Establishing an appropriate legal basis for collecting and using personal information.</li>
          <li>Providing required privacy notices to its customers and users.</li>
          <li>Obtaining necessary permissions and consents before sharing information with Navo Cloud.</li>
          <li>Ensuring that submitted data is relevant and appropriate for the requested service.</li>
          <li>Managing user permissions and access to its own applications and systems.</li>
          <li>Responding to requests from individuals where the client controls the relevant information.</li>
          <li>Complying with applicable privacy, security, and data protection requirements.</li>
        </ul>
        <p>
          Navo Cloud will handle client-provided information according to
          the applicable service agreement, project instructions, and
          relevant legal obligations.
        </p>
        <p>
          Where required, a separate Data Processing Agreement (DPA) may
          establish additional responsibilities, security measures,
          processing instructions, and data handling requirements.
        </p>
      `,
    },
    {
      id: "confidentiality",
      heading: "16. Confidentiality of Client Information",
      content: `
        <p>
          We recognize that clients may share confidential business
          information, source code, product concepts, technical documents,
          internal workflows, and other proprietary materials while
          working with Navo Cloud.
        </p>
        <p>
          Such information is handled for the purposes of the relevant
          project, service, or business relationship. Access should be
          limited to individuals who require it for authorized operational
          responsibilities.
        </p>
        <p>
          We do not intend to publish, disclose, or use confidential
          client materials for unrelated purposes without appropriate
          authorization, except where disclosure is required by law or
          otherwise permitted under the relevant agreement.
        </p>
        <p>
          Any additional confidentiality obligations may be established
          through a separate non-disclosure agreement, service agreement,
          or other written arrangement.
        </p>
      `,
    },
    {
      id: "data-breach",
      heading: "17. Data Breaches and Security Incidents",
      content: `
        <p>
          Despite reasonable security measures, security incidents may
          occur due to cyberattacks, unauthorized access, human error,
          infrastructure failures, or vulnerabilities in third-party
          services.
        </p>
        <p>
          If we become aware of a security incident involving personal
          information under our responsibility, we will take reasonable
          steps to investigate, contain, and address the incident.
        </p>
        <p>
          Where required by applicable law or contractual obligations,
          we will provide notifications to affected individuals,
          clients, regulators, or other relevant parties within the
          applicable timeframes.
        </p>
        <p>
          Users and clients should report suspected unauthorized access,
          exposed credentials, suspicious activity, or other potential
          security incidents to us as soon as reasonably possible.
        </p>
      `,
    },
    {
      id: "nepal-law",
      heading: "18. Applicable Laws and Regulatory Compliance",
      content: `
        <p>
          Navo Cloud Solutions Pvt. Ltd. operates from Nepal. Our
          collection and processing of personal information may therefore
          be subject to applicable laws and regulations of Nepal,
          including relevant privacy, electronic transaction,
          telecommunications, contractual, and data protection
          requirements.
        </p>
        <p>
          Depending on the location of our clients and users, additional
          privacy and data protection laws may apply to specific
          processing activities.
        </p>
        <p>
          We aim to comply with the legal requirements applicable to
          our business and the services we provide. Nothing in this
          Privacy Policy is intended to remove or restrict rights
          that cannot legally be excluded under applicable law.
        </p>
      `,
    },
    {
      id: "changes",
      heading: "19. Changes to This Privacy Policy",
      content: `
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our business operations, website functionality,
          digital services, technology integrations, legal requirements,
          or data protection practices.
        </p>
        <p>
          When changes are made, we will update the "Last Updated" date
          displayed at the beginning of this policy. Where required by
          applicable law, we may provide additional notice or request
          consent for material changes.
        </p>
        <p>
          We encourage you to review this page periodically to remain
          informed about how Navo Cloud handles personal information.
        </p>
        <p>
          Continued use of our website or services after an updated
          policy becomes effective will be subject to the updated
          policy to the extent permitted by applicable law.
        </p>
      `,
    },
    {
      id: "contact",
      heading: "20. Contact Information",
      content: `
        <p>
          If you have questions, concerns, requests, or complaints
          regarding this Privacy Policy or the way Navo Cloud handles
          personal information, you may contact us using the following
          details:
        </p>
        <p>
          <strong>Company:</strong> Navo Cloud Solutions Pvt. Ltd.<br />
          <strong>Website:</strong>
          <a href="https://navo.com.np/" target="_blank" rel="noopener noreferrer">https://navo.com.np/</a><br />
          <strong>Email:</strong>
           <a href="mailto:info@navo.com.np">info@navo.com.np</a>, <a href="mailto:navoclouds@gmail.com">navoclouds@gmail.com</a><br />
          <strong>Location:</strong> Nepal
        </p>
        <p>
          When submitting a privacy-related request, please describe
          your concern clearly and provide enough information for us
          to identify the relevant account, communication, or service.
          Do not include passwords, authentication codes, or unnecessary
          sensitive information in your request.
        </p>
        <p>
          We will review legitimate requests and respond in accordance
          with applicable legal requirements.
        </p>
      `,
    },
  ],
};
