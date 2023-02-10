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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface OttoHellDiceRollerInterface extends utils.Interface {
  functions: {
    "CLAM()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "DICE_ITEM_ID()": FunctionFragment;
    "DICE_PRODUCT_ID()": FunctionFragment;
    "ITEM()": FunctionFragment;
    "MANAGER_ROLE()": FunctionFragment;
    "OTTO()": FunctionFragment;
    "PAYMENT_KEY()": FunctionFragment;
    "STORE()": FunctionFragment;
    "applicable(address,uint256,uint256,bytes)": FunctionFragment;
    "applyTo(address,uint256,uint256,bytes)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address,address,address,address,uint256,uint256)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "roll(uint256,uint256)": FunctionFragment;
    "rollWithMatic(uint256,uint256)": FunctionFragment;
    "shipNoChainlink(address,uint256,address,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CLAM"
      | "DEFAULT_ADMIN_ROLE"
      | "DICE_ITEM_ID"
      | "DICE_PRODUCT_ID"
      | "ITEM"
      | "MANAGER_ROLE"
      | "OTTO"
      | "PAYMENT_KEY"
      | "STORE"
      | "applicable"
      | "applyTo"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "proxiableUUID"
      | "renounceRole"
      | "revokeRole"
      | "roll"
      | "rollWithMatic"
      | "shipNoChainlink"
      | "supportsInterface"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "CLAM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DICE_ITEM_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DICE_PRODUCT_ID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ITEM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MANAGER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "OTTO", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PAYMENT_KEY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "STORE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "applicable",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "applyTo",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "roll",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rollWithMatic",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shipNoChainlink",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "CLAM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DICE_ITEM_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DICE_PRODUCT_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ITEM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MANAGER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OTTO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PAYMENT_KEY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "STORE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "applicable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "applyTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rollWithMatic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shipNoChainlink",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "RollDice(address,uint256,uint256)": EventFragment;
    "ShipOrder(bytes32,address)": EventFragment;
    "ShipOrderNoChainLink(address,uint256,address,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RollDice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShipOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShipOrderNoChainLink"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface RollDiceEventObject {
  roller: string;
  ottoId: BigNumber;
  amount: BigNumber;
}
export type RollDiceEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  RollDiceEventObject
>;

export type RollDiceEventFilter = TypedEventFilter<RollDiceEvent>;

export interface ShipOrderEventObject {
  orderId: string;
  buyer: string;
}
export type ShipOrderEvent = TypedEvent<[string, string], ShipOrderEventObject>;

export type ShipOrderEventFilter = TypedEventFilter<ShipOrderEvent>;

export interface ShipOrderNoChainLinkEventObject {
  from: string;
  productId: BigNumber;
  to: string;
  amount: BigNumber;
}
export type ShipOrderNoChainLinkEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  ShipOrderNoChainLinkEventObject
>;

export type ShipOrderNoChainLinkEventFilter =
  TypedEventFilter<ShipOrderNoChainLinkEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface OttoHellDiceRoller extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OttoHellDiceRollerInterface;

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

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DICE_ITEM_ID(overrides?: CallOverrides): Promise<[BigNumber]>;

    DICE_PRODUCT_ID(overrides?: CallOverrides): Promise<[BigNumber]>;

    ITEM(overrides?: CallOverrides): Promise<[string]>;

    MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    OTTO(overrides?: CallOverrides): Promise<[string]>;

    PAYMENT_KEY(overrides?: CallOverrides): Promise<[string]>;

    STORE(overrides?: CallOverrides): Promise<[string]>;

    applicable(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    applyTo(
      ottoContract_: string,
      ottoId_: BigNumberish,
      itemId_: BigNumberish,
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      clam_: string,
      otto_: string,
      item_: string,
      store_: string,
      diceProductId_: BigNumberish,
      diceItemId_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    roll(
      ottoId_: BigNumberish,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rollWithMatic(
      ottoId_: BigNumberish,
      amount_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shipNoChainlink(
      from_: string,
      fromProductId_: BigNumberish,
      to_: string,
      productAmount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CLAM(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  DICE_ITEM_ID(overrides?: CallOverrides): Promise<BigNumber>;

  DICE_PRODUCT_ID(overrides?: CallOverrides): Promise<BigNumber>;

  ITEM(overrides?: CallOverrides): Promise<string>;

  MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;

  OTTO(overrides?: CallOverrides): Promise<string>;

  PAYMENT_KEY(overrides?: CallOverrides): Promise<string>;

  STORE(overrides?: CallOverrides): Promise<string>;

  applicable(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  applyTo(
    ottoContract_: string,
    ottoId_: BigNumberish,
    itemId_: BigNumberish,
    data_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    clam_: string,
    otto_: string,
    item_: string,
    store_: string,
    diceProductId_: BigNumberish,
    diceItemId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  roll(
    ottoId_: BigNumberish,
    amount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rollWithMatic(
    ottoId_: BigNumberish,
    amount_: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shipNoChainlink(
    from_: string,
    fromProductId_: BigNumberish,
    to_: string,
    productAmount_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CLAM(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    DICE_ITEM_ID(overrides?: CallOverrides): Promise<BigNumber>;

    DICE_PRODUCT_ID(overrides?: CallOverrides): Promise<BigNumber>;

    ITEM(overrides?: CallOverrides): Promise<string>;

    MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;

    OTTO(overrides?: CallOverrides): Promise<string>;

    PAYMENT_KEY(overrides?: CallOverrides): Promise<string>;

    STORE(overrides?: CallOverrides): Promise<string>;

    applicable(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    applyTo(
      ottoContract_: string,
      ottoId_: BigNumberish,
      itemId_: BigNumberish,
      data_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      clam_: string,
      otto_: string,
      item_: string,
      store_: string,
      diceProductId_: BigNumberish,
      diceItemId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    roll(
      ottoId_: BigNumberish,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    rollWithMatic(
      ottoId_: BigNumberish,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    shipNoChainlink(
      from_: string,
      fromProductId_: BigNumberish,
      to_: string,
      productAmount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "RollDice(address,uint256,uint256)"(
      roller?: string | null,
      ottoId?: BigNumberish | null,
      amount?: null
    ): RollDiceEventFilter;
    RollDice(
      roller?: string | null,
      ottoId?: BigNumberish | null,
      amount?: null
    ): RollDiceEventFilter;

    "ShipOrder(bytes32,address)"(
      orderId?: BytesLike | null,
      buyer?: string | null
    ): ShipOrderEventFilter;
    ShipOrder(
      orderId?: BytesLike | null,
      buyer?: string | null
    ): ShipOrderEventFilter;

    "ShipOrderNoChainLink(address,uint256,address,uint256)"(
      from?: string | null,
      productId?: BigNumberish | null,
      to?: string | null,
      amount?: null
    ): ShipOrderNoChainLinkEventFilter;
    ShipOrderNoChainLink(
      from?: string | null,
      productId?: BigNumberish | null,
      to?: string | null,
      amount?: null
    ): ShipOrderNoChainLinkEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    CLAM(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DICE_ITEM_ID(overrides?: CallOverrides): Promise<BigNumber>;

    DICE_PRODUCT_ID(overrides?: CallOverrides): Promise<BigNumber>;

    ITEM(overrides?: CallOverrides): Promise<BigNumber>;

    MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    OTTO(overrides?: CallOverrides): Promise<BigNumber>;

    PAYMENT_KEY(overrides?: CallOverrides): Promise<BigNumber>;

    STORE(overrides?: CallOverrides): Promise<BigNumber>;

    applicable(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    applyTo(
      ottoContract_: string,
      ottoId_: BigNumberish,
      itemId_: BigNumberish,
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      clam_: string,
      otto_: string,
      item_: string,
      store_: string,
      diceProductId_: BigNumberish,
      diceItemId_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    roll(
      ottoId_: BigNumberish,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rollWithMatic(
      ottoId_: BigNumberish,
      amount_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shipNoChainlink(
      from_: string,
      fromProductId_: BigNumberish,
      to_: string,
      productAmount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CLAM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DICE_ITEM_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DICE_PRODUCT_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ITEM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MANAGER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OTTO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PAYMENT_KEY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STORE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    applicable(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    applyTo(
      ottoContract_: string,
      ottoId_: BigNumberish,
      itemId_: BigNumberish,
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      clam_: string,
      otto_: string,
      item_: string,
      store_: string,
      diceProductId_: BigNumberish,
      diceItemId_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    roll(
      ottoId_: BigNumberish,
      amount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rollWithMatic(
      ottoId_: BigNumberish,
      amount_: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shipNoChainlink(
      from_: string,
      fromProductId_: BigNumberish,
      to_: string,
      productAmount_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
