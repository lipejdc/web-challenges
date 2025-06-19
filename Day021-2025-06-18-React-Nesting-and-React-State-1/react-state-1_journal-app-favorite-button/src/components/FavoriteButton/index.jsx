import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {

  const [isFavorite, setIsFavorite] = useState();

  function handleFavoriteClick() {
    setIsFavorite((prevFavorite) => !prevFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleFavoriteClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
