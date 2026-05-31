type VideoPlayerProps = {
  vimeoId: string;
  autoplay?: boolean;
};

export default function VideoPlayer({
  vimeoId,
  autoplay = false,
}: VideoPlayerProps) {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    muted: autoplay ? "1" : "0",
    loop: "1",
    autopause: "0",
    controls: "0",
    title: "0",
    byline: "0",
    portrait: "0",
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "360px",
        paddingTop: "177.78%", // 9:16 aspect ratio
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?${params.toString()}`}
        allow="autoplay; fullscreen; picture-in-picture"
        loading="lazy"
        frameBorder={0}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
