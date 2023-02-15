function newIdRecommend(new_id) {
    let rec_id = new_id
    rec_id = rec_id
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15)
        .replace(/\.$/, '');
    return rec_id.length > 2
        ? rec_id
        : rec_id + rec_id[rec_id.length - 1].repeat(3 - rec_id.length);
}
