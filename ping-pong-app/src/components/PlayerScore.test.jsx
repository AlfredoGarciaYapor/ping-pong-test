import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import PlayerSocre from "./PlayerSocre";

test ('render content', () => {
    const score = 0

    const component = render(<PlayerSocre score={score} />)

    component.getByText(0)



    console.log('%c⧭', 'color: #aa00ff', component);
})