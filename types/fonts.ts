export type FontFamilies =
  | 'Cinematografica'
  | 'Rabbits Elf'
  | 'UA Brand'

export type FontWeights = {
  'Cinematografica': 100 | 300 | 400 | 700 | 900;
  'Rabbits Elf': 400;
  'UA Brand': 400 | 700 | 900;
}

export type FontWeight<T extends FontFamilies> = FontWeights[T]