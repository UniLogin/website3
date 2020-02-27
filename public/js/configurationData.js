export const ts_ethers_metamask_unilogin = `
import ULIFrameProvider from '@unilogin/provider'
import { providers, utils } from 'ethers'

const provider = new providers.Web3Provider(ULIFrameProvider.createPicker(window.ethereum))
const signer = provider.getSigner()
const transaction = await signer.sendTransaction({
  to: '0xF80fd6F5eF91230805508bB28d75248024E50F6F',
  value: utils.parseEther('0.003'),
})
`
export const ts_web3_metamask_unilogin = `
import ULIFrameProvider from '@unilogin/provider'
import Web3 from 'web3'

const web3 = new Web3(ULIFrameProvider.createPicker(window.ethereum))
const [account] = await web3.eth.getAccounts()
const tx = await web3.eth.sendTransaction({
  from: account,
  to: '0xF80fd6F5eF91230805508bB28d75248024E50F6F',
  value: web3.utils.toWei('0.003'),
})
`
export const ts_ethers_unilogin = `
import UniLogin from ‘@unilogin/provider’
import {providers, utils} from ‘ethers’

const provider = new providers.Web3Provider(UniLogin.create(‘mainnet’))
const signer = provider.getSigner()
const transaction = await signer.sendTransaction({
  to: ‘0xF80fd6F5eF91230805508bB28d75248024E50F6F’,
  value: utils.parseEther(‘0.003’),
})
`

export const ts_web3_unilogin = `
import UniLogin from '@unilogin/provider'
import web3 from 'web3'

const web3 = new Web3()
const [account] = await web3.eth.getAccounts(UniLogin.create('mainnet'))
const tx = await web3.eth.sendTransaction({
  from: account,
  to: '0xF80fd6F5eF91230805508bB28d75248024E50F6F',
  value: web3.utils.toWei('0.003'),
})
`

export const js_ethers_metamask_unilogin = `
const ULIFrameProvider = require('@unilogin/provider')
const { providers, utils } = require('ethers')

const provider = new providers.Web3Provider(ULIFrameProvider.createPicker(window.ethereum))
const signer = provider.getSigner()
signer.sendTransaction({
  to: '0xF80fd6F5eF91230805508bB28d75248024E50F6F',
  value: utils.parseEther('0.003'),
}).then(console.log)
`

export const js_web3_metamask_unilogin = `
const ULIFrameProvider = require('@unilogin/provider')
const Web3 = require('web3')

const web3 = new Web3(ULIFrameProvider.createPicker(window.ethereum))
web3.eth.getAccounts()
  .then(accounts => web3.eth.sendTransaction({
    from: accounts[0],
    to: '0xF80fd6F5eF91230805508bB28d75248024E50F6F',
    value: web3.utils.toWei('0.003'),
  }).then(console.log))
`

export const js_ethers_unilogin = `
const UniLogin = require('@unilogin/provider')
const {providers, utils} = require('ethers')

const provider = new providers.Web3Provider(UniLogin.create('mainnet'))
const signer = provider.getSigner()
signer.sendTransaction({
  to: '0xF80fd6F5eF91230805508bB28d75248024E50F6F',
  value: utils.parseEther('0.003'),
}).then(console.log)
`

export const js_web3_unilogin = `
const UniLogin = require('@unilogin/provider')
const web3 = require('web3')

const web3 = new Web3(UniLogin.create('mainnet'))
web3.eth.getAccounts()
  .then(accounts => web3.eth.sendTransaction({
    from: accounts[0],
    to: '0xF80fd6F5eF91230805508bB28d75248024E50F6F',
    value: web3.utils.toWei('0.003'),
  }).then(console.log))
`

