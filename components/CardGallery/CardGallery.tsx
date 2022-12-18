import getLoggedUser from "@/pages/api/getLoggedUser";
import { AdvancedImage } from "@cloudinary/react";
import useCloud from "hooks/useCloud";
import useUserAPI from "hooks/useUserAPI";
import { useCallback, useEffect, useState } from "react";
import CardGalleryStyled from "./CardGalleryStyled";

interface CardGalleryProps {
  action: () => void;
  type: "card" | "avatar";
}

const CardGallery = ({ action, type }: CardGalleryProps) => {
  const { fetchImages } = useCloud();
  const { updateCard, updateAvatar, getLoggedUser } = useUserAPI();
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    async function getImages() {
      const result = await fetchImages(type);
      setCards(result);
    }

    getImages();
  }, [fetchImages]);

  const handleClickCard = async (url: string) => {
    const result =
      type === "card" ? await updateCard(url) : await updateAvatar(url);
    if (result) {
      getLoggedUser();
      return action();
    }
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
