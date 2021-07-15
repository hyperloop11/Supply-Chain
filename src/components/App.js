import SupplyChain from '../abis/SupplyChain.json'
import React, { Component, useState } from 'react';
import Navbar from './Navbar'
import Main from './Main'
import Web3 from 'web3';
import './App.css';

//Declare IPFS

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    //console.log(web3)

    //Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    //Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = SupplyChain.networks[networkId]
    //IF got connection, get data from contracts
    if(networkData){
      //Assign contract
      const supplychain = new web3.eth.Contract(SupplyChain.abi, networkData.address)
      this.setState({supplychain})
     const sayhello = await supplychain.methods.sayHello().call()
      window.alert(sayhello)
      //Get files amount

      //Load files&sort by the newest

    //Else
      //alert Error
    }else{
      window.alert("SupplyC Chain not deployed to the detected network")
    }
  }

  // Get file from user
  captureFile = event => {
  }


  //Tester Function
  sayhello = description => {
     if(this.state.type === ''){
       this.setState({type: 'none'})
     }
    console.log('hi')


  }

  //Set states
  constructor(props) {
    super(props)
    this.state = {
      account :'',
      supplychain: null,
      city: '',
      country: '',
      latitude: '',
      longitude:'',
      location_arr:[],
    }

    //Bind functions
  }

  //another tester function
  momo = description => {
    console.log(description)
  }

  newItem = description => {
    var date_today = new Date().toLocaleDateString()
    this.state.supplychain.methods.newItem(description, date_today).send({from: this.state.account})
  }

  addState = description => {
    var jsonvariable, output_string;
    fetch(
      "https://geolocation-db.com/json/0fconsole.log(data)761a30-fe14-11e9-b59f-e53803842572"
    )
      .then(response => response.json())
      .then(function(myJson) {
        console.log(myJson.city);
        jsonvariable = myJson
        output_string = jsonvariable.city +' '+jsonvariable.country_name+ 'the end'
        console.log(output_string)

      })
      const self=this;
      setTimeout(function(){
        console.log(output_string)
       console.log(self.state.hello)
       self.state.supplychain.methods.addState(description,output_string ).send({from: self.state.account})
      }, 2000);
  }

  searchProduct = description => {
    // var ans = await this.state.supplychain.methods.searchProduct(description).call()
    // console.log(ans)
    const data = async ()  => {
      const got = await this.state.supplychain.methods.searchProduct(description).call();
      
      console.log(await got)
    }
    data()
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <Main
              sayHello={this.sayHello}
              newItem={this.newItem}
              addState={this.addState}
              searchProduct={this.searchProduct}
            />
      </div>
    );

  }
}

export default App;