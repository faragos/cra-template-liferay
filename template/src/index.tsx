import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot, useRecoilState } from 'recoil'
import AppComponent from './components/AppComponent'
import LiferayParams from './types/LiferayParams'
import { liferayParamsState } from './store/atom'

function LiferayBootstrap(initialLiferayParams: LiferayParams) {
  const [, setLiferayParams] = useRecoilState(liferayParamsState)

  useEffect(() => {
    setLiferayParams(initialLiferayParams)
  })

  return (
      <AppComponent />
  )
}

export default function main(liferayParams: LiferayParams): void {
  ReactDOM.render(
      <React.StrictMode>
        <RecoilRoot>
          <LiferayBootstrap
              portletNamespace={liferayParams.portletNamespace}
              contextPath={liferayParams.contextPath}
              portletElementId={liferayParams.portletElementId}
              configuration={liferayParams.configuration}
          />
        </RecoilRoot>
      </React.StrictMode>,
      document.getElementById(liferayParams.portletElementId),
  )
}
