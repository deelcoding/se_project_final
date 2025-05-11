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
          Hello, my name is Dacotah. I am currently serving as a Senior Systems
          Engineer at a Managed Services Provider (MSP). Over the next year, I
          will be transitioning into a role focused on automation and artificial
          intelligence. I have experience with a range of development
          technologies, including HTML, CSS, JavaScript, React, MongoDB, and
          Postman.
        </p>
        <p className="about-author__tripleten">
          My experience with TripleTen has been highly valuable and enriching.
          The program offers an accessible and supportive learning environment,
          bolstered by the availability of knowledgeable tutors and an active
          community. While the curriculum is self-paced, it requires strong
          personal discipline, as it includes structured deadlines to help
          maintain steady progress. Through this course, I have expanded my
          knowledge across multiple programming languages and developed
          strategies to overcome imposter syndrome, further strengthening both
          my technical and personal growth.
        </p>
      </div>
    </section>
  );
}
