import React, { useState } from 'react'
import testdata from './testdata.json'
import CardDetails from './CardDetails'

const Cards = ({ data }) => {

    const [cardData, setCardData] = useState({
        cards: []
    })

    const showCard = card => {
        setCardData({
            ...cardData,
            [card.type]: !cardData[card.type]
        })
        if(cardData[card.type]) {
            setCardData(state => {
               return {
                   ...state,
                   cards: cardData.cards.filter(currentCard => currentCard !== card)
               }
            })
        } else if(typeof cardData[card.type] === 'undefined') {
            setCardData(state => {
                return {
                    ...state,
                    cards: [...cardData.cards, card]
                }
            })
        } 
        else {
            setCardData(state => {
                return {
                    ...state,
                    cards: [...cardData.cards, card]
                }
            })
        }
    }

    const showMultipleCards = () => {
        return filteredCards().map(card => {
            if(cardData.cards.length === 0) {
                setCardData(state => {
                    return {
                        ...state,
                        [card.type]: !cardData[card.type],
                        cards: [...state.cards, card]
                    }
                })
            } else if(cardData.cards.length <= 1) {
                if(cardData[card.type]) {
                    return
                } else {
                    setCardData(state => {
                        return {
                            ...state,
                            [card.type]: !cardData[card.type]
                        }
                    })
                    setCardData(state => {
                       return {
                        ...state,
                        cards: [...cardData.cards, card]
                       } 
                    })
                }
            } else {
                return
            }
        })
    }



    const filteredCards = () => {
        return testdata.filter(card => {
            switch(card.type) {
                case 'Student':
                    return data.employmentStatus === card.type 
                case 'Anywhere':
                    return card.title 
                case 'Liquid':
                    return data.annualIncome > 16000
            }
        })
    }

    return (
        <div>
            <h2>Cards</h2>
            <h3>Eligible for: </h3>
            <ul>
                {filteredCards().map(selectedCard => (
                    <div key={selectedCard.id}>
                        <li>
                            {`${selectedCard.type} Card`}
                        <button onClick={() => showCard(selectedCard)}>Show card</button>
                        </li>
                    </div>
                ))
                }
            </ul>
            <div>
                <button onClick={showMultipleCards}>Show multiple cards</button>
            </div>
            {cardData.cards.length > 0 ? <CardDetails viewCards={cardData.cards}/> : 'Click a card to find out more'}
        </div>
    )
}

export default Cards