import React from "react";
import Styles from "../../../Data/Styles";
import "./cards.css";
function Cards() {
    return (
        <>
            {Styles.map((card) => {
                return (
                    <div className="cards" key={card.id}>
                        <div className="card-desc">
                            <img
                                src={process.env.PUBLIC_URL + card.src}
                                alt={card.desc}
                            />
                            <div className="card-content">
                                <button className="card-btn btn-hover light-btn">
                                    ADD
                                </button>
                                <span className="name">
                                    Name: {card.styleName}
                                </span>
                                <span className="style">
                                    Style: {card.style}
                                </span>
                                <span className="isAvailable">
                                    Available: {card.isAvailable ? "Yes" : "No"}
                                </span>
                                <span className="price">
                                    Price: {card.price}$
                                </span>
                                <span className="design-desc">{card.desc}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Cards;
