export type ColorVariables =
  | '--color-white'
  | '--color-black'
  | '--color-red'
  | '--color-turquoise'
  | '--color-gray'
  | '--color-light-gray'
  | '--color-very-light-gray'
  | '--color-text-dark-red'
  | '--color-text-blue'
  | '--color-text-light-green'

export type Colors = {
  [K in ColorVariables]: string
}

// Тип для использования без префикса '--color-'
export type ColorNames = ColorVariables extends `--color-${infer Name}` ? Name : never