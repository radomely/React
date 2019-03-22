import React from "react";
import Localization from "../context/localization";
import styles from "./Article.module.css";

export const Article = ({ title, text, linkLabel, features }) => (
  <article className={styles.article}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.text}>{text}</p>
    <ul>
      {features.map(feature => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
    <a className={styles.link} href="https://reactjs.org/" target="_blank">
      {linkLabel}
    </a>
  </article>
);

export default function LocalizedArticle() {
  return (
    <Localization.Consumer>
      {({ localizedContent }) => <Article {...localizedContent} />}
    </Localization.Consumer>
  );
}
