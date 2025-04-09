import React from "react";
import "./About.css";
import photo from "../../assets/photo.jpg";

export default function AboutAuthor() {
  return (
    <section className="about-author">
      <div>
        <img
          className="about-author__photo"
          src={photo}
          alt="Dacotah Deel"
        />
      </div>
      <div className="about-author__narrative">
        <h2 className="about-author__title">About the author</h2>
        <p className="about-author__personal">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about-author__tripleten">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}
