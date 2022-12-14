import useCloud from "../../hooks/useCloud";
import useUserAPI from "../../hooks/useUserAPI";
import { useEffect, useState } from "react";
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
      return action();
    }
  };

  return (
    <CardGalleryStyled className="card-gallery">
      <ul
        className={
          type === "card"
            ? "card-gallery__list--card"
            : "card-gallery__list--avatar"
        }
      >
        {cards.map((cards: any) => {
          return (
            <li
              key={cards.asset_id}
              className={
                type === "card"
                  ? "card-gallery__item--card"
                  : "card-gallery__item--avatar"
              }
            >
              <img
                src={cards.secure_url}
                alt="card design"
                onClick={() => handleClickCard(cards.secure_url)}
              />
            </li>
          );
        })}
      </ul>
    </CardGalleryStyled>
  );
};

export default CardGallery;
