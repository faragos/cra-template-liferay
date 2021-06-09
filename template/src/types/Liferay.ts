export default interface Liferay {
  Language: LiferayLanguage
}

interface LiferayLanguage {
  get: (key: string | string[]) => string
}