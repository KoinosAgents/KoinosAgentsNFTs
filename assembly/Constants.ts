import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "KoinosAgents";
  export const SYMBOL: string = "AGNT";
  export const MINT_PRICE: u64 = 868500000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 10000;
  export const URI: string = "https://gateway.pinata.cloud/ipfs/QmQ7HBPQvWWJ5iZrtGkgRSnRQWDbnVS56HXsivH5hKcuNz";
  export const OWNER: Uint8Array = Base58.decode("1E13mrsSJW4LAHCHavS8CNurTM1Z9367dX");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1F9gLGQvyjz7X3JTWnWPxapkMgekyxREW7");
}