import React from 'react';
import { TouchableOpacity } from 'react-native';
import ResponsiveImage from '@exponent/react-native-responsive-image';
import { shallow } from 'enzyme';
import BackButton from '../BackButton';
import mockery from 'mockery';
import sinon from 'sinon';

const IMAGE_SUBSTITUTE = {uri: 'back-arrow.png'};
const IMAGE_SUBSTITUTE2 = {uri: 'back-arrow@2x.png'};
const IMAGE_SUBSTITUTE3 = {uri: 'back-arrow@3x.png'};


describe('<BackButton/>', () => {
  before(() => {
    mockery.enable();
    mockery.registerMock('./img/back-arrow.png', IMAGE_SUBSTITUTE);
    mockery.registerMock('./img/back-arrow@2x.png', IMAGE_SUBSTITUTE2);
    mockery.registerMock('./img/back-arrow@3x.png', IMAGE_SUBSTITUTE3);
  });

  after(() => mockery.disable());

  it('should render', () => {
    const button = shallow(<BackButton callback={() => {}}/>);
    expect(button.find(TouchableOpacity)).to.have.length(1);
    expect(button.find(ResponsiveImage)).to.have.length(1);
  });

  it('should handle button presses', () => {
    const cb = sinon.spy();
    const button = shallow(<BackButton callback={cb} />);
    button.simulate('press');
    expect(cb.calledOnce).to.equal(true);
  });
});
