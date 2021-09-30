import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation';
import FaceRecognition from './components/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm';
import Logo from './components/Logo';
import './App.css';
import SignIn from './components/SignIn/signin';
import Register from './components/Register/register'

const app = new Clarifai.App({
  apiKey: '2338f9e217e24877bd2d915e44080bf9'
})

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageURL:'',
      box:'',
      route:'signin'
    }
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width , height);
    return{
      left_col: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  OnRouteChange = (route1) =>{
    this.setState({route:route1});
  }

  DisplayBox = (box) =>{
    console.log(box);
    this.setState({box: box})
  } 
  onInputChange = (eve1) => {
    this.setState({input: eve1.target.value});
  }
  onDetectSubmit = () =>{
    this.setState({imageURL: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL , this.state.input)
      .then(response => this.DisplayBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
    
  }
  render(){
    return (
      <div className="App">
        <Navigation routeChange = { this.OnRouteChange}/>

        { 
            this.state.route === 'home' ?
                <div>
                <Logo/>
                <ImageLinkForm 
                inputChange = {this.onInputChange} 
                onSubmit = {this.onDetectSubmit}
                />
                <FaceRecognition box = { this.state.box} imageURL={this.state.imageURL}/>

                </div>
            :(this.state.route === 'signin' ? <SignIn routeChange = {this.OnRouteChange}/> 
              : <Register routeChange={this.OnRouteChange}/>) 
        
        
        }
  
      </div>
    );
  }
}
  

export default App;
