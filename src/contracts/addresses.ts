import { ChainId } from '@usedapp/core'

interface Addresses {
  CLAM: string
  WETH: string
  OTTO: string
  PORTAL_CREATOR: string
  SUMMONER: string
  OTTO_ITEM: string
}

export const POLYGON_MAINNET: Addresses = {
  CLAM: '0xC250e9987A032ACAC293d838726C511E6E1C029d',
  WETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  OTTO: '0x6e8A9Cb6B1E73e9fCe3FD3c68b5af9728F708eB7',
  PORTAL_CREATOR: '0xCb8Ba0c08e746CA6fa79fe535580f89A8eC082C2',
  SUMMONER: '0x0aF165bFA71B9140Eaf414Ef90b3a4a8c62E8860',
  OTTO_ITEM: '0xBd29ee9a2cE0C794Eaf09BEdCa9387F4566377D5',
}

export const POLYGON_MUMBAI: Addresses = {
  CLAM: '0x08A83ee393ac296326196a8F2dacbeD91cd84762',
  WETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  OTTO: '0x6223528ba02f4466aF9be9008CaDAa1e190ca1ad',
  PORTAL_CREATOR: '0x110B4Ab53bC0c5f3E20F4b6Fd9876624b4862c11',
  SUMMONER: '0x421cbaD13d92bB1f5CE69D33232a4F42303bEc75',
  OTTO_ITEM: '0x27DFfd9016829885712810671db56941B97f6C46',
}

export const LOCALHOST: Addresses = {
  CLAM: '0xC250e9987A032ACAC293d838726C511E6E1C029d',
  WETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  OTTO: '0x6e8A9Cb6B1E73e9fCe3FD3c68b5af9728F708eB7',
  PORTAL_CREATOR: '0xCb8Ba0c08e746CA6fa79fe535580f89A8eC082C2',
  SUMMONER: '0x0aF165bFA71B9140Eaf414Ef90b3a4a8c62E8860',
  OTTO_ITEM: '0xBd29ee9a2cE0C794Eaf09BEdCa9387F4566377D5',
}
