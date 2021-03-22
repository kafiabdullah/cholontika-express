export default function searchCost() {
    return fetch("https://my-json-server.typicode.com/kafiabdullah/cholontika-riders-api/db").then((data) => data.json());
}
