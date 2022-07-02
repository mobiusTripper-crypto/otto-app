/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ClamCirculatingSupplyInterface extends utils.Interface {
  functions: {
    "CLAM()": FunctionFragment;
    "CLAMCirculatingSupply()": FunctionFragment;
    "getNonCirculatingCLAM()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "nonCirculatingCLAMAddresses(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "setNonCirculatingCLAMAddresses(address[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CLAM"
      | "CLAMCirculatingSupply"
      | "getNonCirculatingCLAM"
      | "initialize"
      | "isInitialized"
      | "nonCirculatingCLAMAddresses"
      | "owner"
      | "setNonCirculatingCLAMAddresses"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "CLAM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CLAMCirculatingSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNonCirculatingCLAM",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nonCirculatingCLAMAddresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setNonCirculatingCLAMAddresses",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "CLAM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CLAMCirculatingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNonCirculatingCLAM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonCirculatingCLAMAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setNonCirculatingCLAMAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ClamCirculatingSupply extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClamCirculatingSupplyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CLAM(overrides?: CallOverrides): Promise<[string]>;

    CLAMCirculatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNonCirculatingCLAM(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _clam: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    nonCirculatingCLAMAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setNonCirculatingCLAMAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CLAM(overrides?: CallOverrides): Promise<string>;

  CLAMCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

  getNonCirculatingCLAM(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _clam: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  nonCirculatingCLAMAddresses(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setNonCirculatingCLAMAddresses(
    _nonCirculatingAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CLAM(overrides?: CallOverrides): Promise<string>;

    CLAMCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    getNonCirculatingCLAM(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_clam: string, overrides?: CallOverrides): Promise<boolean>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    nonCirculatingCLAMAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setNonCirculatingCLAMAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    CLAM(overrides?: CallOverrides): Promise<BigNumber>;

    CLAMCirculatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    getNonCirculatingCLAM(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _clam: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    nonCirculatingCLAMAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setNonCirculatingCLAMAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CLAM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CLAMCirculatingSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonCirculatingCLAM(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _clam: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonCirculatingCLAMAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setNonCirculatingCLAMAddresses(
      _nonCirculatingAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
