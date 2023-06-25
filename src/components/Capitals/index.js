import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    isActiveCountry: countryAndCapitalsList[0].id,
  }

  // updateActiveId = (id) => {
  //     this.setState({isActiveCountry: id})
  // }

  onCapital = event => {
    this.setState({
      isActiveCountry: event.target.value,
    })
  }

  capitalChange = () => {
    const {isActiveCountry} = this.state
    const findActiveCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === isActiveCountry,
    )
    return findActiveCapital.country
  }

  render() {
    const {isActiveCountry} = this.state
    const country = this.capitalChange(isActiveCountry)
    // const {reqDetails} = countryAndCapitalsList[isActiveCountry]
    // capitalDisplayText   country
    return (
      <div className="main-con">
        <div className="inner-con">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="input-drop-down">
            <select
              className="select-card"
              onChange={this.onCapital}
              value={isActiveCountry}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  className="option-card"
                  key={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="text-card">is capital of which country?</p>
          </div>
          <p className="country-card">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
