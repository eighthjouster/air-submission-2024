
export type ClipType = {
    'ext': string
    'displayName': string
    'rotation': number
    'description': string
    'source': string
    'type': string
    'isDemo': boolean
    'title': string
    'importedName': string
    'version': number
    'duration': number
    'createdAt': Date
    'accountId': string
    'isDefault': boolean
    'size': number
    'recordedAt': Date
    'width': number
    'id': string
    'height': number
    'updatedAt': Date
    'status': string
    'assetId': string
    'workspaceId': string
    'hasOpenDiscussions': boolean
    'openDiscussionCount': number
    'assetVersionCount': number
    'bookmarked': boolean
    'resolution': number
    'boardCount': number
    'openCommentCount': number
    'pos': number
    'audio': boolean
    'remote': boolean
    'digitized': boolean
    'hash': string
    'synced': boolean
    'storageLocation': string
    'avatar': string
    'assets': {
        'video': string
        'previewVideo': string
        'seekVideo': string
        'image': string
        'original': string
    }
    'altResolutions': any[]
    'tags': any[]
    'permissions': {
        'canView': boolean
        'canDownload': boolean
        'canViewAssetVersions': boolean
        'canEditCustomFields': boolean
        'canDiscuss': boolean
    }
    'ownerName': string
    'ownerAvatar': string
    'owner': {
        'ownerName': string
        'ownerAvatar': string
    }
    'tagCount': number
}

export type AssetsResponseType = {
    total: number
    clips: ClipType[]
    pagination: any
}

export const fetchAssets = (): Promise<AssetsResponseType> => {
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
    .then((response) => response.json())
    .then((body) => {
        const mappedResponse = {
            total: body.data.total,
            clips: body.data.clips,
            pagination: body.data.pagination,
        };

        return mappedResponse;
    }); 
};
