// Game catalog. Every minigame is a multiple-choice round, so they share one
// quiz engine (see screens/QuizScreen). Each game supplies a `build()` that
// returns a shuffled list of questions:
//   { id, prompt, promptKicker, options: string[], answer: number, note }

import {
  ALBUMS,
  ALL_SONGS,
  SOUNDTRACK_SONGS,
  MOVIES,
  MATCH_ALBUMS,
  matchAlbumById,
} from './data/taylorSwift';
import { LUCKY_NUMBER } from './theme';

// ---- helpers ---------------------------------------------------------------

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const sample = (arr, n) => shuffle(arr).slice(0, n);

// Build a 4-option multiple choice question from a correct value and a pool of
// distractors. Returns { options, answer }.
const makeChoices = (correct, pool, n = 4) => {
  const distractors = sample(
    pool.filter((x) => x !== correct),
    n - 1
  );
  const options = shuffle([correct, ...distractors]);
  return { options, answer: options.indexOf(correct) };
};

const roundLength = (pool) => Math.min(LUCKY_NUMBER, pool.length);

// ---- question builders -----------------------------------------------------

function buildSongToAlbum() {
  const albumNames = MATCH_ALBUMS.map((a) => a.name);
  return sample(ALL_SONGS, roundLength(ALL_SONGS)).map((song, i) => {
    const album = matchAlbumById(song.album);
    const { options, answer } = makeChoices(album.name, albumNames);
    return {
      id: `sa-${i}`,
      promptKicker: 'Which album is this song from?',
      prompt: song.title,
      options,
      answer,
      note: `“${song.title}” is from ${album.name}.`,
    };
  });
}

function buildAlbumToYear() {
  const allYears = ALBUMS.map((a) => a.year);
  const pool = shuffle(ALBUMS).slice(0, roundLength(ALBUMS));
  return pool.map((album, i) => {
    const { options, answer } = makeChoices(
      String(album.year),
      [...new Set(allYears.map(String))]
    );
    return {
      id: `ay-${i}`,
      promptKicker: 'What year was this album released?',
      prompt: album.name,
      options,
      answer,
      note: `${album.name} was released in ${album.year}.`,
    };
  });
}

function buildSoundtrackToMovie() {
  const pool = sample(SOUNDTRACK_SONGS, roundLength(SOUNDTRACK_SONGS));
  return pool.map((song, i) => {
    const { options, answer } = makeChoices(song.movie, MOVIES);
    const feat = song.feature ? ` (with ${song.feature})` : '';
    return {
      id: `sm-${i}`,
      promptKicker: 'Which movie was this song written for?',
      prompt: song.title,
      options,
      answer,
      note: `“${song.title}”${feat} was written for ${song.movie} (${song.year}).`,
    };
  });
}

function buildAlbumToLeadSingle() {
  const allSingles = ALBUMS.map((a) => a.leadSingle);
  const pool = shuffle(ALBUMS).slice(0, roundLength(ALBUMS));
  return pool.map((album, i) => {
    const { options, answer } = makeChoices(album.leadSingle, allSingles);
    return {
      id: `ls-${i}`,
      promptKicker: 'What was the lead single from this album?',
      prompt: album.name,
      options,
      answer,
      note: `The lead single from ${album.name} was “${album.leadSingle}”.`,
    };
  });
}

// ---- catalog ---------------------------------------------------------------

export const GAMES = [
  {
    id: 'song-album',
    title: 'Song → Album',
    subtitle: 'Name the era it lives on',
    emoji: '💿',
    colors: ['#FF6CAB', '#7366FF'],
    build: buildSongToAlbum,
  },
  {
    id: 'album-year',
    title: 'Album → Year',
    subtitle: 'Place it on the timeline',
    emoji: '📅',
    colors: ['#3AC6B0', '#2D7DEC'],
    build: buildAlbumToYear,
  },
  {
    id: 'soundtrack-movie',
    title: 'Songs for the Screen',
    subtitle: 'Match the track to its movie',
    emoji: '🎬',
    colors: ['#FF9E1B', '#FF2E88'],
    build: buildSoundtrackToMovie,
  },
  {
    id: 'album-single',
    title: 'Lead Single',
    subtitle: 'Which song launched the era?',
    emoji: '🎤',
    colors: ['#FFD36E', '#FF7A1A'],
    build: buildAlbumToLeadSingle,
  },
];

export const gameById = (id) => GAMES.find((g) => g.id === id);
