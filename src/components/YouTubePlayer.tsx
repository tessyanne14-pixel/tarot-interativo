import ReactPlayer from 'react-player';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black border border-purple-500/20">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width="100%"
        height="100%"
        playing={true}
        controls={true}
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
