import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../components/loginPage';
import { MemoryRouter } from 'react-router-dom';
import configureStore from '../../store/configureStore';
const store = configureStore();

test('should be LoginPage page', () => {
    const wrapper = shallow(<MemoryRouter><LoginPage /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLoginSpy = jest.fn();
    const wrapper = shallow(<LoginPage store={store} startLoginGoogle={startLoginSpy}/>);
    console.log(wrapper.debug())
    wrapper.find({ name: "button_google"}).simulate('click');
    expect(startLoginSpy).toHaveBeenCalled(); //check si fonction appeler
})