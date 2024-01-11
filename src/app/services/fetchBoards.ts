
export type BoardType = {
    id?: string
    title?: string
    creatorId?: string
    workspaceId?: string
    parentId?: string
    description?: string
    createdAt?: Date,
    updatedAt?: Date,
    isDemo?: boolean,
    hierarchyUpdatedAt?: Date,
    hasCurrentUser?: boolean
    pos?: number,
    ancestors?: BoardType[]
    thumbnails?:string[]
    permissions?: {
      canViewClips?: boolean
      canContribute?: boolean
      canDownloadClips?: boolean
      canContributeAnon?: boolean
      canDiscuss?: boolean
      canViewAssetVersions?: boolean
      canEditCustomFields?: boolean
      canEditFormAssets?: boolean
    },
    customFields?: any[]
}

export type BoardResponseType = {
    list: BoardType[]
    pagination: any
    total: number
}

const fetchBoards = (): Promise<BoardResponseType> => {
    const data = {
        'ancestorCutoff': 'c74bbbc8-602b-4c88-be71-9e21b36b0514',
        'numThumbnails': 1,
        'sortBy': 'custom',
        'view': 'c74bbbc8-602b-4c88-be71-9e21b36b0514',
        'includeAncestors': true,
        'libraryBoards': 'ALL',
        'limit': 30,
        'cursor': null,
        'sortField': {
            'direction': 'desc',
            'name': 'dateModified'
        }
    };

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
            },
            body: JSON.stringify(data),
        }
        )
    .then((response) => response.json())
    .then((body) => {
        const mappedResponse = {
            list: body.data,
            pagination: body.pagination,
            total: body.total,
          };
    
        return mappedResponse;
    }); 
};

export default fetchBoards;
