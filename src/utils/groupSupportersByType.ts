import { Suporter } from "../components/SupportersList/types";

export function groupSupportersByType(supporters: Suporter[]) {
  const groupedSupporters: Record<string, Suporter[]> = {};
  for (const supporter of supporters) {
    let { type } = supporter;

    switch (true) {
      case type.includes("Individual"):
        type = "Individuals";
        break;
      case type === "Company":
        type = "Companies";
        break;
      case type === "Project":
        type = "Projects";
        break;
      case type === "Foundation":
        type = "Foundations";
        break;
    }

    if (!groupedSupporters[type]) {
      groupedSupporters[type] = [];
    }
    groupedSupporters[type].push(supporter);
  }
  return groupedSupporters;
}
