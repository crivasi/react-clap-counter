/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const SayHi = (props) => (
    <div className="presentational">
        <p className="type-component">Presentational</p>
        <h1>
            Hola {props.nombre}, soy un componente pasado como child de otro
        </h1>
    </div>
);
const SayOk = (props) => (
    <div className="presentational">
        <p className="type-component">Presentational</p>
        <h1>
            Componente para mostrar que se puede pasar un componente por props
        </h1>
    </div>
);

/* class SayOk extends Component {
    render() {
        return (
            <h1 className="presentational">
                Hola, soy un componente de presentación y es para mostrar
                que se puede pasar un componente con props 
            </h1>
        );
    }
} */

class ClapCounter extends Component {

    constructor() {
        super();
        this.state = { claps: 0 };
        this.countClaps = this.countClaps.bind(this); // es necesario este bind para asignarle el contexto a countClaps
    }

    countClaps() {
        this.setState(prevState =>
            ({
                claps: prevState.claps + 1
            })
        )
    }

    render() {
        return (
            <div className="container">
                <p className="type-component">Container</p>
                <h1>Componente contenedor Clap Counter</h1>
                <button
                    /* onClick={() => 
                    this.setState(prevState => ({ claps:prevState.claps + 1 
                    }))} */
                    className="boton"
                    onClick={this.countClaps}
                >
                    {this.state.claps} 👏
                </button>
                {this.state.claps === 0 && (
                    <p> Se el primero en aplaudir</p>
                )}
                {this.props.children}
                <this.props.component/>
            </div>
        )
    }
}

ReactDOM.render(
    <ClapCounter component={SayOk}>
        <SayHi nombre="tú"/>
        Hola de nuevo, soy un texto que se muestra con props.children!
    </ClapCounter>, 
    document.getElementById('root')
);