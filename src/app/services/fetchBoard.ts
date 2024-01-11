/*

curl 'https://api.air.inc/shorturl/bDkBvnzpB/boards/c74bbbc8-602b-4c88-be71-9e21b36b0514' \
  -H 'authority: api.air.inc' \
  -H 'accept: application/json' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'authorization;' \
  -H 'content-type: application/json' \
  -H 'origin: https://app.air.inc' \
  -H 'referer: https://app.air.inc/' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'x-air-board-context;' \
  --data-raw '{"ancestorCutoff":"c74bbbc8-602b-4c88-be71-9e21b36b0514","numThumbnails":1,"sortBy":"custom","view":"c74bbbc8-602b-4c88-be71-9e21b36b0514","includeAncestors":true,"libraryBoards":"ALL","limit":30,"cursor":null,"sortField":{"direction":"desc","name":"dateModified"}}' \
  --compressed
*/

export const fetchBoard = (): Promise<string> => {
    return fetch(
        'https://api.air.inc/shorturl/bDkBvnzpB/boards/c74bbbc8-602b-4c88-be71-9e21b36b0514',
        {
            method: 'POST',
            headers: {
                'authority': 'api.air.inc',
                'accept': 'application/json',
                'content-type': 'application/json',
                'origin': 'https//app.air.inc',
                'referer': 'https//app.air.inc/',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
//                'authorization;' \
//                'x-air-board-context;' \
            },
        }
        )
    .then((response) => response.text())
    .then((body) => {
        console.log(body);
        return body;
    }); 
};
