import React from 'react';
import {UserElement} from '../../../messaging';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<UserElement idUser = {0}></UserElement>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});



// describe('UserElement', () => {
//   it('renders correctly', () => {
//     const wrapper = shallow(<UserElement />);
//     expect(wrapper).toMatchSnapshot();
//     // On the first run of this test, Jest will generate a snapshot file automatically.
//   });
// });