import { useState } from 'react';
import Banner from "../../components/Banner";
import Body from "../../components/Body";
import Modal from "../../components/Modal";
import {useVideoContext} from "../../context"

function Home() {

    const { videos, updateVideo } = useVideoContext();
    const [currentCard, setCurrentCard] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleModalSave = async (updatedCard) => {
        await updateVideo(updatedCard);
        setModalOpen(false);
    };

    const handleCardEdit = (card) => {
        setCurrentCard(card);
        setModalOpen(true);
    };

    return(
        <>
        <Banner/>
        <Body videos={videos} onEdit={handleCardEdit}/>
        <Modal
                    card={currentCard}
                    isOpen={modalOpen}
                    onClose={handleModalClose}
                    onSave={handleModalSave}
                />
        </>
        
    )
}

export default Home;