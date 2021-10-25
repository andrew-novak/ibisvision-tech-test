import { useState, useEffect } from "react";

export default useUserMedia => requestedMedia => {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    const enableStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          requestedMedia
        );
        setMediaStream(stream);
      } catch (err) {}
    };

    if (!mediaStream) {
      enableStream();
    } else {
      const cleanup = async () => {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
      };
      return cleanup;
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
};
