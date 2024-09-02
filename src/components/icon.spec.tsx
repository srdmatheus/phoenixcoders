import { render } from "@testing-library/react";
import { IconType } from "react-icons";

import { Icon } from "./icon";

describe("<Icon />", () => {
  it("should correctly map all icons to valid SVG components", () => {
    Object.keys(Icon).forEach((key) => {
      const IconComponent: IconType = Icon[key as keyof typeof Icon];
      const { container } = render(<IconComponent />);

      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });
});
