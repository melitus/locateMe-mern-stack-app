import * as React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import Students from './Student/Student';

enzyme.configure({ adapter: new Adapter() });
describe('<Students />', () => {
  it('should render students', () => {
    const wrapper = shallow(
      <Students />
   );
    expect(wrapper).toMatchSnapshot();
  });
});
