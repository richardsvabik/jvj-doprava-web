export const resolver = (stories, link) => {
    if (!link || !link.linktype) {
        return typeof link === 'string' ? link : ''
    }
    switch (link.linktype) {
        case 'story':
            return stories[link.id]?.real_path + (link.anchor ? '#' + link.anchor : '') || ''
        case 'url':
        case 'asset':
            return link.url || ''
        case 'email':
            return 'mailto:' + link.email
        default:
            return ''
    }
}
