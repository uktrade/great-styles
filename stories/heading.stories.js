import React from "react";
import Heading from "../react-components/Heading";

import "../styles/great-styles.css";

export default { title: "Headings" };

export const H1_HTML = () => <h1 className="h-xl text-great-blue">H1 HTML</h1>;
export const H1_REACT = () => <Heading>H1 React</Heading>;
