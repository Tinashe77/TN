export const blogPosts = [
  {
    slug: 'tn-cybertech-bank-nationwide-rebranding-journey',
    category: 'News',
    title: "The Final Stretch: TN CyberTech Bank's Nationwide Rebranding Journey",
    date: '16 June 2026',
    readTime: '3 min read',
    excerpt:
      'TN CyberTech Bank is approximately 85% complete with its nationwide rebranding exercise, replacing the last remaining Steward Bank branding across Zimbabwe.',
    image: '/blog/rebranding-journey-agent.png',
    imageAlt: 'TN CyberTech Bank rebranded registered agent kiosk',
    gallery: [
      {
        src: '/blog/rebranding-journey-before.png',
        alt: 'Legacy Steward Bank branding at an agent point',
      },
      {
        src: '/blog/rebranding-journey-signage.png',
        alt: 'TN CyberTech Bank signage and Visa card point at an agent location',
      },
      {
        src: '/blog/rebranding-journey-agent.png',
        alt: 'TN CyberTech Bank registered agent branding',
      },
    ],
    paragraphs: [
      'Across Zimbabwe, a transformation is taking place.',
      'From bustling city centres to remote growth points, TN CyberTech Bank teams have been on the road, working tirelessly to replace the last remaining traces of Steward Bank branding with the bold new TN CyberTech identity. What may seem like a simple change of signage is, in reality, a nationwide effort involving careful planning, long hours, and a shared commitment to delivering a consistent brand experience for our customers.',
      'Our rebranding teams have covered thousands of kilometres across Mashonaland Central, Mashonaland East, Mashonaland West, Manicaland, Matabeleland North, Harare, Chitungwiza, and beyond. Every sign replaced, every ATM updated, and every branch refreshed brings us one step closer to completing this important milestone.',
      'Today, we are proud to announce that the exercise is approximately 85% complete.',
      'But this journey is about more than replacing logos. It is about building a brand that reflects who we are today, a modern, innovative financial institution committed to empowering Zimbabweans through technology-driven banking solutions.',
      'One of the most exciting aspects of this exercise has been the involvement of our customers. Through social media, we invited members of the public to help us identify any remaining Steward Bank branding. The response has been overwhelming. Customers have shared photographs, locations, feedback, and even personal reflections on the transformation. This engagement has not only helped us identify areas requiring attention but has also reinforced the strong connection we share with the communities we serve.',
      'As we enter the final phase of the exercise, our teams are conducting detailed inspections and clean-up activities to ensure no outdated branding is left behind. Every report received and every site verified brings us closer to our goal of achieving a fully unified TN CyberTech Bank presence nationwide.',
      'To everyone who has supported this journey, our employees, agents, partners, and customers, thank you. Your participation is helping us shape the future of the TN CyberTech brand.',
      "If you spot any remaining Steward Bank branding, we would still love to hear from you. Together, let's complete the transformation and make the TN CyberTech identity visible in every corner of Zimbabwe.",
      'The finish line is in sight. The future is TN CyberTech Bank.',
    ],
  },
]

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
