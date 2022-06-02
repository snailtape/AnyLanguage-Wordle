import { CONFIG } from './config'

export const ORTHOGRAPHY = [
'kh',  
'k',
'gh',
'g',
'ŋ',
'ch',
'c',
'jh',
'j',
'ṭh',
'ṭ',
'ḍh',
'ḍ',
'ṇ',
'th',
't',
'dh',
'd',
'n',
'ph',
'p',
'bh',
'b',
'm',
'y',
'r',
'l',
'w',
'ś',
'ṣ',
's',
'h',
"p'",
's',
'h',
'ă',
'ai',
'au',
'i',
'u',
'e',
'o',
'a',
'r̥',
'ʔ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
