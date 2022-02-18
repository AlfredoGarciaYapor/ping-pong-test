import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import PlayerSocre from "./PlayerSocre";

const test = ('render content', () => {
    const score = 0;

    const component = render(<PlayerSocre score={score} />);

    component.getByText(0);
});

export default test;