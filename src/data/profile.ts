export type SocialLink = {
  name: string
  url: string
  handle: string
}

export type Project = {
  name: string
  description: string
  url: string
  stack: string
}

export type Certificate = {
  name: string
  issuer: string
  issued: string
  expires: string
  credentialId?: string
  url?: string
}

export const profile = {
  name: 'Samir Mujanovic',
  firstName: 'Samir',
  role: 'DevOps / Cloud Engineer',
  location: 'Sarajevo, Bosnia and Herzegovina',
  email: 'samir.mujanovic@proton.me',
  hostname: 'samir',
  guest: 'guest',
  avatar: 'https://avatars.githubusercontent.com/u/42714951?v=4',
  summary:
    'I am a DevOps / Cloud Engineer based in Sarajevo. I love coding, open source, and building on web and cloud platforms. I have worked through the full development cycle for web and mobile projects, and in my spare time I contribute to open source — it is how I keep learning and growing. I also love traveling and discovering new places.',
  whois:
    'Samir Mujanovic is a DevOps / Cloud Engineer from Sarajevo, Bosnia and Herzegovina. He works across Linux, containers, Kubernetes, and AWS, with a background in web and mobile development. He cares about open source, clean automation, and shipping things people can actually run.',
  skills: [
    'Linux',
    'AWS',
    'Kubernetes',
    'Docker',
    'CI/CD',
    'JavaScript',
    'React',
    'Node.js',
  ],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/samir-mujanovic',
      handle: 'samir-mujanovic',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samir-mujanovic',
      handle: 'samir-mujanovic',
    },
    {
      name: 'Email',
      url: 'mailto:samir.mujanovic@proton.me',
      handle: 'samir.mujanovic@proton.me',
    },
  ] satisfies SocialLink[],
  projects: [
    {
      name: 'k8s-crud-stack',
      description: 'CRUD application stack deployed and operated on Kubernetes.',
      url: 'https://github.com/samir-mujanovic/k8s-crud-stack',
      stack: 'JavaScript · Kubernetes',
    },
    {
      name: 'dockerized-basic-microservices',
      description: 'A small microservices setup packaged and run with Docker.',
      url: 'https://github.com/samir-mujanovic/dockerized-basic-microservices',
      stack: 'Docker · Microservices',
    },
    {
      name: 'java-maven-app',
      description: 'Java application built and packaged with Maven.',
      url: 'https://github.com/samir-mujanovic/java-maven-app',
      stack: 'Java · Maven',
    },
    {
      name: 'k8s-docker-app',
      description: 'Containerized app with Kubernetes manifests for local and cluster runs.',
      url: 'https://github.com/samir-mujanovic/k8s-docker-app',
      stack: 'Docker · Kubernetes',
    },
  ] satisfies Project[],
  certificates: [
    {
      name: 'AWS Certified SysOps Administrator – Associate',
      issuer: 'Amazon Web Services',
      issued: 'Feb 2025',
      expires: 'Feb 2028',
      credentialId: 'AWS03782968',
      url: 'https://www.credly.com/badges/f4ea39fa-0f18-4362-9f86-2641d004dfdb',
    },
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      issued: 'Sep 2023',
      expires: 'Sep 2026',
      credentialId: 'SCYMD6LK8EF1QSCR',
      url: 'https://www.credly.com/badges/03348a91-9344-4dd2-bf4f-e8aebd745900',
    },
  ] satisfies Certificate[],
}

export const bannerArt = `
  ____    _    __  __ ___ ____
 / ___|  / \\  |  \\/  |_ _|  _ \\
 \\___ \\ / _ \\ | |\\/| || || |_) |
  ___) / ___ \\| |  | || ||  _ <
 |____/_/   \\_\\_|  |_|___|_| \\_\\

          M U J A N O V I C
`.trim()
