// Image paths point at /public/assets/images/... (served from site root by
// Vite) using the same folder layout as the original HTML template's
// assets/images directory, just without the "assets/" prefix.
const asset = (path) => `/assets/images/${path}`

export const heroSlides = [
  {
    subtitle: 'Take the Digital Advantage',
    title: ['Shaping the', 'Perfect Website', 'Solution'],
    text: "We plan, design and build growth-ready web experiences for marketing agencies who'd rather ship than tinker.",
    image: asset('resources/hero-slider-1-1.png'),
  },
  {
    subtitle: 'Strategy Meets Craft',
    title: ['Building Brands', 'That Actually', 'Convert'],
    text: 'From positioning to pixel-perfect execution, our team turns strategy into measurable digital results.',
    image: asset('resources/hero-slider-1-2.png'),
  },
  {
    subtitle: 'Full-Service Agency',
    title: ['Marketing,', 'Design & Growth', 'Under One Roof'],
    text: 'One partner for campaigns, product design and the data to prove it all worked.',
    image: asset('resources/hero-slider-1-3.png'),
  },
]

export const heroShapes = {
  ambientOne: asset('shapes/slider-shape-1-1.png'),
  ambientTwo: asset('shapes/slider-shape-1-2.png'),
  badgeIcon: asset('shapes/slider-shape-1-3.png'),
  frameAccentOne: asset('shapes/slider-shape-1-4.png'),
  frameAccentTwo: asset('shapes/slider-shape-1-5.png'),
  titleSquiggle: asset('shapes/slider-shape-1-6.png'),
}

export const features = [
  {
    icon: 'icon-lightbulb',
    title: 'Versatile Latest Technology',
    desc: 'We build on modern, well-supported stacks so your site stays fast and easy to extend for years, not months.',
    image: asset('features/features-1-1.png'),
  },
  {
    icon: 'icon-chart-line',
    title: 'Business Planning Strategies',
    desc: 'Every engagement starts with a plan tied to a business outcome — traffic, leads, or revenue.',
    image: asset('features/features-1-2.png'),
  },
  {
    icon: 'icon-address-book',
    title: 'Professional Team Members',
    desc: 'A senior, cross-disciplinary team of strategists, designers and engineers works your project end to end.',
    image: asset('features/features-1-3.png'),
  },
]

export const aboutImages = {
  imageOne: asset('about/about-1-1.jpg'),
  imageTwo: asset('about/about-1-2.jpg'),
  consultationIcon: asset('about/about-1-3.jpg'),
  logoBadge: asset('resources/inner-logo-light.png'),
}

export const aboutStats = {
  clients: 120,
  projects: 3600,
}

export const services = [
  {
    icon: 'icon-code',
    title: 'Website Development',
    desc: 'Custom-built, responsive sites engineered for speed, accessibility and easy content management.',
  },
  {
    icon: 'icon-palette',
    title: 'Digital Product Design',
    desc: 'Interfaces designed around real user research, not just trend-chasing visual polish.',
  },
  {
    icon: 'icon-bullhorn',
    title: 'Marketing Strategy',
    desc: 'Channel plans, messaging and campaign calendars built around your actual growth targets.',
  },
  {
    icon: 'icon-shapes',
    title: 'Modern Designing',
    desc: 'Distinct visual identities — from brand systems to full marketing site design.',
  },
]

export const servicesLogo = asset('resources/inner-logo-dark.png')

export const whyChooseCards = [
  {
    icon: 'icon-medal',
    title: 'Quality Result',
    desc: 'We measure every project by outcomes delivered, not hours billed.',
  },
  {
    icon: 'icon-users',
    title: 'Best Team Members',
    desc: 'Senior strategists and builders who have shipped this exact kind of project before.',
  },
]

export const whyChooseImage = asset('why-choose/why-choose-1-1.png')

export const testimonials = [
  {
    name: 'Robert Smith',
    role: 'Marketing Manager',
    image: asset('testimonials/testimonial-1-1.jpg'),
    rating: 5,
    quote:
      'The team rebuilt our site in six weeks and our qualified-lead volume doubled the following quarter.',
  },
  {
    name: 'William Jenny',
    role: 'Founder, Studio Lark',
    image: asset('testimonials/testimonial-1-2.jpg'),
    rating: 5,
    quote:
      "They pushed back on our first brief in the right ways — the site we ended up with performs far better than what we asked for.",
  },
  {
    name: 'Jhone Rox',
    role: 'Head of Growth',
    image: asset('testimonials/testimonial-1-3.jpg'),
    rating: 5,
    quote:
      'Clear communication, on-time delivery, and a design system our internal team can actually maintain ourselves.',
  },
]

// The original template repeats a single brand mark across the client strip.
export const clientLogos = Array.from({ length: 5 }).map(() => asset('resources/brand-1-1.png'))

export const projects = [
  { title: 'Business Consult', category: 'Marketing', image: asset('project/project-1-1.png') },
  { title: 'Northline Retail', category: 'E-commerce', image: asset('project/project-1-2.png') },
  { title: 'Solace Wellness', category: 'Branding', image: asset('project/project-1-3.png') },
  { title: 'Fleet Logistics', category: 'Web App', image: asset('project/project-2-1.png') },
  { title: 'Arbor Finance', category: 'Marketing', image: asset('project/project-2-2.png') },
  { title: 'Kindred Health', category: 'Product Design', image: asset('project/project-3-2.png') },
]

export const team = [
  { name: 'William Jenny', role: 'Marketer', image: asset('team/team-1-1.jpg') },
  { name: 'Jhone Rox', role: 'Marketer', image: asset('team/team-1-2.jpg') },
  { name: 'Robert Smith', role: 'Marketer', image: asset('team/team-1-3.jpg') },
]

export const videoImage = asset('video/video-1-1.png')

export const blogPosts = [
  {
    day: '03',
    month: 'Feb',
    title: '10 Simple Practices That Will Help You Get 1% Better',
    author: 'Dianne Russell',
    avatar: asset('blog/lp-1-1.jpg'),
    image: asset('blog/blog-1-1.png'),
  },
  {
    day: '04',
    month: 'Jan',
    title: 'How Small Agencies Win Enterprise Clients',
    author: 'Brooklyn Simmons',
    avatar: asset('blog/lp-1-2.jpg'),
    image: asset('blog/blog-1-2.png'),
  },
  {
    day: '06',
    month: 'Mar',
    title: 'A Practical Guide to Measuring Campaign ROI',
    author: 'Darrell Steward',
    avatar: asset('blog/lp-1-3.jpg'),
    image: asset('blog/blog-1-3.png'),
  },
]

export const brand = {
  logoDark: asset('logo-dark.png'),
  logoLight: asset('logo-light.png'),
  footerLogo: asset('footer-logo-light.png'),
}

// The template's footer "Gallery" widget links to a real gallery page and
// uses dedicated gallery thumbnails that weren't part of this asset drop —
// the home-showcase images are reused here since they're otherwise unused
// (this project drops the multi-demo megamenu they were built for).
export const footerGalleryImages = [
  asset('home-showcase/home-showcase-1.jpg'),
  asset('home-showcase/home-showcase-2.jpg'),
  asset('home-showcase/home-showcase-3.jpg'),
  asset('home-showcase/home-showcase-4.jpg'),
]
