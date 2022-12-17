import CardGalleryStyled from "./CardGalleryStyled";

interface CardGalleryProps {
  action: () => void;
}

const CardGallery = ({ action }: CardGalleryProps) => {
  return (
    <CardGalleryStyled>
      <ul>
        <li>
          <img src="/bgtest01.webp" onClick={action} />
        </li>
        <li>
          <img src="/bgtest02.webp" />
        </li>
        <li>
          <img src="/bgtest03.webp" />
        </li>
      </ul>
    </CardGalleryStyled>
  );
};

export default CardGallery;
