// Write your code here
import './index.css'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card">
          <CryptocurrenciesList />
        </div>
      </div>
    )
  }
}
export default CryptocurrencyTracker
