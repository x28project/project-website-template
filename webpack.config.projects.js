/**
 * An array of objects representing project data
 * @type {{
 *   id: string;
 *   abbr: string;
 *   cover?: {
 *     alt: string;
 *     src: string;
 *     webp: string;
 *   };
 *   game?: {
 *     href: string;
 *   };
 *   links?: [
 *     {
 *       href: string;
 *       text: string;
 *       type: string;
 *     }
 *   ];
 *   iframe?: {
 *     src: string;
 *   };
 *   title: string;
 *   tracks?: [
 *     {
 *       href: string;
 *       title: string;
 *     }
 *   ];
 *   video?: boolean;
 *   year: number;
 *   zip?: string;
 * }[]}
 */
module.exports = [
  {
    id: 'album',
    abbr: 'A',
    cover: {
      alt: 'Project Website Template - Album - Cover',
      src: '/images/Project Website Template - Album - Cover.png',
      webp: '/images/Project Website Template - Album - Cover.webp',
    },
    // iframe: {
    //   src: '/#https://bandcamp.com/#EmbeddedPlayer/album=ALBUM_ID/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/',
    // },
    title: 'Album',
    tracks: [
      {
        href: '/#songs/Album/Project Website Template - Album - 01 First Track.mp3',
        title: 'First Track',
      },
      {
        href: '/#songs/Album/Project Website Template - Album - 02 Second Track.mp3',
        title: 'Second Track',
      },
      {
        href: '/#songs/Album/Project Website Template - Album - 03 Third Track.mp3',
        title: 'Third Track',
      },
    ],
    year: 2019,
    zip: '/#songs/Album/Project Website Template - Album.zip',
  },
  {
    id: 'videoGame',
    abbr: 'VG',
    cover: {
      alt: 'Video Game - Cover',
      src: '/images/Video Game - Cover.png',
      webp: '/images/Video Game - Cover.webp',
    },
    game: { href: '/#VideoGame' },
    links: [
      { href: '/#VideoGame', text: 'Play online', type: 'play' },
      {
        href: '/#games/Video Game 1.0 (Windows and Mac).zip',
        text: 'Download (Mac/Windows)',
        type: 'download',
      },
    ],
    title: 'Video Game',
    year: 2015,
    zip: '/#games/Video Game 1.0 (Windows and Mac).zip',
  },
  {
    id: 'hiddenAlbum',
    abbr: 'H',
    hidden: true,
    title: 'Hidden Album',
    tracks: [
      {
        href: '/#songs/Album/Project Website Template - Hidden - 01 Hidden Track.mp3',
        title: 'Hidden Track',
      },
    ],
    year: 2014,
    zip: '/#songs/Album/Project Website Template - Hidden Album.zip',
  },
  {
    id: 'embeddedVideo',
    abbr: 'EV',
    iframe: {
      // src: 'https://www.youtube-nocookie.com/embed/VIDEO_ID?rel=0&amp;showinfo=0',
      src: '/images/Album - Video.mp4',
    },
    title: 'Embedded Video',
    video: true,
    year: 2010,
  },
];
