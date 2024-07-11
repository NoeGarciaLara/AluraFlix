import { createContext, useState, useContext, useEffect } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        try {
            const response = await fetch('http://localhost:3000/videos');
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const addVideo = (video) => {
        setVideos((prevVideos) => [...prevVideos, { ...video, id: prevVideos.length + 1 }]);
    };

    const updateVideo = (updatedVideo) => {
        setVideos((prevVideos) =>
            prevVideos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video))
        );
    };

    const deleteVideo = async (videoId) => {
        try {
            const response = await fetch(`http://localhost:3000/videos/${videoId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
            } else {
                console.error('Error deleting video:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    return (
        <VideoContext.Provider value={{ videos, addVideo, updateVideo, deleteVideo }}>
            {children}
        </VideoContext.Provider>
    );
};
