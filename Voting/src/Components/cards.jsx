import React from "react";
import { useState } from "react";
import { users } from "./data";


const cardsData = [
  {
    id: 1,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8pGwEbdRYpgix_Mt85Qjca7GqB_aZrpadPA&usqp=CAU",
    header: "Romeo",
    description: "Vote for me!",
    count: 0
  },
  {
    id: 2,
    avatar: "https://downloadwap.com/thumbs2/wallpapers/p2/2019/anime/44/182afdee13697883.jpg",
    header: "lufi",
    description: "vote for me!",
    count: 0
  },
  {
    id: 3,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtlKGzyhnXLR6viH_b2tS7thxI2_FlKM-dGAAkFPcygrMOTWxGurd5kXqZcwahfCXKbk&usqp=CAU",
    header: "naruto",
    description: "vote for me!",
    count: 0
  },
  {
    id: 4,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWo8AuYQSSmq8FCjMabRpROH_9e4NUat2FXg&usqp=CAU",
    header: "killua",
    description: "vote for me!",
    count: 10
  }
];

const Card = ({ id, avatar, header, description, count, handleClick, disabled }) => {
  return (
    <div className="card">
      <img src={avatar} alt={header} />
      <h2>{header}</h2>
      <p>{description}</p>
      <p>Count: {count}</p>
      <button disabled={disabled} onClick={() => handleClick(id)}>
        Vote
      </button>
    </div>
  );
};

const CardList = ({userType}) => {
  const [cards, setCards] = useState(cardsData);
  const [voted, setVoted] = useState(false);


  const handleVote = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
      card.id === id ? { ...card, count: card.count + 1 } : card
      )
    );
    setVoted(true);
  };

  const handleChangeVotes = (id) =>{
    setVoted(false);
    setCards(cardsData);
  }

  const handleLogout = () => {
  localStorage.removeItem("user");

  window.location.href = "/login";
  };

  return (
    <div className="card-list">
      <button className="cvote" onClick={handleChangeVotes} disabled={!voted}>
        Change vote
      </button>
      {cards.map((card) => (
        <Card
          key={card.id}
          {...card}
          handleClick={handleVote}
          disabled={voted}
        />
      ))}
     <button className="out" onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default CardList;


