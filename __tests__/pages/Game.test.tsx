import * as React from "react";
import { shallow } from "enzyme";

import { GamePage } from '../../src/pages/Game'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

it('Render GamePage', () => {
  const wrapper = shallow(<GamePage />)

  expect(wrapper).toMatchSnapshot()
})