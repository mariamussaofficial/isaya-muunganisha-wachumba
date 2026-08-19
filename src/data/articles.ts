export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  authorSlug: string;
  publishedAt: string;
  updatedAt?: string;
  featuredImage: string;
  featuredImageAlt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: 'isaya-muunganisha-wachumba-online-media',
    title: 'Isaya Muunganisha Wachumba: Habari, Trends na Maisha kwa Mtazamo Mpya',
    excerpt: 'Karibu kwenye jukwaa la habari, trends, social media, burudani na maisha linalokua kutoka Tanzania.',
    category: 'Habari',
    categorySlug: 'news',
    author: 'Isaya Muunganisha Wachumba',
    authorSlug: 'isaya-muunganisha-wachumba',
    publishedAt: '2026-08-19T08:00:00+03:00',
    featuredImage: '/logo.png',
    featuredImageAlt: 'Logo ya Isaya Muunganisha Wachumba',
    content: [
      'Isaya Muunganisha Wachumba ni online media inayolenga kuleta habari, trends na maudhui yanayohusu maisha kwa lugha na mtazamo unaoeleweka kwa audience ya sasa.',
      'Tutaangazia matukio, watu, mitandao ya kijamii, burudani na simulizi zinazogusa maisha ya kila siku Tanzania na zaidi.',
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, categorySlug: string, limit = 3) {
  return articles.filter((article) => article.slug !== currentSlug && article.categorySlug === categorySlug).slice(0, limit);
}
