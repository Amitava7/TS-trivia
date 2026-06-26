// Taylor Swift trivia data.
//
// Sourced from Wikipedia (albums & singles discographies), Billboard, and
// The Wrap (movie soundtrack songs). Album styling follows Taylor's official
// casing (e.g. lowercase `folklore`, `evermore`, `reputation`).

// Studio albums in release order. `era` colors drive per-album theming and
// are loosely inspired by each era's visual identity.
export const ALBUMS = [
  { id: 'debut',    name: 'Taylor Swift', short: 'Debut',        year: 2006, leadSingle: 'Tim McGraw',                            colors: ['#3AC6B0', '#1E9E8A'] },
  { id: 'fearless', name: 'Fearless',     short: 'Fearless',     year: 2008, leadSingle: 'Love Story',                           colors: ['#F2C14E', '#C99A2E'] },
  { id: 'speaknow', name: 'Speak Now',    short: 'Speak Now',    year: 2010, leadSingle: 'Mine',                                 colors: ['#9B5DE5', '#6A2FB5'] },
  { id: 'red',      name: 'Red',          short: 'Red',          year: 2012, leadSingle: 'We Are Never Ever Getting Back Together', colors: ['#E63946', '#A4161A'] },
  { id: '1989',     name: '1989',         short: '1989',         year: 2014, leadSingle: 'Shake It Off',                         colors: ['#79C7E3', '#3E92CC'] },
  { id: 'rep',      name: 'reputation',   short: 'reputation',   year: 2017, leadSingle: 'Look What You Made Me Do',             colors: ['#4A4A4A', '#1A1A1A'] },
  { id: 'lover',    name: 'Lover',        short: 'Lover',        year: 2019, leadSingle: 'ME!',                                  colors: ['#FF8FCf', '#7AC7FF'] },
  { id: 'folklore', name: 'folklore',     short: 'folklore',     year: 2020, leadSingle: 'cardigan',                             colors: ['#9E9E9E', '#5E5E5E'] },
  { id: 'evermore', name: 'evermore',     short: 'evermore',     year: 2020, leadSingle: 'willow',                               colors: ['#B5774A', '#7A4B23'] },
  { id: 'midnights',name: 'Midnights',    short: 'Midnights',    year: 2022, leadSingle: 'Anti-Hero',                            colors: ['#3F4C8C', '#1B2452'] },
  { id: 'ttpd',     name: 'The Tortured Poets Department', short: 'TTPD', year: 2024, leadSingle: 'Fortnight',                  colors: ['#8C8275', '#56504A'] },
  { id: 'showgirl', name: 'The Life of a Showgirl',        short: 'Showgirl', year: 2025, leadSingle: 'The Fate of Ophelia',    colors: ['#FF7A1A', '#FF2E88'] },
];

export const albumById = (id) => ALBUMS.find((a) => a.id === id);

// A handful of signature, widely-known songs per album. Kept to flagship
// tracks to keep the "match the song" game fair.
export const SONGS = [
  // Taylor Swift (2006)
  { title: 'Tim McGraw', album: 'debut' },
  { title: 'Teardrops on My Guitar', album: 'debut' },
  { title: 'Our Song', album: 'debut' },
  { title: 'Picture to Burn', album: 'debut' },
  // Fearless (2008)
  { title: 'Love Story', album: 'fearless' },
  { title: 'You Belong with Me', album: 'fearless' },
  { title: 'Fifteen', album: 'fearless' },
  { title: 'Fearless', album: 'fearless' },
  // Speak Now (2010)
  { title: 'Mine', album: 'speaknow' },
  { title: 'Back to December', album: 'speaknow' },
  { title: 'Mean', album: 'speaknow' },
  { title: 'Enchanted', album: 'speaknow' },
  // Red (2012)
  { title: 'I Knew You Were Trouble', album: 'red' },
  { title: '22', album: 'red' },
  { title: 'All Too Well', album: 'red' },
  { title: 'Begin Again', album: 'red' },
  // 1989 (2014)
  { title: 'Shake It Off', album: '1989' },
  { title: 'Blank Space', album: '1989' },
  { title: 'Style', album: '1989' },
  { title: 'Wildest Dreams', album: '1989' },
  // reputation (2017)
  { title: '...Ready for It?', album: 'rep' },
  { title: 'Delicate', album: 'rep' },
  { title: 'End Game', album: 'rep' },
  { title: 'Getaway Car', album: 'rep' },
  // Lover (2019)
  { title: 'ME!', album: 'lover' },
  { title: 'You Need to Calm Down', album: 'lover' },
  { title: 'Cruel Summer', album: 'lover' },
  { title: 'The Man', album: 'lover' },
  // folklore (2020)
  { title: 'cardigan', album: 'folklore' },
  { title: 'exile', album: 'folklore' },
  { title: 'august', album: 'folklore' },
  { title: 'betty', album: 'folklore' },
  // evermore (2020)
  { title: 'willow', album: 'evermore' },
  { title: 'champagne problems', album: 'evermore' },
  { title: 'no body, no crime', album: 'evermore' },
  { title: 'gold rush', album: 'evermore' },
  // Midnights (2022)
  { title: 'Anti-Hero', album: 'midnights' },
  { title: 'Lavender Haze', album: 'midnights' },
  { title: 'Karma', album: 'midnights' },
  { title: 'Bejeweled', album: 'midnights' },
  // The Tortured Poets Department (2024)
  { title: 'Fortnight', album: 'ttpd' },
  { title: 'Down Bad', album: 'ttpd' },
  { title: 'Florida!!!', album: 'ttpd' },
  { title: 'But Daddy I Love Him', album: 'ttpd' },
  // The Life of a Showgirl (2025)
  { title: 'The Fate of Ophelia', album: 'showgirl' },
  { title: 'Opalite', album: 'showgirl' },
  { title: 'Elizabeth Taylor', album: 'showgirl' },
  { title: 'Father Figure', album: 'showgirl' },
];

// Songs Taylor wrote/recorded for films (not on a standard studio album),
// with the movie they were made for and any featured collaborator.
export const SOUNDTRACK_SONGS = [
  { title: 'Crazier',                 movie: 'Hannah Montana: The Movie', year: 2009, feature: null },
  { title: 'Today Was a Fairytale',   movie: "Valentine's Day",           year: 2010, feature: null },
  { title: 'Safe & Sound',            movie: 'The Hunger Games',          year: 2012, feature: 'The Civil Wars' },
  { title: 'Eyes Open',               movie: 'The Hunger Games',          year: 2012, feature: null },
  { title: 'Sweeter than Fiction',    movie: 'One Chance',                year: 2013, feature: null },
  { title: "I Don't Wanna Live Forever", movie: 'Fifty Shades Darker',    year: 2017, feature: 'ZAYN' },
  { title: 'Beautiful Ghosts',        movie: 'Cats',                      year: 2019, feature: null },
  { title: 'Carolina',                movie: 'Where the Crawdads Sing',   year: 2022, feature: null },
];

export const MOVIES = [...new Set(SOUNDTRACK_SONGS.map((s) => s.movie))];
