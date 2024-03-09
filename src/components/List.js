import React from 'react';

export default function List(props) {
  return (
    <article className="journal-list">
      <img
        src={`../images/${props.item.img}`}
        alt={props.item.title}
        className="journal-list--img"
      />

      <div className="journal-list--details">
        <div className="journal-list--location-details">
          <img
            src="../images/location.png"
            alt="location"
          />
          <span className="journal-list--location">{props.item.location}</span>
          <a href={props.item.googleMapLink}>View on Google Maps</a>
        </div>
        <h1 className="journal-list--title">{props.item.title}</h1>
        <div className="journal-list--dates">
          {props.item.startDate} - {props.item.endDate}
        </div>
        <div className="journal-list--description">{props.item.description}</div>
      </div>
    </article>
  );
}
