let seed = Date.now();

export function random_int(max) {
    seed ^= seed << 13;
    seed ^= seed >> 17;
    seed ^= seed << 5;
    return Math.floor((seed % max + max) % max);
    // return Math.floor(Math.random() * (max + 1));
}

export function random_pick(seqs) {
    return seqs[random_int(seqs.length)];
}

export function random_permutation(array: any[]): any[] {
    for (let i = array.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}