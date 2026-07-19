// Mirrors the structure of the original template's main menu, minus the
// megamenu "Home" showcase panel (that only made sense for a multi-demo
// template gallery). Every route below is wired up in App.jsx — most inner
// pages render the shared <Placeholder /> page since only the homepage
// markup was supplied in the source template.
export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Service',
    to: '/services-grid',
    children: [
      { label: 'Services', to: '/services-grid' },
      { label: 'Services Carousel', to: '/services-carousel' },
      { label: 'Product Development', to: '/service/product-development' },
      { label: 'UI/UX Designing', to: '/service/ui-ux-designing' },
      { label: 'Digital Marketing', to: '/service/digital-marketing' },
      { label: 'Data Analysis', to: '/service/data-analysis' },
      { label: 'Cyber Security', to: '/service/cyber-security' },
      { label: 'Digital Experience', to: '/service/digital-experience' },
    ],
  },
  {
    label: 'Pages',
    to: '/project',
    children: [
      { label: 'Project', to: '/project' },
      { label: 'Project Carousel', to: '/project-carousel' },
      { label: 'Our Team', to: '/team' },
      { label: 'Team Carousel', to: '/team-carousel' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'FAQs', to: '/faq' },
      { label: 'Login', to: '/login' },
    ],
  },
  {
    label: 'Shop',
    to: '/products',
    children: [
      { label: 'No sidebar', to: '/products' },
      { label: 'Products carousel', to: '/products-carousel' },
      { label: 'Cart', to: '/cart' },
      { label: 'Checkout', to: '/checkout' },
    ],
  },
  {
    label: 'Blog',
    to: '/blog-grid',
    children: [
      { label: 'Blog grid', to: '/blog-grid' },
      { label: 'Blog carousel', to: '/blog-carousel' },
      { label: 'Blog details', to: '/blog-details' },
    ],
  },
]
