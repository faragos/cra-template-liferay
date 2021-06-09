import { atom } from 'recoil'

export const defaultLiferayParams = {
  portletElementId: '', contextPath: '', portletNamespace: '', configuration: {system: {}, portletInstance: {}},
}

export const liferayParamsState = atom({
  key: 'liferayParamsState',
  default: defaultLiferayParams,
})
