import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GoogleIcon } from "../dist-react/index";

describe("<GoogleIcon />", () => {
  test("render component", () => {
    const icon = crypto.randomUUID();
    render(<GoogleIcon icon={icon} />);

    const element = screen.getByText(icon);

    expect(element).toBeDefined();
    expect(element.textContent).toBe(icon);
    expect(element.style.fontVariationSettings).toBe("'FILL' 0");
  });
});
