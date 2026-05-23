"use client";
import { useEffect, useState } from "react";
import { Music } from "lucide-react";

type Track = {
  title: string;
  artist: string;
  albumArt?: string;
  url?: string;
  playcount?: string;
};

type Data = {
  isPlaying: boolean;
  nowPlaying?: Track | null;
  topTracks: Track[];
};

export default function MusicWidget() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/lastfm");
      const json = await res.json();
      setData(json);
    } catch {
      setData({ isPlaying: false, topTracks: [] });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const AlbumArt = ({ src, alt }: { src?: string; alt?: string }) => (
    <div
      className="flex-shrink-0 flex items-center justify-center overflow-hidden"
      style={{
        width: 44,
        height: 44,
        borderRadius: 8,
        background: "rgba(77,184,232,0.2)",
      }}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <Music size={18} style={{ color: "rgba(77,184,232,0.8)" }} />
      )}
    </div>
  );

  return (
    <div
      className="flex flex-col gap-3 p-4"
      style={{
        width: 280,
        borderRadius: 16,
        background: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 8px 32px rgba(31,138,184,0.15)",
      }}
    >
      {loading ? (
        <p className="text-xs text-center" style={{ color: "rgba(0,0,0,0.4)" }}>
          Loading...
        </p>
      ) : (
        <>
          {/* Now Playing */}
          {data?.isPlaying && data.nowPlaying ? (
            <div>
              <div className="flex items-center gap-1 mb-2">
                <div
                  style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#5ab534",
                  }}
                />
                <span className="text-xs font-medium" style={{ color: "rgba(0,0,0,0.45)" }}>
                  Now Playing
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <AlbumArt src={data.nowPlaying.albumArt} alt={data.nowPlaying.title} />
                <div className="overflow-hidden flex-1">
                  <p className="text-sm font-semibold truncate" style={{ color: "#1a1a1a" }}>
                    {data.nowPlaying.title}
                  </p>
                  <p className="text-xs truncate" style={{ color: "rgba(0,0,0,0.5)" }}>
                    {data.nowPlaying.artist}
                  </p>
                </div>
                {/* Animated bars */}
                <div className="flex items-end gap-0.5 flex-shrink-0" style={{ height: 20 }}>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 3,
                        borderRadius: 2,
                        background: "rgba(77,184,232,0.8)",
                        animation: `bounce${i} 0.8s ease-in-out infinite alternate`,
                        height: i === 2 ? 20 : i === 1 ? 14 : 10,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: 12 }} />
            </div>
          ) : null}

          {/* Top 3 This Month */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(0,0,0,0.35)" }}>
              Top this month
            </p>
            <div className="flex flex-col gap-2">
              {(data?.topTracks ?? []).map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold flex-shrink-0"
                    style={{ width: 16, color: "rgba(0,0,0,0.25)" }}
                  >
                    {i + 1}
                  </span>
                  <AlbumArt src={t.albumArt ?? undefined} alt={t.title} />
                  <div className="overflow-hidden flex-1">
                    <p className="text-xs font-semibold truncate" style={{ color: "#1a1a1a" }}>
                      {t.title}
                    </p>
                    <p className="text-xs truncate" style={{ color: "rgba(0,0,0,0.5)" }}>
                      {t.artist}
                    </p>
                  </div>
                  <span className="text-xs flex-shrink-0" style={{ color: "rgba(0,0,0,0.3)" }}>
                    {t.playcount}x
                  </span>
                </div>
              ))}
              {data?.topTracks.length === 0 && (
                <p className="text-xs" style={{ color: "rgba(0,0,0,0.3)" }}>
                  No data yet
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}