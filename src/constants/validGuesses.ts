import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
