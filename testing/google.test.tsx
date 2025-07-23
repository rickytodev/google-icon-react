import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { GoogleIcon } from "../dist/index";

describe("<GoogleIcon />", () => {
  beforeEach(() => {
    render(<GoogleIcon icon="home" />);
  });

  test("render component", () => {
    const icon = screen.getByRole("icon-google");
    expect(icon).toBeDefined();
  });

  test("render icon", () => {
    const icon = screen.getByRole("icon-google");
    expect(icon.textContent).toBe("home");
  });
});
