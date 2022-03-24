import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
    let container;
    beforeEach(() => {
      container = mount(<Calculator/>)
    })

    it('1+4=5', () => {
        const buttonClear = container.find('#clear');

        const button1 = container.find('#number1');
        const buttonAdd = container.find('#operator_add');
        const button4 = container.find('#number4');
        const buttonEquals = container.find('#operator-equals')

        const runningTotal = container.find('#running-total');
        buttonClear.simulate('click');

        button1.simulate('click');
        buttonAdd.simulate('click');
        button4.simulate('click');
        buttonEquals.simulate('click');

        expect(runningTotal.text()).toEqual('5');
    })

    
    it('7-4=3', () => {
        const buttonClear = container.find('#clear');
        const button7 = container.find('#number7');
        const buttonSubstract = container.find('#operator-subtract');
        const button4 = container.find('#number4');
        const buttonEquals = container.find('#operator-equals')
        const runningTotal = container.find('#running-total');
        buttonClear.simulate('click');
        button7.simulate('click');
        buttonSubstract.simulate('click');
        button4.simulate('click');
        buttonEquals.simulate('click');

        expect(runningTotal.text()).toEqual('3');
    })


        
    it('3*5=15', () => {
        const buttonClear = container.find('#clear');
        const button3 = container.find('#number3');
        const buttonMultiply = container.find('#operator-multiply');
        const button5 = container.find('#number5');
        const buttonEquals = container.find('#operator-equals')
        const runningTotal = container.find('#running-total');
        buttonClear.simulate('click');
        button3.simulate('click');
        buttonMultiply.simulate('click');
        button5.simulate('click');
        buttonEquals.simulate('click');

        expect(runningTotal.text()).toEqual('15');
    })


    it('21/7=3', () => {
        const buttonClear = container.find('#clear');
        const button2 = container.find('#number2');
        const button1 = container.find('#number1');
        const buttonDivide = container.find('#operator-divide');
        const button7 = container.find('#number7');
        const buttonEquals = container.find('#operator-equals')
        const runningTotal = container.find('#running-total');
        buttonClear.simulate('click');
        button2.simulate('click');
        button1.simulate('click');
        buttonDivide.simulate('click');
        button7.simulate('click');
        buttonEquals.simulate('click');

        expect(runningTotal.text()).toEqual('3');
    })

    it('123=123', () => {
        const buttonClear = container.find('#clear');
        const button1 = container.find('#number1');
        const button2 = container.find('#number2');
        const button3 = container.find('#number3');
        const runningTotal = container.find('#running-total');
        buttonClear.simulate('click');
        button1.simulate('click');
        button2.simulate('click');
        button3.simulate('click');

        expect(runningTotal.text()).toEqual('123');
    })

    it('1+2-1*1=2', () => {
        const buttonClear = container.find('#clear');
        const button1 = container.find('#number1');
        const button2 = container.find('#number2');
        const buttonSubstract = container.find('#operator-subtract');
        const buttonAdd = container.find('#operator_add');
        const buttonMultiply = container.find('#operator-multiply');

        const buttonEquals = container.find('#operator-equals')

        const runningTotal = container.find('#running-total');
        buttonClear.simulate('click');
        button1.simulate('click');
        buttonAdd.simulate('click');
        button2.simulate('click');
        buttonSubstract.simulate('click');
        button1.simulate('click');
        buttonMultiply.simulate('click');
        button1.simulate('click');
        buttonEquals.simulate('click');

        expect(runningTotal.text()).toEqual('2');
    })

    it('add and then clear', () => {
        const buttonClear = container.find('#clear');

        const button1 = container.find('#number1');
        const buttonAdd = container.find('#operator_add');
        const button4 = container.find('#number4');
        const buttonEquals = container.find('#operator-equals')

        const runningTotal = container.find('#running-total');
        buttonClear.simulate('click');

        button1.simulate('click');
        buttonAdd.simulate('click');
        button4.simulate('click');
        buttonEquals.simulate('click');
        buttonClear.simulate('click')

        expect(runningTotal.text()).toEqual('0');
    })

})
  