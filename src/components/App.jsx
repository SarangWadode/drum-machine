import React, { Component } from 'react'
import './App.css';
import Drumpad from './Drumpad';
import Display from './Display';

const keys = [
  {
    'class': 'drum-pad',
    'dataKey': '81',
    'text': 'Q',
    'sound': './sounds/Heater-1.mp3',
    'name': 'Heater 1'
  },
  {
    'class': 'drum-pad',
    'dataKey': '87',
    'text': 'W',
    'sound': './sounds/Heater-2.mp3',
    'name': 'Heater 2'
  },
  {
    'class': 'drum-pad',
    'dataKey': '69',
    'text': 'E',
    'sound': './sounds/Heater-3.mp3',
    'name': 'Heater 3'
  },
  {
    'class': 'drum-pad',
    'dataKey': '65',
    'text': 'A',
    'sound': './sounds/Heater-4_1.mp3',
    'name': 'Heater 4'
  },
  {
    'class': 'drum-pad',
    'dataKey': '83',
    'text': 'S',
    'sound': './sounds/Heater-6.mp3',
    'name': 'Clap'
  },
  {
    'class': 'drum-pad',
    'dataKey': '68',
    'text': 'D',
    'sound': './sounds/Dsc_Oh.mp3',
    'name': 'Open HH'
  },
  {
    'class': 'drum-pad',
    'dataKey': '90',
    'text': 'Z',
    'sound': './sounds/Kick_n_Hat.mp3',
    'name': 'Kick n\' Hat'
  },
  {
    'class': 'drum-pad',
    'dataKey': '88',
    'text': 'X',
    'sound': './sounds/RP4_KICK_1.mp3',
    'name': 'Kick'
  },
  {
    'class': 'drum-pad',
    'dataKey': '67',
    'text': 'C',
    'sound': './sounds/Cev_H2.mp3',
    'name': 'Closed HH'
  }
]

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: ''
    }
    this.handleKeypress = this.handleKeypress.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removeTransition = this.removeTransition.bind(this)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown',this.handleKeypress)
  }

  componentDidMount() {
    window.addEventListener('keydown',this.handleKeypress)
    window.addEventListener('transitionend',this.removeTransition)
  }
  
  handleKeypress(e) {
    const button = document.querySelector(`[data-key="${e.keyCode}"]`)
    if (button === null) {
      console.log('wrong drumpad key pressed')
      return
    }
    const audio = button.querySelector('audio')
    // console.log(audio)
    audio.currentTime = 0;
    audio.play()
    button.classList.add('playing')
    this.setState({
      display: button.name
    })
  }
  
  handleClick(e) {
    const button = e.target;
    const audio = button.querySelector('audio')
    button.classList.add('playing')
    // console.log(button)
    audio.play()
    // console.log(button.name)
    this.setState({
      display: button.name
    })
    button.addEventListener('transitionend',this.removeTransition)
  }

  removeTransition(e) {
    if (e.propertyName !== 'transform') {
      return
    }
    const buttons = document.querySelectorAll('.drum-pad')
    buttons.forEach(button => {
      button.classList.remove('playing')
    })
  }

  render() {
    return (
      <div className="App" id="drum-machine" >
        <div id="display">
          <Display name={this.state.display} />
        </div>
        <div id="buttons">
          {
            keys.map((key,id) => <Drumpad onClick={this.handleClick} className={key.class} dataKey={key.dataKey} text={key.text} sound={key.sound} key={id} name={key.name} />)
          }
        </div>
      </div>
    )
  }
}
