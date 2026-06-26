// Taylor Swift trivia data.
//
// Sourced from Wikipedia (albums & singles discographies), Billboard, and
// The Wrap (movie soundtrack songs). Album styling follows Taylor's official
// casing (e.g. lowercase `folklore`, `evermore`, `reputation`, and lowercase
// folklore/evermore track titles).
//
// SONGS holds the full *standard-edition* tracklist for each studio album.
// Deluxe/platinum bonus tracks are intentionally left out to keep the
// "match the song" game fair; the genuinely new "Taylor's Version" vault
// songs, holiday songs, standalone singles and guest features live in their
// own exports below so the catalog here is complete.

// Studio albums in release order. `colors` drive per-album theming and are
// loosely inspired by each era's visual identity.
export const ALBUMS = [
  { id: 'debut',    name: 'Taylor Swift', short: 'Debut',        year: 2006, leadSingle: 'Tim McGraw',                            colors: ['#3AC6B0', '#1E9E8A'] },
  { id: 'fearless', name: 'Fearless',     short: 'Fearless',     year: 2008, leadSingle: 'Love Story',                           colors: ['#F2C14E', '#C99A2E'] },
  { id: 'speaknow', name: 'Speak Now',    short: 'Speak Now',    year: 2010, leadSingle: 'Mine',                                 colors: ['#9B5DE5', '#6A2FB5'] },
  { id: 'red',      name: 'Red',          short: 'Red',          year: 2012, leadSingle: 'We Are Never Ever Getting Back Together', colors: ['#E63946', '#A4161A'] },
  { id: '1989',     name: '1989',         short: '1989',         year: 2014, leadSingle: 'Shake It Off',                         colors: ['#79C7E3', '#3E92CC'] },
  { id: 'rep',      name: 'reputation',   short: 'reputation',   year: 2017, leadSingle: 'Look What You Made Me Do',             colors: ['#4A4A4A', '#1A1A1A'] },
  { id: 'lover',    name: 'Lover',        short: 'Lover',        year: 2019, leadSingle: 'ME!',                                  colors: ['#FF8FCF', '#7AC7FF'] },
  { id: 'folklore', name: 'folklore',     short: 'folklore',     year: 2020, leadSingle: 'cardigan',                             colors: ['#9E9E9E', '#5E5E5E'] },
  { id: 'evermore', name: 'evermore',     short: 'evermore',     year: 2020, leadSingle: 'willow',                               colors: ['#B5774A', '#7A4B23'] },
  { id: 'midnights',name: 'Midnights',    short: 'Midnights',    year: 2022, leadSingle: 'Anti-Hero',                            colors: ['#3F4C8C', '#1B2452'] },
  { id: 'ttpd',     name: 'The Tortured Poets Department', short: 'TTPD', year: 2024, leadSingle: 'Fortnight',                  colors: ['#8C8275', '#56504A'] },
  { id: 'showgirl', name: 'The Life of a Showgirl',        short: 'Showgirl', year: 2025, leadSingle: 'The Fate of Ophelia',    colors: ['#FF7A1A', '#FF2E88'] },
];

export const albumById = (id) => ALBUMS.find((a) => a.id === id);

// Answer set for the Song → Album game. The 12 studio albums PLUS the
// deluxe / 3am / Anthology / "Taylor's Version" editions, so every released
// song maps to a distinct album bucket and every song is playable.
const STUDIO_MATCH = ALBUMS.map((a) => ({ id: a.id, name: a.name }));
export const MATCH_ALBUMS = [
  ...STUDIO_MATCH,
  { id: 'debut-dlx',         name: 'Taylor Swift (Deluxe)' },
  { id: 'fearless-plat',     name: 'Fearless (Platinum Edition)' },
  { id: 'fearless-tv',       name: "Fearless (Taylor's Version)" },
  { id: 'speaknow-dlx',      name: 'Speak Now (Deluxe)' },
  { id: 'speaknow-tv',       name: "Speak Now (Taylor's Version)" },
  { id: 'red-dlx',           name: 'Red (Deluxe)' },
  { id: 'red-tv',            name: "Red (Taylor's Version)" },
  { id: '1989-dlx',          name: '1989 (Deluxe)' },
  { id: '1989-tv',           name: "1989 (Taylor's Version)" },
  { id: 'folklore-dlx',      name: 'folklore (deluxe)' },
  { id: 'evermore-dlx',      name: 'evermore (deluxe)' },
  { id: 'midnights-3am',     name: 'Midnights (3am Edition)' },
  { id: 'midnights-tildawn', name: 'Midnights (Til Dawn Edition)' },
  { id: 'ttpd-anth',         name: 'The Tortured Poets Department: The Anthology' },
];
export const matchAlbumById = (id) => MATCH_ALBUMS.find((a) => a.id === id);

// Full standard-edition tracklists, mapped to their album. Featured-artist
// credits are dropped from the title to keep the prompt focused on the song.
export const SONGS = [
  // Taylor Swift (2006)
  { title: 'Tim McGraw', album: 'debut' },
  { title: 'Picture to Burn', album: 'debut' },
  { title: 'Teardrops on My Guitar', album: 'debut' },
  { title: 'A Place in This World', album: 'debut' },
  { title: 'Cold as You', album: 'debut' },
  { title: 'The Outside', album: 'debut' },
  { title: 'Tied Together with a Smile', album: 'debut' },
  { title: 'Stay Beautiful', album: 'debut' },
  { title: "Should've Said No", album: 'debut' },
  { title: "Mary's Song (Oh My My My)", album: 'debut' },
  { title: 'Our Song', album: 'debut' },

  // Fearless (2008)
  { title: 'Fearless', album: 'fearless' },
  { title: 'Fifteen', album: 'fearless' },
  { title: 'Love Story', album: 'fearless' },
  { title: 'Hey Stephen', album: 'fearless' },
  { title: 'White Horse', album: 'fearless' },
  { title: 'You Belong with Me', album: 'fearless' },
  { title: 'Breathe', album: 'fearless' },
  { title: 'Tell Me Why', album: 'fearless' },
  { title: "You're Not Sorry", album: 'fearless' },
  { title: 'The Way I Loved You', album: 'fearless' },
  { title: 'Forever & Always', album: 'fearless' },
  { title: 'The Best Day', album: 'fearless' },
  { title: 'Change', album: 'fearless' },

  // Speak Now (2010)
  { title: 'Mine', album: 'speaknow' },
  { title: 'Sparks Fly', album: 'speaknow' },
  { title: 'Back to December', album: 'speaknow' },
  { title: 'Speak Now', album: 'speaknow' },
  { title: 'Dear John', album: 'speaknow' },
  { title: 'Mean', album: 'speaknow' },
  { title: 'The Story of Us', album: 'speaknow' },
  { title: 'Never Grow Up', album: 'speaknow' },
  { title: 'Enchanted', album: 'speaknow' },
  { title: 'Better Than Revenge', album: 'speaknow' },
  { title: 'Innocent', album: 'speaknow' },
  { title: 'Haunted', album: 'speaknow' },
  { title: 'Last Kiss', album: 'speaknow' },
  { title: 'Long Live', album: 'speaknow' },

  // Red (2012)
  { title: 'State of Grace', album: 'red' },
  { title: 'Red', album: 'red' },
  { title: 'Treacherous', album: 'red' },
  { title: 'I Knew You Were Trouble', album: 'red' },
  { title: 'All Too Well', album: 'red' },
  { title: '22', album: 'red' },
  { title: 'I Almost Do', album: 'red' },
  { title: 'We Are Never Ever Getting Back Together', album: 'red' },
  { title: 'Stay Stay Stay', album: 'red' },
  { title: 'The Last Time', album: 'red' },
  { title: 'Holy Ground', album: 'red' },
  { title: 'Sad Beautiful Tragic', album: 'red' },
  { title: 'The Lucky One', album: 'red' },
  { title: 'Everything Has Changed', album: 'red' },
  { title: 'Starlight', album: 'red' },
  { title: 'Begin Again', album: 'red' },

  // 1989 (2014)
  { title: 'Welcome to New York', album: '1989' },
  { title: 'Blank Space', album: '1989' },
  { title: 'Style', album: '1989' },
  { title: 'Out of the Woods', album: '1989' },
  { title: 'All You Had to Do Was Stay', album: '1989' },
  { title: 'Shake It Off', album: '1989' },
  { title: 'I Wish You Would', album: '1989' },
  { title: 'Bad Blood', album: '1989' },
  { title: 'Wildest Dreams', album: '1989' },
  { title: 'How You Get the Girl', album: '1989' },
  { title: 'This Love', album: '1989' },
  { title: 'I Know Places', album: '1989' },
  { title: 'Clean', album: '1989' },

  // reputation (2017)
  { title: '...Ready for It?', album: 'rep' },
  { title: 'End Game', album: 'rep' },
  { title: 'I Did Something Bad', album: 'rep' },
  { title: "Don't Blame Me", album: 'rep' },
  { title: 'Delicate', album: 'rep' },
  { title: 'Look What You Made Me Do', album: 'rep' },
  { title: 'So It Goes...', album: 'rep' },
  { title: 'Gorgeous', album: 'rep' },
  { title: 'Getaway Car', album: 'rep' },
  { title: 'King of My Heart', album: 'rep' },
  { title: 'Dancing with Our Hands Tied', album: 'rep' },
  { title: 'Dress', album: 'rep' },
  { title: "This Is Why We Can't Have Nice Things", album: 'rep' },
  { title: 'Call It What You Want', album: 'rep' },
  { title: "New Year's Day", album: 'rep' },

  // Lover (2019)
  { title: 'I Forgot That You Existed', album: 'lover' },
  { title: 'Cruel Summer', album: 'lover' },
  { title: 'Lover', album: 'lover' },
  { title: 'The Man', album: 'lover' },
  { title: 'The Archer', album: 'lover' },
  { title: 'I Think He Knows', album: 'lover' },
  { title: 'Miss Americana & the Heartbreak Prince', album: 'lover' },
  { title: 'Paper Rings', album: 'lover' },
  { title: 'Cornelia Street', album: 'lover' },
  { title: 'Death by a Thousand Cuts', album: 'lover' },
  { title: 'London Boy', album: 'lover' },
  { title: "Soon You'll Get Better", album: 'lover' },
  { title: 'False God', album: 'lover' },
  { title: 'You Need to Calm Down', album: 'lover' },
  { title: 'Afterglow', album: 'lover' },
  { title: 'ME!', album: 'lover' },
  { title: "It's Nice to Have a Friend", album: 'lover' },
  { title: 'Daylight', album: 'lover' },

  // folklore (2020) — lowercase styling
  { title: 'the 1', album: 'folklore' },
  { title: 'cardigan', album: 'folklore' },
  { title: 'the last great american dynasty', album: 'folklore' },
  { title: 'exile', album: 'folklore' },
  { title: 'my tears ricochet', album: 'folklore' },
  { title: 'mirrorball', album: 'folklore' },
  { title: 'seven', album: 'folklore' },
  { title: 'august', album: 'folklore' },
  { title: 'this is me trying', album: 'folklore' },
  { title: 'illicit affairs', album: 'folklore' },
  { title: 'invisible string', album: 'folklore' },
  { title: 'mad woman', album: 'folklore' },
  { title: 'epiphany', album: 'folklore' },
  { title: 'betty', album: 'folklore' },
  { title: 'peace', album: 'folklore' },
  { title: 'hoax', album: 'folklore' },

  // evermore (2020) — lowercase styling
  { title: 'willow', album: 'evermore' },
  { title: 'champagne problems', album: 'evermore' },
  { title: 'gold rush', album: 'evermore' },
  { title: "'tis the damn season", album: 'evermore' },
  { title: 'tolerate it', album: 'evermore' },
  { title: 'no body, no crime', album: 'evermore' },
  { title: 'happiness', album: 'evermore' },
  { title: 'dorothea', album: 'evermore' },
  { title: 'coney island', album: 'evermore' },
  { title: 'ivy', album: 'evermore' },
  { title: 'cowboy like me', album: 'evermore' },
  { title: 'long story short', album: 'evermore' },
  { title: 'marjorie', album: 'evermore' },
  { title: 'closure', album: 'evermore' },
  { title: 'evermore', album: 'evermore' },

  // Midnights (2022)
  { title: 'Lavender Haze', album: 'midnights' },
  { title: 'Maroon', album: 'midnights' },
  { title: 'Anti-Hero', album: 'midnights' },
  { title: 'Snow on the Beach', album: 'midnights' },
  { title: "You're on Your Own, Kid", album: 'midnights' },
  { title: 'Midnight Rain', album: 'midnights' },
  { title: 'Question...?', album: 'midnights' },
  { title: 'Vigilante Shit', album: 'midnights' },
  { title: 'Bejeweled', album: 'midnights' },
  { title: 'Labyrinth', album: 'midnights' },
  { title: 'Karma', album: 'midnights' },
  { title: 'Sweet Nothing', album: 'midnights' },
  { title: 'Mastermind', album: 'midnights' },

  // The Tortured Poets Department (2024) — standard edition
  { title: 'Fortnight', album: 'ttpd' },
  { title: 'The Tortured Poets Department', album: 'ttpd' },
  { title: 'My Boy Only Breaks His Favorite Toys', album: 'ttpd' },
  { title: 'Down Bad', album: 'ttpd' },
  { title: 'So Long, London', album: 'ttpd' },
  { title: 'But Daddy I Love Him', album: 'ttpd' },
  { title: 'Fresh Out the Slammer', album: 'ttpd' },
  { title: 'Florida!!!', album: 'ttpd' },
  { title: 'Guilty as Sin?', album: 'ttpd' },
  { title: "Who's Afraid of Little Old Me?", album: 'ttpd' },
  { title: 'I Can Fix Him (No Really I Can)', album: 'ttpd' },
  { title: 'loml', album: 'ttpd' },
  { title: 'I Can Do It with a Broken Heart', album: 'ttpd' },
  { title: 'The Smallest Man Who Ever Lived', album: 'ttpd' },
  { title: 'The Alchemy', album: 'ttpd' },
  { title: 'Clara Bow', album: 'ttpd' },

  // The Life of a Showgirl (2025)
  { title: 'The Fate of Ophelia', album: 'showgirl' },
  { title: 'Elizabeth Taylor', album: 'showgirl' },
  { title: 'Opalite', album: 'showgirl' },
  { title: 'Father Figure', album: 'showgirl' },
  { title: 'Eldest Daughter', album: 'showgirl' },
  { title: 'Ruin the Friendship', album: 'showgirl' },
  { title: 'Actually Romantic', album: 'showgirl' },
  { title: 'Wi$h Li$t', album: 'showgirl' },
  { title: 'Wood', album: 'showgirl' },
  { title: 'CANCELLED!', album: 'showgirl' },
  { title: 'Honey', album: 'showgirl' },
  { title: 'The Life of a Showgirl', album: 'showgirl' },
];

// Bonus tracks that are unique to a deluxe / 3am / Til Dawn / Anthology
// edition (the standard editions are in SONGS above). Each maps to its own
// edition bucket so it shows up under that exact album name in the game.
export const EXTENDED_TRACKS = [
  // Taylor Swift (Deluxe / reissue) — 2006
  { title: "I'm Only Me When I'm with You", album: 'debut-dlx' },
  { title: 'Invisible', album: 'debut-dlx' },
  { title: 'A Perfectly Good Heart', album: 'debut-dlx' },

  // Fearless (Platinum Edition) — 2009
  { title: 'Jump Then Fall', album: 'fearless-plat' },
  { title: 'Untouchable', album: 'fearless-plat' },
  { title: 'Come In with the Rain', album: 'fearless-plat' },
  { title: 'Superstar', album: 'fearless-plat' },
  { title: 'The Other Side of the Door', album: 'fearless-plat' },
  { title: 'Forever & Always (Piano Version)', album: 'fearless-plat' },

  // Speak Now (Deluxe) — 2010
  { title: 'Ours', album: 'speaknow-dlx' },
  { title: 'If This Was a Movie', album: 'speaknow-dlx' },
  { title: 'Superman', album: 'speaknow-dlx' },

  // Red (Deluxe) — 2012
  { title: 'The Moment I Knew', album: 'red-dlx' },
  { title: 'Come Back... Be Here', album: 'red-dlx' },
  { title: 'Girl at Home', album: 'red-dlx' },

  // 1989 (Deluxe) — 2014
  { title: 'Wonderland', album: '1989-dlx' },
  { title: 'You Are in Love', album: '1989-dlx' },
  { title: 'New Romantics', album: '1989-dlx' },

  // folklore (deluxe) — 2020
  { title: 'the lakes', album: 'folklore-dlx' },

  // evermore (deluxe) — 2021
  { title: 'right where you left me', album: 'evermore-dlx' },
  { title: "it's time to go", album: 'evermore-dlx' },

  // Midnights (3am Edition) — 2022
  { title: 'The Great War', album: 'midnights-3am' },
  { title: 'Bigger Than the Whole Sky', album: 'midnights-3am' },
  { title: 'Paris', album: 'midnights-3am' },
  { title: 'High Infidelity', album: 'midnights-3am' },
  { title: 'Glitch', album: 'midnights-3am' },
  { title: "Would've, Could've, Should've", album: 'midnights-3am' },
  { title: 'Dear Reader', album: 'midnights-3am' },

  // Midnights (Til Dawn Edition) — 2023
  { title: 'Hits Different', album: 'midnights-tildawn' },

  // The Tortured Poets Department: The Anthology (second half) — 2024
  { title: 'The Black Dog', album: 'ttpd-anth' },
  { title: 'imgonnagetyouback', album: 'ttpd-anth' },
  { title: 'The Albatross', album: 'ttpd-anth' },
  { title: 'Chloe or Sam or Sophia or Marcus', album: 'ttpd-anth' },
  { title: 'How Did It End?', album: 'ttpd-anth' },
  { title: 'So High School', album: 'ttpd-anth' },
  { title: 'I Hate It Here', album: 'ttpd-anth' },
  { title: 'thanK you aIMee', album: 'ttpd-anth' },
  { title: "I Look in People's Windows", album: 'ttpd-anth' },
  { title: 'The Prophecy', album: 'ttpd-anth' },
  { title: 'Cassandra', album: 'ttpd-anth' },
  { title: 'Peter', album: 'ttpd-anth' },
  { title: 'The Bolter', album: 'ttpd-anth' },
  { title: 'Robin', album: 'ttpd-anth' },
  { title: 'The Manuscript', album: 'ttpd-anth' },
];

// Brand-new "From the Vault" songs first released on the re-recorded
// "Taylor's Version" albums, mapped to that re-recording's edition bucket.
export const VAULT_TRACKS = [
  // Fearless (Taylor's Version) — 2021
  { title: 'You All Over Me', album: 'fearless-tv' },
  { title: 'Mr. Perfectly Fine', album: 'fearless-tv' },
  { title: 'We Were Happy', album: 'fearless-tv' },
  { title: "That's When", album: 'fearless-tv' },
  { title: "Don't You", album: 'fearless-tv' },
  { title: 'Bye Bye Baby', album: 'fearless-tv' },
  // Red (Taylor's Version) — 2021
  { title: 'Better Man', album: 'red-tv' },
  { title: 'Nothing New', album: 'red-tv' },
  { title: 'Babe', album: 'red-tv' },
  { title: 'Message in a Bottle', album: 'red-tv' },
  { title: 'I Bet You Think About Me', album: 'red-tv' },
  { title: 'Forever Winter', album: 'red-tv' },
  { title: 'Run', album: 'red-tv' },
  { title: 'The Very First Night', album: 'red-tv' },
  { title: 'All Too Well (10 Minute Version)', album: 'red-tv' },
  // Speak Now (Taylor's Version) — 2023
  { title: 'Electric Touch', album: 'speaknow-tv' },
  { title: 'When Emma Falls in Love', album: 'speaknow-tv' },
  { title: 'I Can See You', album: 'speaknow-tv' },
  { title: 'Castles Crumbling', album: 'speaknow-tv' },
  { title: 'Foolish One', album: 'speaknow-tv' },
  { title: 'Timeless', album: 'speaknow-tv' },
  // 1989 (Taylor's Version) — 2023
  { title: '"Slut!"', album: '1989-tv' },
  { title: "Say Don't Go", album: '1989-tv' },
  { title: "Now That We Don't Talk", album: '1989-tv' },
  { title: 'Suburban Legends', album: '1989-tv' },
  { title: 'Is It Over Now?', album: '1989-tv' },
];

// Every Taylor-performed song that maps to an album bucket — standard
// tracks, deluxe/edition bonus tracks, and Taylor's Version vault songs.
// This is the full pool for the Song → Album matching game.
export const ALL_SONGS = [...SONGS, ...EXTENDED_TRACKS, ...VAULT_TRACKS];

// Songs Taylor wrote/recorded for films (not on a standard studio album),
// with the movie they were made for and any featured collaborator.
export const SOUNDTRACK_SONGS = [
  { title: 'Crazier',                    movie: 'Hannah Montana: The Movie', year: 2009, feature: null },
  { title: 'Today Was a Fairytale',      movie: "Valentine's Day",           year: 2010, feature: null },
  { title: 'Safe & Sound',               movie: 'The Hunger Games',          year: 2012, feature: 'The Civil Wars' },
  { title: 'Eyes Open',                  movie: 'The Hunger Games',          year: 2012, feature: null },
  { title: 'Sweeter than Fiction',       movie: 'One Chance',                year: 2013, feature: null },
  { title: "I Don't Wanna Live Forever", movie: 'Fifty Shades Darker',       year: 2017, feature: 'ZAYN' },
  { title: 'Beautiful Ghosts',           movie: 'Cats',                      year: 2019, feature: null },
  { title: 'Only the Young',             movie: 'Miss Americana',            year: 2020, feature: null },
  { title: 'Carolina',                   movie: 'Where the Crawdads Sing',   year: 2022, feature: null },
  { title: 'I Knew It, I Knew You',      movie: 'Toy Story 5',               year: 2026, feature: null },
];

export const MOVIES = [...new Set(SOUNDTRACK_SONGS.map((s) => s.movie))];

// Holiday releases.
export const HOLIDAY_SONGS = [
  { title: 'Last Christmas',                 release: 'The Taylor Swift Holiday Collection', year: 2007 },
  { title: 'Christmases When You Were Mine',  release: 'The Taylor Swift Holiday Collection', year: 2007 },
  { title: 'Santa Baby',                      release: 'The Taylor Swift Holiday Collection', year: 2007 },
  { title: 'Silent Night',                    release: 'The Taylor Swift Holiday Collection', year: 2007 },
  { title: 'White Christmas',                 release: 'The Taylor Swift Holiday Collection', year: 2007 },
  { title: 'Christmas Must Be Something More', release: 'The Taylor Swift Holiday Collection', year: 2007 },
  { title: 'Christmas Tree Farm',             release: 'Standalone single',                   year: 2019 },
];

// Non-album standalone singles (excluding holiday & soundtrack songs).
export const STANDALONE_SINGLES = [
  { title: 'Ronan',                          year: 2012, note: 'Charity single' },
  { title: 'All of the Girls You Loved Before', year: 2023, note: 'Lover-era outtake' },
];

// Guest features / collaborations on other artists' songs.
export const FEATURES = [
  { song: 'Two Is Better Than One',  artist: 'Boys Like Girls',   year: 2009 },
  { song: 'Half of My Heart',        artist: 'John Mayer',        year: 2009 },
  { song: 'Both of Us',              artist: 'B.o.B',             year: 2012 },
  { song: "Highway Don't Care",      artist: 'Tim McGraw',        year: 2013, with: 'Keith Urban' },
  { song: 'Babe',                    artist: 'Sugarland',         year: 2018 },
  { song: 'Renegade',                artist: 'Big Red Machine',   year: 2021 },
  { song: 'Birch',                   artist: 'Big Red Machine',   year: 2021 },
  { song: 'Gasoline (Remix)',        artist: 'HAIM',              year: 2021 },
  { song: 'The Joker and the Queen (Remix)', artist: 'Ed Sheeran', year: 2022 },
  { song: 'The Alcott',              artist: 'The National',      year: 2023 },
  { song: 'Us.',                     artist: 'Gracie Abrams',     year: 2024 },
];
