import React from 'react';
import '../Style/Style.css';

interface CardProps {
  titulo: string;
  descripcion: string;
  imgUrl: string;
}

const Card: React.FC<CardProps> = ({ titulo: title, descripcion: description, imgUrl: imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;