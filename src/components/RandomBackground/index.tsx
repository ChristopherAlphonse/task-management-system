import { useEffect, useState } from "react";

const RandomBackground = () => {
    const [bgImageUrl, setBgImageUrl] = useState("");
    const [requestMade, setRequestMade] = useState(false);
    const [viewportWidth] = useState(window.innerWidth);
    const [viewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await fetch(
                    `https://source.unsplash.com/featured/${viewportWidth}x${viewportHeight}`,
                );
                if (response.ok) {
                    const imageUrl = response.url;
                    setBgImageUrl(imageUrl);
                } else {
                    console.error("Failed to fetch image");
                }
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        };

        if (!requestMade) {
            fetchRandomImage().then(() => {
                setRequestMade(true);
            });
        }
    }, [requestMade, viewportWidth, viewportHeight]);

    if (!bgImageUrl) {
        return null;
    }

    return (
        <div
            className="h-screen"
            style={{
                backgroundImage: `url(${bgImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    );
};

export default RandomBackground;
