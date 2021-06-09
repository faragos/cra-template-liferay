import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { liferayParamsState } from '../store/atom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const Liferay: any

const Title = styled.h1`
    font-size: 32px;
  `

const AppComponent: React.FC = () => {
  const [liferayParams] = useRecoilState(liferayParamsState)
  const {
    portletNamespace, contextPath, portletElementId, configuration,
  } = liferayParams

  return (
      <div>
      <Title>Example</Title>
      <div>
        <span className="tag">
          {Liferay.Language.get('portlet-namespace')}
          :
        </span>
        <span className="value">{portletNamespace}</span>
      </div>
      <div>
        <span className="tag">
          {Liferay.Language.get('context-path')}
          :
        </span>
        <span className="value">{contextPath}</span>
      </div>
      <div>
        <span className="tag">
          {Liferay.Language.get('portlet-element-id')}
          :
        </span>
        <span className="value">{portletElementId}</span>
      </div>
      <div>
        <span className="tag">
          {Liferay.Language.get('configuration')}
          :
        </span>
        <span className="value pre">
          {JSON.stringify(configuration, null, 2)}
        </span>
      </div>
    </div>
  )
}

export default AppComponent
