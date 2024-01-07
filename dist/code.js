/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
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
        figma.ui.postMessage({
            type: "create-rectangles",
            message: `Created ${msg.count} Rectangles`,
        });
    }
    figma.closePlugin();
};
function fetchPageData() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCLHNCQUFzQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmaWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIHdpZHRoOiA2MDAsIGhlaWdodDogMzAwIH0pO1xuY29uc3Qgbm9kZUtleVNjaGVtZSA9IFtcIm5hbWVcIl07XG5jb25zdCBwYWdlRGF0YSA9IGZldGNoUGFnZURhdGEoKTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICBpZiAobXNnLnR5cGUgPT09IFwiY3JlYXRlLXJlY3RhbmdsZXNcIikge1xuICAgICAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5jb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgICAgICByZWN0LnggPSBpICogMTUwO1xuICAgICAgICAgICAgcmVjdC5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMSwgZzogMC41LCBiOiAwIH0gfV07XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChyZWN0KTtcbiAgICAgICAgICAgIG5vZGVzLnB1c2gocmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZXM7XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiY3JlYXRlLXJlY3RhbmdsZXNcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBDcmVhdGVkICR7bXNnLmNvdW50fSBSZWN0YW5nbGVzYCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuZnVuY3Rpb24gZmV0Y2hQYWdlRGF0YSgpIHtcbiAgICBjb25zdCBub2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGxXaXRoQ3JpdGVyaWEoe1xuICAgICAgICB0eXBlczogW1wiQ09NUE9ORU5UXCIsIFwiQ09NUE9ORU5UX1NFVFwiXSxcbiAgICB9KTtcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBub2Rlcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyZWREYXRhXCIsIGZpbHRlcmVkRGF0YSk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInBhZ2UtZGF0YVwiLFxuICAgICAgICBtZXNzYWdlOiBmaWx0ZXJlZERhdGEsXG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=