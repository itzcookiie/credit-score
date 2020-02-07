import React from 'react'

const CardDetails = ({ viewCards }) => {
    return (
        <div>
            <h2>Card Details</h2>
            <div>
                {viewCards.map(card => (
                    <div key={card.id} className="card">
                        <h2 className="card-type">{card.title}</h2>
                        <div className="card-details">
                            <p>Apr: <span className="card-figures">{card.APR}%</span></p>
                            <p>Balance Transfer Offer Duration: <span className="card-figures">{card["Balance Transfer Offer Duration"]}months</span>  </p>
                            <p>Purchase Offer Duration: <span className="card-figures">{card["Purchase Offer Duration"]}months</span> </p>
                            <p>Credit Available: <span className="card-figures">£{card["Credit Available"]}</span></p>
                        </div>
                    </div>
                ))
                }
            </div>
            {viewCards.length > 1 && <h2>Total credit available: £{viewCards.reduce((acc, currentCard) => acc += currentCard["Credit Available"], 0)}</h2>}
        </div>
    )
}

export default CardDetails