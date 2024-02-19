/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a Computer Science graduate from the University of Washington in Seattle and a fervent programming enthusiast, I dedicate myself to achieving excellence in every line of code. I aspire to develop innovative and elegantly simple software and applications through creative approaches and meticulous craftsmanship.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Frontend Development <br> (Next.js, Tailwind CSS, Typescript)",
  "Backend Development <br> (Odoo, Node.js, Python)",
  "Database Management <br> (SQL, NoSQL, PostgreSQL)",
  "API Development & Integration <br> (RESTful, Postman)",
  "Software Development Lifecycle <br> (Agile, DevOps, Waterfall)",
];
/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = '"Inspiring change, bit by bit"';

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "2rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Personal Introduction</h2>
        <p className="large">{description}</p>
        <hr />

        <ul
          style={{
            textAlign: "center",
            columns: 1,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "5rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          {skillsList.map((skill, index) => {
            const parts = skill.split(" (");
            const mainSkill = parts[0];
            const additionalInfo = parts.length > 1 ? `(${parts[1].replace(")", "")})` : "";

            return (
              <li
                key={index}
                style={{
                  marginBottom: "1rem",
                  lineHeight: "1.5",
                  display: "flex",
                  alignItems: "center", // Align items vertically
                  justifyContent: "center", // Align items horizontally
                  // textAlign: "left", // Left-align text within the li
                }}
              >
                <span
                  style={{
                    position: "absolute", // Set position to absolute
                    left: "30%", // Align to the left within its container
                    fontSize: "1.5rem",
                  }}
                >
                  &#9885;
                </span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: `${mainSkill.replace(
                      /\n/g,
                      "<br>"
                    )}<span style="font-weight: bold;">${additionalInfo}</span>`,
                  }}
                ></span>
              </li>
            );
          })}
        </ul>

        <hr />
        <p style={{ padding: "1rem 3rem 0", fontStyle: "italic" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
