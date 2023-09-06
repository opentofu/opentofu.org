export function groupSupportersByType(supporters) {
  const groupedSupporters = {};
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
