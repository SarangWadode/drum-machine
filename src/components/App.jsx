import React, { Component } from 'react'
import './App.css';
import Drumpad from './Drumpad';

const keys = [
  {
    'class': 'drum-pad',
    'dataKey': '81',
    'text': 'Q',
    'sound': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    'class': 'drum-pad',
    'dataKey': '87',
    'text': 'W',
    'sound': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    'class': 'drum-pad',
    'dataKey': '69',
    'text': 'E',
    'sound': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    'class': 'drum-pad',
    'dataKey': '65',
    'text': 'A',
    'sound': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    'class': 'drum-pad',
    'dataKey': '83',
    'text': 'S',
    'sound': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    'class': 'drum-pad',
    'dataKey': '68',
    'text': 'D',
    'sound': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    'class': 'drum-pad',
    'dataKey': '90',
    'text': 'Z',
    'sound': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    'class': 'drum-pad',
    'dataKey': '88',
    'text': 'X',
    'sound': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    'class': 'drum-pad',
    'dataKey': '67',
    'text': 'C',
    'sound': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

export default class App extends Component {
  componentDidMount() {
    window.addEventListener('keydown',(e) => {
      const button = document.querySelector(`[data-key="${e.keyCode}"]`)
      console.log(button);
      if (button === null) {
        console.log('wrong drumpad key pressed')
        return
      }
      const audio = button.querySelector('audio')
      console.log(audio)
      audio.play()
    })
  }

  handleClick(e) {
    const button = e.target;
    const audio = button.querySelector('audio')
    console.log(audio)
    audio.play()
  }

  render() {
    return (
      <div className="App" id="drum-machine" >
        <div id="display">
          <p>this is a display element</p>
        </div>
        <div id="buttons">
          {
            keys.map((key,id) => <Drumpad onClick={this.handleClick} className={key.class} dataKey={key.dataKey} text={key.text} sound={key.sound} key={id} />)
          }
        </div>
      </div>
    )
  }
}
