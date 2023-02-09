// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    console.log(updatedData)
    this.setState({cryptocurrenciesData: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesData, isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#ffffff" height={30} width={30} />
          </div>
        ) : (
          <div className="cryptocurrencies-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              className="crypto-currency-logo"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="cryptocurrencies-list-container">
              <div className="list-header">
                <p className="list-coin-type-heading">Coin Type</p>
                <div className="usd-and-euro-values-container">
                  <p className="list-coin-value-heading">USD</p>
                  <p className="list-coin-value-heading">EURO</p>
                </div>
              </div>
              <ul>
                {cryptocurrenciesData.map(eachData => (
                  <CryptocurrencyItem
                    key={eachData.id}
                    cryptocurrencyDetails={eachData}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
