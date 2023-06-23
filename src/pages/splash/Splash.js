import React, { useEffect, useState } from "react";

const Splashscreen = ({ showSplash }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("splash-video");
    videoElement.addEventListener("loadeddata", () => {
      setVideoLoaded(true);
      setTimeout(() => {
        // Hide the splash screen after the desired duration
        document.getElementById("splash-screen").style.display = "none";
      }, 3000); // Adjust the duration in milliseconds (e.g., 3000 for 3 seconds)

      // Cleanup event listener on component unmount
      return () => {
        videoElement.removeEventListener("loadeddata", () => {
          setVideoLoaded(true);
        });
      };
    });
  }, []);

  const splashScreenStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
  };

  const loadingStyles = {
    fontSize: "24px",
    color: "#333",
  };

  if (!showSplash) {
    return null;
  }

  return (
    <div id="splash-screen" style={splashScreenStyles}>
      {!videoLoaded && (
        <div style={loadingStyles}>
          {/* Display a loading message or spinner */}
          <p>Loading...</p>
        </div>
      )}
      <video id="splash-video" autoPlay muted>
        <source src="../../assests/images/LogoSplash.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Splashscreen;
