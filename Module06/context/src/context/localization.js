import React, { Component, createContext } from "react";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import ua from "../locales/ua.json";

const locales = { en, ru, ua };

export const LocalizationContext = createContext({
  currentLocale: "en",
  localizedContent: locales.en,
  locales: Object.keys(locales),
  changeLocale: () => null
});

export default class Localization extends Component {
  static Consumer = LocalizationContext.Consumer;

  state = {
    currentLocale: "en",
    localizedContent: locales.en,
    locales: Object.keys(locales)
  };

  changeLocale = locale => {
    this.setState({
      currentLocale: locale,
      localizedContent: locales[locale]
    });
  };

  render() {
    return (
      <LocalizationContext.Provider
        value={{ ...this.state, changeLocale: this.changeLocale }}
      >
        {this.props.children}
      </LocalizationContext.Provider>
    );
  }
}
