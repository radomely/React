import React from "react";
import Localization from "../context/localization";
import css from "./Article.module.css";

export const Article = ({ title, text, linkLabel, features }) => (
  <article className={css.article}>
    <h3 className={css.title}>{title}</h3>
    <p className={css.text}>{text}</p>
    <ul>
      {features.map(feature => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
    <a className={css.link} href="https://reactjs.org/">
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
