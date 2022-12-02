import React from "react";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
  <p>
    Показать: <FilterLink filter="SHOW_ALL">Все</FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">В работе</FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">Завершённые</FilterLink>
  </p>
);

export default Footer;
