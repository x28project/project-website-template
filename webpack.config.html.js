/**
 * An object representing website data
 * @type {{
 *   title: string;
 *   meta: {
 *     author: string;
 *     description: string;
 *     keywords: string;
 *   };
 *   logo: {
 *     alt: string;
 *     src: string;
 *   };
 *   tagline: string;
 *   projects: global.projects;
 *   links: {
 *     archive?: {
 *       href: string;
 *       title: string;
 *     };
 *     bandcamp?: {
 *       href: string;
 *       title: string;
 *     };
 *     facebook?: {
 *       href: string;
 *       title: string;
 *     };
 *     github?: {
 *       href: string;
 *       title: string;
 *     };
 *     linkedin?: {
 *       href: string;
 *       title: string;
 *     };
 *     soundcloud?: {
 *       href: string;
 *       title: string;
 *     };
 *     tumblr?: {
 *       href: string;
 *       title: string;
 *     };
 *     twitter?: {
 *       href: string;
 *       title: string;
 *     };
 *     youtube?: {
 *       href: string;
 *       title: string;
 *     };
 *   };
 *   copyright: string;
 * }[]}
 */
module.exports = {
  title: 'Project Website Template',
  meta: {
    author: 'Project Website Template',
    description: 'This is the Project Website Template',
    keywords: 'Project Website Template',
  },
  logo: { alt: 'Project Website Template logo', src: '/images/logo.png' },
  tagline: 'This is the text under the Project Website Template logo',
  projects: global.projects,
  links: {
    archive: {
      href: 'https://archive.org/#search.php?query=%22Project+Website+Template22&sort=-publicdate',
      title: 'Internet Archive',
    },
    bandcamp: {
      href: 'https://bandcamp.com/#projectwebsitetemplate.bandcamp.com/',
      title: 'Bandcamp',
    },
    facebook: {
      href: 'https://www.facebook.com/#projectwebsitetemplate',
      title: 'Facebook',
    },
    github: {
      href: 'https://www.github.com/#projectwebsitetemplate',
      title: 'GitHub',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/#projectwebsitetemplate',
      title: 'LinkedIn',
    },
    soundcloud: {
      href: 'https://soundcloud.com/#projectwebsitetemplate',
      title: 'SoundCloud',
    },
    tumblr: {
      href: 'https://tumbler.com/#projectwebsitetemplate-blog.tumblr.com',
      title: 'Tumblr',
    },
    twitter: {
      href: 'https://twitter.com/#projectwebsitetemplate',
      title: 'Twitter',
    },
    youtube: {
      href: 'https://www.youtube.com/#projectwebsitetemplate',
      title: 'YouTube',
    },
  },
  copyright: 'Project Website Template',
};
