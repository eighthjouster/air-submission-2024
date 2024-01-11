export const fetchAssets = (): Promise<string> => {
    const data = {
    'limit': 72,
    'type': 'all',
    'withOpenDiscussionStatus': true,
    'filters': {
        'board': {
            'is': 'c74bbbc8-602b-4c88-be71-9e21b36b0514'
        }
    },
    'boardId': 'c74bbbc8-602b-4c88-be71-9e21b36b0514',
    'sortField': {
        'direction': 'desc',
        'name': 'dateModified'
    },
    'descendantBoardId': 'c74bbbc8-602b-4c88-be71-9e21b36b0514',
    };

    return fetch(
        'https://api.air.inc/shorturl/bDkBvnzpB/clips/search',
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
            },
            body: JSON.stringify(data),
        }
        )
    .then((response) => response.text())
    .then((body) => {
        console.log(body);
        return body;
    }); 
};
