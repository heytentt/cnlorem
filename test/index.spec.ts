import { describe, test } from 'vitest';
import newCnlorem from "../src/index";
import oldCnlorem from "../src/before";


describe('计算耗时', () => {
    // 计算耗时 时间超时，无法测试
    test('general 100 million words', () => {
        // 计算耗时
        const start = Date.now();
        oldCnlorem(1_000_000_00);
        const end = Date.now();
        console.log(`cnlorem(1000) 耗时：${end - start}ms`);
    })

    test('general 100 million words', () => {
        // 计算耗时 大约 6s（MacBook Pro (13-inch, 2020, Four Thunderbolt 2 ports)）
        const start = Date.now();
        newCnlorem(1_000_000_00);
        const end = Date.now();
        console.log(`cnlorem(1000) 耗时：${end - start}ms`);
    })
})
