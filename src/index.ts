
// 最常用的 500 个字
// 占比：50%
const hans_140 = '的一是了我不人在他有这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好看起发当没成只如事把还用第样道想作种开美总从无情己面最女但现前些所同日手又行意动方期它头经长儿回位分爱老因很给名法间斯知世什两次使身者被高已亲其进此话常与活正感';
// 占比：10%
const hans_141_232 = '见明问力理尔点文几定本公特做外孩相西果走将月十实向声车全信重三机工物气每并别真打太新比才便夫再书部水像眼等体却加电主界门利海受听表德少克代员许稜先口由死安写性马光白或住难望教命花结乐色';
// 占比：10%
const hans_233_380 = '更拉东神记处让母父应直字场平报友关放至张认接告入笑内英军候民岁往何度山觉路带万男边风解叫任金快原吃妈变通师立象数四失满战远格士音轻目条呢病始达深完今提求清王化空业思切怎非找片罗钱紶吗语元喜曾离飞科言干流欢约各即指合反题必该论交终林请医晚制球决窢传画保读运及则房早院量苦火布品近坐产答星精视五连司巴';
// 占比：5%
const hans_382_500 = '奇管类未朋且婚台夜青北队久乎越观落尽形影红爸百令周吧识步希亚术留市半热送兴造谈容极随演收首根讲整式取照办强石古华諣拿计您装似足双妻尼转诉米称丽客南领节衣站黑刻统断福城故历惊脸选包紧争另建维绝树系伤示愿持千史谁准联妇纪基买志静阿诗独复痛消社算';

const dots = ['，', '，', '，', '，', '。', '。', '；', '、']

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function random(hans) {
    return hans[randomInt(hans.length)];
}

function one() {
    const r = randomInt(75);
    if (r < 50) return random(hans_140);
    if (r < 60) return random(hans_141_232);
    if (r < 70) return random(hans_233_380);
    return random(hans_382_500);
}

function dot(hansAfterLastDot, left) {
    if (left <= 1) return '。';
    if (left <= 10) return;
    if (hansAfterLastDot > 5 && Math.random() < 0.1) return random(dots);
    if (hansAfterLastDot > 20) return random(dots);
}

// 随机生成 n 个汉字
function cnlorem(n: number = 50): string {
    let s = '';
    let hansAfterLastDot = 0;
    for (let i = 0; i < n; i++) {
        s += one();
        hansAfterLastDot++;
        const d = dot(hansAfterLastDot, n - i);
        if (d) {
            hansAfterLastDot = 0;
            s += d;
        }
    }
    return s;
}

export default cnlorem;