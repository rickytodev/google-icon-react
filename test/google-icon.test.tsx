import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GoogleIcon } from "../dist-react/index";

describe("<GoogleIcon />", () => {
  test("render component", () => {
    const icon = crypto.randomUUID();
    const attrIcon = `material-symbols:${icon}-outline-rounded`;

    render(<GoogleIcon icon={icon} />);

    const element = screen.getByTestId("google-icon");

    expect(element).toBeDefined();
    expect(element.getAttribute("icon")).toBe(attrIcon)
  });
});
