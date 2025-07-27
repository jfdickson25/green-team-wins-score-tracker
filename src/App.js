import React from 'react';
// Import useState and useEffect from React
import { useState, useEffect } from 'react';
// Import faTrash from the fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './index.css';


function App() {

    const [active, setActive] = useState('fill-in-the-blank');
    const [team, setTeam] = useState('green');

    const [fillInAnswer, setFillInAnswer] = useState('');
    const [bestOfThreeAnswer, setBestOfThreeAnswer] = useState('');
    const [thisOrThatAnswer, setThisOrThatAnswer] = useState('');
    const [score, setScore] = useState(0);

    return (
        <div className="App">
            <div id="score">
                <div id="minus" onClick={() => {
                    if(score > 0) {
                        setScore(score - 1)
                    }
                }}>
                    <FontAwesomeIcon icon={faMinus} className="fa-icon" />
                </div>
                <div id="score-number">{score}</div>
                <div id="plus" onClick={() => {
                    setScore(score + 1)
                }}>
                    <FontAwesomeIcon icon={faPlus} className="fa-icon" />
                </div>
            </div>
            {
                team === 'green' ? 
                    <img src={'images/green-team.jpg'} alt="green-team" className="team-image" onClick={() => { setTeam('orange') }} /> 
                    : <img src={'images/orange-team.jpg'} alt="orange-team" className="team-image" onClick={() => { setTeam('green') }} />
            }

            <div id="entry">
                { active === 'fill-in-the-blank' ?
                        <input type="text" placeholder="Fill in the blank" className='fill-in-blank-input' value={fillInAnswer} onChange={(e) => setFillInAnswer(e.target.value)} />
                    : active === 'best-of-three' ?
                        <div className='best-of-three-options'>
                            <div className={bestOfThreeAnswer === '1' ? 'active-best-of-three-option best-of-three-option': 'best-of-three-option'} onClick={() => setBestOfThreeAnswer('1')}>
                                1
                            </div>
                            <div className={bestOfThreeAnswer === '2' ? 'active-best-of-three-option best-of-three-option': 'best-of-three-option'} onClick={() => setBestOfThreeAnswer('2')}>
                                2
                            </div>
                            <div className={bestOfThreeAnswer === '3' ? 'active-best-of-three-option best-of-three-option': 'best-of-three-option'} onClick={() => setBestOfThreeAnswer('3')}>
                                3
                            </div>
                        </div>
                    : active === 'this-or-that' ?
                        <div className='this-or-that-options'>
                            <button className={thisOrThatAnswer === 'This' ? 'active-this-or-that-option this-or-that-option': 'this-or-that-option'} onClick={() => setThisOrThatAnswer('This')}>This</button>
                            <div id='OR'>OR</div>
                            <button className={thisOrThatAnswer === 'That' ? 'active-this-or-that-option this-or-that-option': 'this-or-that-option'} onClick={() => setThisOrThatAnswer('That')}>That</button>
                        </div>
                    : null
                
                }
            </div>
            
            <div id="types">
                <div 
                    className='type fill-in-blank'
                    style={{ opacity: active === 'fill-in-the-blank' ? 1 : 0.3 }}
                    onClick={() =>  {
                        setActive('fill-in-the-blank');
                        setBestOfThreeAnswer('');
                        setThisOrThatAnswer('');
                    }}
                >
                        Fill in Blank
                </div>
                <div 
                    className='type best-of-three'
                    style={{ opacity: active === 'best-of-three' ? 1 : 0.3 }}
                    onClick={() =>  {
                        setActive('best-of-three');
                        setFillInAnswer('');
                        setThisOrThatAnswer('');
                    }}
                >
                        Best of Three
                </div>
                <div 
                    className='type this-or-that'
                    style={{ opacity: active === 'this-or-that' ? 1 : 0.3 }}
                    onClick={() =>  {
                        setActive('this-or-that');
                        setFillInAnswer('');
                        setBestOfThreeAnswer('');
                    }}
                >
                        This or That
                </div>
            </div>
        </div>
    );
}

export default App;