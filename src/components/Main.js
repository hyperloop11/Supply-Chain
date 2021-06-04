import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account :'',
      supplychain: null
    }

    //Bind functions
  }

  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <h1>Agistic: Blockcahin based inventory management</h1>
              <p>&nbsp;</p>
              {/* Create Table*/}
                  <h1>Add new item</h1>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.nameDescription.value
                    this.props.newItem(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="nameDescription"
                            type="text"
                            ref={(input) => { this.nameDescription = input }}
                            className="form-control text-monospace"
                            placeholder="name of product..."
                            required />
                      </div>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
                  <h1>Search product</h1>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.searchPdtDescription.value
                    this.props.searchProduct(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="searchPdtDescription"
                            type="text"
                            ref={(input) => { this.searchPdtDescription = input }}
                            className="form-control text-monospace"
                            placeholder="Product ID"
                            required />
                      </div>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
                  <h1>Scan shipment</h1>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.addStateDescription.value
                    this.props.addState(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="addStateDescription"
                            type="text"
                            ref={(input) => { this.addStateDescription = input }}
                            className="form-control text-monospace"
                            placeholder="Product ID"
                            required />
                      </div>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;