import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'

// import axios from 'axios'

import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import SearchBeer from './../SearchFor/SearchFor'

import { beerIndex, searchBeer, randoBeer, oneBeer } from './../../api/beer.js'
// import { beerIndex } from './../../api/beer.js'

class BeerIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      beers: [],
      searchedFor: '',
      img: '',
      name: '',
      description: '',
      tagline: '',
      abv: '',
      foodPairing: [],
      ingredients: {},
      favorite: false
    }
  }

  handleChange = event => {
    event.persist()

    this.setState({ searchedFor: event.target.value })
  }

  handleSearchOne = (id, event) => {
    // const { searchFor } = this.state
    const { msgAlert } = this.props

    oneBeer(id)
      .then(res => {
        this.setState({ beers: res.data })
      })
      .then(() => msgAlert({
        message: 'Let\'s check it out!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          message: `Couldn't get the brews, because: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  // handleHome = event => {
  //   // const { msgAlert } = this.props
  //   // console.log('beerIndex happens now!')
  //   beerIndex()
  //     .then(res => {
  //       this.setState({ beers: res.data })
  //     })
  // }

  handleSubmitSearch = event => {
    event.preventDefault()
    event.target.reset()
    // console.log('tik!')

    const { searchedFor } = this.state
    // console.log('this is searchedFor before return', searchedFor)
    const { msgAlert } = this.props

    if (searchedFor === '') {
      randoBeer()
        .then(res => {
          // console.log('this is res after randoBeer', res)
          this.setState({ beers: res.data })
        })
        .then(() => msgAlert({
          message: 'Looks like you didn\'t search for anything, but thats ok! Here is a rondom beer for you to checkout!',
          variant: 'success'
        }))
        .catch(error => {
          msgAlert({
            message: `Couldn't get the brews, because: ${error.message}`,
            variant: 'danger'
          })
        })
    } else {
      searchBeer(searchedFor)
        .then(res => {
          this.setState({ beers: res.data })
        })
        .then(() => msgAlert({
          message: 'Let\'s check it out!',
          variant: 'success'
        }))
        .catch(error => {
          msgAlert({
            message: `Couldn't get the brews, because: ${error.message}`,
            variant: 'danger'
          })
        })
    }
  }

  componentDidMount () {
    const { msgAlert } = this.props
    // console.log('beerIndex happens now!')
    beerIndex()
      .then(res => {
        this.setState({ beers: res.data })
      })
      .then(() => msgAlert({
        message: 'Welcome to Beans Love Beer!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          message: `Couldn't get the brews, because: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    const { beers } = this.state
    // const { msgAlert, user } = this.props
    let brewSearch
    let beerJsx

    // console.log('this is beers', beers)

    if (beers.length === 1) {
      beerJsx = beers.map(beer => (
        <Card key={beer.id} onClick={(event) => {
          this.handleSearchOne(beer.id, event)
        }}
        style={{ borderRadius: '7px', boxShadow: ' -.3px .5px 0px .5px grey', display: 'flex', marginLeft: '5px', marginRight: '5px', marginBottom: '20px', padding: '10px', width: '800px' }} >
          <Card.Body className="card-body" style={{ display: 'flex', flexDirection: 'row', overflow: 'auto' }}>
            <div>
              <Card.Img src={beer.image_url} style={{ height: '260px', width: '140px' }} alt='image of the selected beer'/>
            </div>
            <div style={{ margin: '30px' }}>
              <Card.Title style={{ fontSize: '30px' }}>{beer.name}</Card.Title>
              <Card.Text style={{ fontStyle: 'italic', fontSize: '15px' }}>&#34;{beer.tagline}&#34;</Card.Text>
              <Card.Text><strong>Abv:</strong> {beer.abv}%</Card.Text>
              <Card.Text>
                {beer.description}
              </Card.Text>
              <Card.Text style={{ fontSize: '15px' }}><strong>Try Pairing this brew with:</strong><br/> {beer.food_pairing.join(', ')}!</Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))
    } else {
      beerJsx = beers.map(beer => (
        <Card key={beer.id}
          onClick={(event) => {
            this.handleSearchOne(beer.id, event)
          }}
          style={{ borderRadius: '7px', boxShadow: ' -.3px .5px 0px .5px grey', display: 'flex', height: '240px', marginLeft: '5px', marginRight: '5px', marginBottom: '20px', padding: '10px', width: '400px' }} >
          <Card.Body className="card-body" style={{ display: 'flex', flexDirection: 'row', overflow: 'auto' }}>
            <div>
              <Card.Img src={beer.image_url} style={{ height: '160px', width: '70px' }} alt='image of the selected beer'/>
            </div>
            <div style={{ margin: '30px' }}>
              <Card.Title style={{ fontSize: '25px' }}>{beer.name}</Card.Title>
              <Card.Text>
                {beer.description}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))
    }

    if (!beers) {
      brewSearch = 'Loading...'
    } else {
      brewSearch = (
        <div style={{ marginTop: '50px', marginBottom: '5px', display: 'flex', justifyContent: 'center' }}>
          <Form onSubmit={this.handleSubmitSearch} style={{ display: 'flex', flexDirection: 'row' }}>
            <Form.Group controlId="formBasicTitle">
              <Form.Control
                style={{ border: '1px solid #ebebeb', borderStyle: 'inset', fontSize: '25px', height: '55px', marginLeft: '150px', width: '650px' }}
                type="text"
                name="search"
                placeholder="Search for beer..."
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button style={{ fontSize: '20px', height: '55px', marginRight: '150px', width: '100px' }} variant="secondary" type="submit">
              Search
            </Button>
          </Form>
        </div>
      )
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: '10px' }}>
        {brewSearch}
        {beerJsx}
      </div>
    )
  }
}

export default BeerIndex
