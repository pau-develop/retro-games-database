import { AdvancedImage } from "@cloudinary/react";
import { useCallback, useEffect, useState } from "react";
import CardGalleryStyled from "./CardGalleryStyled";

interface CardGalleryProps {
  action: () => void;
}

const CardGallery = ({ action }: CardGalleryProps) => {
  const [cards, setCards] = useState<any>([]);

  const fetchCards = useCallback(async () => {
    const result = await fetch("/api/cloudinaryAPI");
    const data = await result.json();

    setCards(data);
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const handleClickCard = (url: string) => {
    //add card url to db
  };

  return (
    <CardGalleryStyled>
      <ul>
        {cards.map((cards: any) => {
          return (
            <li key={cards.asset_id}>
              <img
                src={cards.url}
                alt="card design"
                onClick={() => handleClickCard(cards.url)}
              />
            </li>
          );
        })}
      </ul>
    </CardGalleryStyled>
  );
};

export default CardGallery;
