import React, { Component } from 'react'
import './Banner.css';
import Button from 'react-bootstrap/Button';

export class banner extends Component {

    componentDidMount = () => {
        document.querySelector('.input-box-user-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.validate();
                e.preventDefault(); 
            }
        });
    }

    placeholderFun = () => {
        let placeholderBox = document.querySelector('.input-box-placeholder');
        let inputBox = document.querySelector('.input-box-user-input');
        // Inefficient method but does the job
        if (inputBox.textContent === 'Anime name?') {
            inputBox.textContent = null;
        }
        if (!inputBox.textContent && !placeholderBox.textContent) {
            placeholderBox.textContent = "Anime name";
            inputBox.textContent = '';
            inputBox.classList.add('searched-anime'); 
        }
    }

    disableFun = () => {
        let inputBox = document.querySelector('.input-box-user-input');
        if (!inputBox.textContent) {
            inputBox.textContent = 'Anime name?';
            inputBox.classList.remove('searched-anime');
            let placeholderBox = document.querySelector('.input-box-placeholder');
            placeholderBox.textContent = null;
        }
    }

    validate = () => {
        let inputBox = document.querySelector('.input-box-user-input')
        // Since the API is trash and returns some value even when there's a meaningless key we are inserting a invalid param to get no response when box is empty
        let param = inputBox.textContent && inputBox.textContent !== 'Anime name?' ? inputBox.textContent : 'asdaDaFSaasdadasd';
        inputBox.blur();
        this.props.getData(param);
    }

    resetState = () => {
        let placeholderBox = document.querySelector('.input-box-placeholder');
        let inputBox = document.querySelector('.input-box-user-input');
        inputBox.textContent = 'Anime name?';
        if (inputBox.classList.contains('searched-anime')) {
            inputBox.classList.remove('searched-anime');
        }
        placeholderBox.textContent = null;
        this.props.clearState();
    }

    render() {
        return (
            <div>
                <div className="banner-container">
                    <h1 className="header-text" onClick={this.resetState}>anime.io</h1>
                    <div className="image-overflow">
                        <img className="img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28402147-92a1-4060-be7f-0444dbae3bf8/dbhehvt-db573295-0c15-47b1-b271-cffb86b6f241.jpg/v1/fill/w_1024,h_640,q_75,strp/anime_collage_wallpaper_by_dinocojv_d8ayeyz_by_sayaky946_dbhehvt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NDAiLCJwYXRoIjoiXC9mXC8yODQwMjE0Ny05MmExLTQwNjAtYmU3Zi0wNDQ0ZGJhZTNiZjhcL2RiaGVodnQtZGI1NzMyOTUtMGMxNS00N2IxLWIyNzEtY2ZmYjg2YjZmMjQxLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YfI-xtIaFkPSvZrIAQu4ZOK6O3o6MIcyAnllwBb_cnk"></img>
                    </div>
                    <div className="search-box">
                        <h1>For weebs, by a weeb!</h1>
                        <div className="main-input-box">
                            <div className="input-box-placeholder">
                            </div>
                            <div className="input-box-user-input placeholder" contentEditable="true" onClick={this.placeholderFun} onBlur={this.disableFun}>
                                Anime name?
                            </div>
                        </div>

                        {/* Not needed since I automatically scroll to result div now*/}
                        {/* { this.props.response.length > 0? <div className="scroll">Scroll down to see results!</div> : null}
                        { !this.props.status ? <div className="error-toaster">Invalid name</div> : null} */}

                        { !this.props.status ? <div className="scroll">Invalid name</div> : null}
                        <Button className="button" size="lg" onClick={this.validate}>Search</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default banner
