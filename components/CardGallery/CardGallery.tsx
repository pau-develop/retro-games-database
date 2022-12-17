import { AdvancedImage } from "@cloudinary/react";
import useCloud from "hooks/useCloud";
import { useCallback, useEffect, useState } from "react";
import CardGalleryStyled from "./CardGalleryStyled";

interface CardGalleryProps {
  action: () => void;
}

const CardGallery = ({ action }: CardGalleryProps) => {
  const { fetchCards } = useCloud();
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    async function getCards() {
      const result = await fetchCards();
      console.log(result);
      setCards(result);
    }

    getCards();
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
