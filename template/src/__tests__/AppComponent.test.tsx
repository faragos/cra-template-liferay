/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import * as React from 'react'
import AppComponent from '../components/AppComponent'
import { MutableSnapshot, RecoilRoot } from 'recoil'
import { defaultLiferayParams, liferayParamsState } from '../store/atom'
import Liferay from '../types/Liferay'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      Liferay: Liferay
    }
  }
}

beforeAll(() => {
  global.Liferay = {
    Language: {
      get: (key: string) => key,
    },
  }
  const initializeState = ({set}: MutableSnapshot) => {
    set(liferayParamsState, defaultLiferayParams)
  }
  render(<RecoilRoot initializeState={initializeState}><AppComponent /></RecoilRoot>)
})

test('render App Component', async () => {
  expect(await screen.findByText(/Example/i)).toBeInTheDocument()
})

test('render App Component', async () => {
  expect(await screen.queryByText(/Example2/i)).not.toBeInTheDocument()
})
