import { NextResponse } from "next/server";

export async function GET() {
  const { LASTFM_API_KEY, LASTFM_USERNAME } = process.env;

  // Fetch now playing + top tracks parallel
  const [nowPlayingRes, topTracksRes] = await Promise.all([
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
    ),
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=3&period=1month`
    ),
  ]);

  const nowPlayingData = await nowPlayingRes.json();
  const topTracksData = await topTracksRes.json();

  const track = nowPlayingData.recenttracks?.track?.[0];
  const isPlaying = track?.["@attr"]?.nowplaying === "true";

  const topTracks = topTracksData.toptracks?.track?.map((t: any) => ({
    title: t.name,
    artist: t.artist.name,
    playcount: t.playcount,
    albumArt: t.image?.[2]?.["#text"] || null,
    url: t.url,
  })) || [];

  return NextResponse.json({
    isPlaying,
    nowPlaying: isPlaying
      ? {
          title: track.name,
          artist: track.artist["#text"],
          album: track.album["#text"],
          albumArt: track.image?.[2]?.["#text"] || null,
          url: track.url,
        }
      : null,
    topTracks,
  });
}