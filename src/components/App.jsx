import './App.css';
import Drumpad from './Drumpad';

const keys = [
  {
    'class': 'drum-pad',
    'data-key': '81',
    'text': 'Q'
  },
  {
    'class': 'drum-pad',
    'data-key': '87',
    'text': 'W'
  },
  {
    'class': 'drum-pad',
    'data-key': '69',
    'text': 'E'
  },
  {
    'class': 'drum-pad',
    'data-key': '65',
    'text': 'E'
  },
  {
    'class': 'drum-pad',
    'data-key': '83',
    'text': 'S'
  },
  {
    'class': 'drum-pad',
    'data-key': '68',
    'text': 'D'
  },
  {
    'class': 'drum-pad',
    'data-key': '90',
    'text': 'Z'
  },
  {
    'class': 'drum-pad',
    'data-key': '88',
    'text': 'X'
  },
  {
    'class': 'drum-pad',
    'data-key': '67',
    'text': 'C'
  }
]

function App() {
  window.addEventListener('keydown',(e) => 
  console.log(e.keyCode)
  )

  return (
    <div className="App" id="drum-machine" >
      <div id="display">
        <p>this is a display element</p>
      </div>
      {
        keys.map((key,id) => <Drumpad class={key.class} date-key={key.data-key} text={key.text} key={id} />)
      }
    </div>
  );
}

export default App;
