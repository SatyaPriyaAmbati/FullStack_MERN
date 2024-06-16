import React from 'react';

function Card({ item }) {
  return (
    <>
      <div className="p-2"> {/* Added padding around the card */}
        <div className="card w-80 bg-base-100 shadow-xl"> {/* Reduced the width */}
          <figure>
            <img src={item.image} alt="Books" className="h-48 object-cover" /> {/* Adjusted image height */}
          </figure>
          <div className="card-body p-4"> {/* Reduced padding inside the card */}
            <h2 className="card-title text-lg">
              {item.name}
              <div className="badge badge-secondary text-xs">{item.category}</div> {/* Reduced badge size */}
            </h2>
            <p className="text-sm">{item.title}</p> {/* Reduced text size */}
            <div className="card-actions  justify-between">
              <div className="badge badge-outline text-xs hover:bg-pink-500">Buy</div> {/* Reduced badge size */}
              <div className="badge badge-outline text-xs">{item.price}</div> {/* Reduced badge size */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
