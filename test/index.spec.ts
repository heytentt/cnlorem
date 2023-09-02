import { describe, test } from 'vitest';
import cnlorem from "../index";


describe('计算耗时', () => {
    test('happy path', () => {
        console.log(cnlorem());
    })

    test('general 9 words (less than 10)', () => {
        const start = Date.now();
        console.log(cnlorem(9));
        const end = Date.now();
        console.log(`cnlorem(10) 耗时：${end - start}ms`);
    })

    test('general 12 words (not base 10)', () => {
        const start = Date.now();
        console.log(cnlorem(12));
        const end = Date.now();
        console.log(`cnlorem(10) 耗时：${end - start}ms`);
    })

    test('general 100 words', () => {
        const start = Date.now();
        console.log(cnlorem(100));
        const end = Date.now();
        console.log(`cnlorem(100) 耗时：${end - start}ms`);
    })

    test.skip('general 100 million words', () => {
        // 计算耗时 大约 6s（MacBook Pro (13-inch, 2020, Four Thunderbolt 2 ports)）
        const start = Date.now();
        cnlorem(1_000_000_00);
        const end = Date.now();
        console.log(`cnlorem(1_000_000_00) 耗时：${end - start}ms`);
    })

    test('cnlorem(20)', () => {
        console.log(cnlorem(20))
    })

    test('cn+en', () => {
        console.log(cnlorem({n: 50, en: 3}))
    })
})
