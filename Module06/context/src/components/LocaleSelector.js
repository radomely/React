import React, { Component } from "react";
import { LocalizationContext } from "../context/localization";
import styles from "./LocaleSelector.module.css";

const getBtnClass = (btnLocale, currentLocale) =>
  btnLocale === currentLocale ? styles.active : styles.button;

export default class LocaleSelector extends Component {
  static contextType = LocalizationContext;

  render() {
    const { currentLocale, locales, changeLocale } = this.context;

    return (
      <section className={styles.selector}>
        {locales.map(locale => (
          <button
            key={locale}
            onClick={() => changeLocale(locale)}
            className={getBtnClass(locale, currentLocale)}
          >
            {locale}
          </button>
        ))}
      </section>
    );
  }
}
