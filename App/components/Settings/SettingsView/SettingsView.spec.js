import React from 'react';
import { shallow } from 'enzyme';
import SettingsView from '../SettingsView';
import FormContainer from '../../Common/FormContainer';
import FormItemLink from '../../Common/FormItemLink';
import P from '../../Common/P';

describe('<SettingsView />', () => {
  describe('Render correct <FormItemLink /> when showIdentityVerification is true', () => {
    const user = {
      cardConnected: false,
      cardNumberMask: '356999******0132',
      createdOn: 1478182810,
      email: 'kirsty+301@piggypot.com',
      firstName: 'Kirsty',
      id: 5,
      lastName: 'McCrystal',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciO'
    };
    const wrapper = shallow(
      <SettingsView
        user={user}
        dispatch={() => {}}
        showIdentityVerification
      />
    );
    it('should render at least 1 <FormContainer />', () => {
      expect(wrapper.find(FormContainer)).to.have.length.of.at.least(1);
    });

    it('should render at least 1 <FormItemLink />', () => {
      expect(wrapper.find(FormItemLink)).to.have.length.of.at.least(1);
    });

    it('should pass icon when Identity needs verified', () => {
      const findIconProp = wrapper.findWhere(n => n.prop('icon'));
      expect(findIconProp).to.be.lengthOf(1);
    });
  });

  describe('Render correct <FormItemLink /> when showIdentityVerification is false', () => {
    const user = {
      cardConnected: false,
      cardNumberMask: '356999******0132',
      createdOn: 1478182810,
      email: 'kirsty+301@piggypot.com',
      firstName: 'Kirsty',
      id: 5,
      lastName: 'McCrystal',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciO'
    };
    const wrapper = shallow(
      <SettingsView
        user={user}
        dispatch={() => {}}
        showIdentityVerification={false}
      />
    );

    const findIconProp = wrapper.findWhere(n => n.prop('icon'));

    it('Render with no icon', () => {
      expect(findIconProp).to.be.lengthOf(0);
    });
  });

  describe('Render correct logout details', () => {
    const user = {
      cardConnected: false,
      cardNumberMask: '356999******0132',
      createdOn: 1478182810,
      email: 'kirsty+301@piggypot.com',
      firstName: 'Kirsty',
      id: 5,
      lastName: 'McCrystal',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciO'
    };
    const wrapper = shallow(
      <SettingsView
        user={user}
        dispatch={() => {}}
        showIdentityVerification={false}
      />
    );
    it('should print out correct email address:', () => {
      expect(wrapper.find(P).children().contains(user.email));
    });
  });
});
