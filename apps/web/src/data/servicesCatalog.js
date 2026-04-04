/**
 * Canonical list of services — used by ServicesPage and the contact form.
 */
export const SERVICES = [
  {
    id: 'pdpc-compliance',
    title: 'PDPC Domain Compliance & Privacy Readiness',
    description:
      'Many domains fail PDPC-Style Checks because HTTPS, Privacy Policy, consent, and data practices are missing or weak. We implement and verify what auditors look for—so your site can pass the criteria that feed domain compliance reports.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    detailPath: '/services/pdpc-compliance',
    heroImage: '/compliance/pdpc-domain-report-sample.png',
  },
  {
    id: 'desktop-apps',
    title: 'Desktop Applications Development',
    description:
      'Robust, high-performance desktop applications tailored for Windows, macOS, and Linux environments to streamline your complex business operations.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960',
  },
  {
    id: 'web-apps',
    title: 'Web App Development',
    description:
      'Scalable, secure, and responsive web applications built with modern frameworks to deliver exceptional user experiences across all platforms.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f',
  },
  {
    id: 'custom-systems',
    title: 'Custom System Development',
    description:
      'Bespoke software systems designed from the ground up to solve your unique business challenges. We build scalable, secure, and highly optimized architectures.',
    image: 'https://images.unsplash.com/photo-1639060015191-9d83063eab2a',
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    description:
      'Stunning, high-performance websites optimized for conversion, speed, and search engine visibility to effectively grow your digital footprint.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver seamless, intuitive experiences on both iOS and Android devices.',
    image: 'https://images.unsplash.com/photo-1601036205486-23454774167a',
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    description:
      'Compelling visual identities, UI/UX design, and marketing materials that elevate your brand presence and deeply engage your target audience.',
    image: 'https://images.unsplash.com/photo-1695634365024-b7513447e4f0',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Services',
    description:
      'Expert cloud infrastructure, DevOps practices, containerization, CI/CD pipelines, and scalable deployment solutions to accelerate your software delivery.',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401',
  },
];

export const SERVICE_TITLES = SERVICES.map((s) => s.title);
