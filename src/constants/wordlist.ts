import { CONFIG } from './config'

export const WORDS = [
'dhotră',
'thombe',
'yousă',
'woile',
'răgsă',
'răksă',
'barmă',
'uluma',
'nembo',
'nhute',
'nyute',
'năŋăi',
'kyără',
'serbă',
'nipsă',
'năleŋ',
'kelsă',
'ăkădu',
'ăkole',
'mesek',
'lăŋgă',
'ăŋliŋ',
'ăjime',
'ăthina',
'ănaka',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
