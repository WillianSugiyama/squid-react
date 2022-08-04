import * as React from "react";
import { shallow } from "enzyme";

import { HomePage } from '../../src/pages/Home'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

it('Render HomePage', () => {
  const wrapper = shallow(<HomePage />)

  expect(wrapper).toMatchSnapshot()
})