figma.showUI(__html__, { themeColors: true, width: 600, height: 300 });
const nodeKeyScheme = ["name"];

const pageData = fetchPageData();

figma.ui.onmessage = (msg) => {
  if (msg.type === "create-rectangles") {
    const nodes = [];

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: "create-rectangles",
      message: `Created ${msg.count} Rectangles`,
    });
  }

  figma.closePlugin();
};

function fetchPageData() {
  // Fetch all component nodes
  const nodes = figma.currentPage.findAllWithCriteria({
    types: ["COMPONENT", "COMPONENT_SET"],
  });

  const filteredData = nodes.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  console.log("filteredData", filteredData);
  figma.ui.postMessage({
    type: "page-data",
    message: filteredData,
  });
}
