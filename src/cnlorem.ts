
import { hans_140, hans_141_232, hans_233_380, hans_382_500, cn_puncs, en_puncs, en_words } from './constant';
import { random_int, random_pick, random_permutation } from './rand';

export interface Options {
    /**
     * 汉字个数
     */
    n: number
    /**
     * 英语单词个数
     */
    en?: number
    // /**
    //  * 是否可读
    //  */
    // readable?: boolean
}


export function cnlorem(a?: number | Options): string {
    if (a == undefined) {
        a = 20
    }
    if (typeof a == 'number') {
        a = { n: a }
    }

    a.en = a.en == undefined ? 0 : a.en
    // a.readable = a.readable == undefined ? false : a.readable

    // if (a.readable) {

    // }

    return random_words(a).join('');
}

function random_words(opt: Options): string[] {
    const hans = random_hans(opt.n);
    const ens = random_ens(opt.en);

    const words = random_permutation(hans.concat(ens));

    return insert_puncs(words, opt.n > opt.en ? true : false)
}

function random_hans(n: number): string[] {
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(random_han());
    return arr;
}

function random_han() {
    const r = random_int(75);
    if (r < 50) return random_pick(hans_140);
    if (r < 60) return random_pick(hans_141_232);
    if (r < 70) return random_pick(hans_233_380);
    return random_pick(hans_382_500);
}

function random_ens(n: number): string[] {
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(random_pick(en_words));
    return arr;
}

function random_punctuations(cn: number, en: number): string[] {
    if (cn > en) {
        return random_cn_puncs(Math.floor((cn + en) * 0.05))
    }
    return random_en_puncs(Math.floor((cn + en) * 0.1))
}

function random_punc(cn: boolean): string {
    if (cn) return random_pick(cn_puncs);
    return random_pick(en_puncs);
}

function random_cn_puncs(n: number): string[] {
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(random_pick(cn_puncs));
    return arr;
}

function random_en_puncs(n: number): string[] {
    const arr = [];
    for (let i = 0; i < n; i++) arr.push(random_pick(en_puncs));
    return arr;
}

function insert_puncs(words: string[], cn: boolean): string[] {
    const arr = [];
    let words_after_last_punc = 0;
    let puncs_num = 0;
    for (let i = 0; i < words.length; i++) {
        arr.push(words[i]);
        words_after_last_punc++;
        if (
            words_after_last_punc > 5
            && puncs_num / i < 0.1
            && random_int(10) < 2
            && i < words.length - 5
        ) {
            arr.push(random_punc(cn))
            puncs_num++
            words_after_last_punc = 0
        }
    }
    if (words.length > 10) arr.push(cn ? '。' : '.')
    return arr;
}