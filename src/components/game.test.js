import React from 'react';
import {shallow} from 'enzyme';
import Game from './game';

const testData = require('./test-data');

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('should restart game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({testData});
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('auralStatus')).toEqual('');
        expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
        expect(wrapper.state('correctAnswer')).toBeLessThan(101);
    })

    it('cannot make guess because invalid number', () => {
        const guess = 'number'
        const wrapper = shallow(<Game />);
        wrapper.instance().makeGuess(guess);
        expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
    })

    it('ice cold, cold, warm, and hot guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({testData});
        wrapper.setState({
            guesses: [],
            feedback: testData.feedback,
            auralStatus: testData.auralStatus,
            correctAnswer: testData.correctAnswer
        });

        wrapper.instance().makeGuess(testData.iceColdGuess);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
        expect(wrapper.state('guesses')).toEqual([testData.iceColdGuess]);

        wrapper.instance().makeGuess(testData.coldGuess);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
        expect(wrapper.state('guesses')).toEqual([testData.iceColdGuess, testData.coldGuess]);

        wrapper.instance().makeGuess(testData.warmGuess);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
        expect(wrapper.state('guesses')).toEqual([testData.iceColdGuess, testData.coldGuess, testData.warmGuess]);

        wrapper.instance().makeGuess(testData.hotGuess);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
        expect(wrapper.state('guesses')).toEqual([testData.iceColdGuess, testData.coldGuess, testData.warmGuess, testData.hotGuess]);

        wrapper.instance().makeGuess(testData.correctAnswer);
        expect(wrapper.state('feedback')).toEqual('You got it!');
        expect(wrapper.state('guesses')).toEqual([testData.iceColdGuess, testData.coldGuess, testData.warmGuess, testData.hotGuess, testData.correctAnswer]);
    })

    it('can generate aural update', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({testData});
        wrapper.setState({
            guesses: [],
            feedback: testData.feedback,
            auralStatus: testData.auralStatus,
            correctAnswer: testData.correctAnswer
        });
        testData.guesses.forEach(guess => {
            wrapper.instance().makeGuess(guess);
        })
        wrapper.instance().generateAuralUpdate();
        expect(wrapper.state('auralStatus')).toEqual(`Here\'s the status of the game right now: ${testData.feedback} You\'ve made ${testData.guesses.length} guesses. In order of most- to least-recent, they are: ${testData.guesses.reverse().join(', ')}`);
    })
});