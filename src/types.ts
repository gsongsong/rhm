export type Change = {
  index: number;
  description: string;
  beforeChange: string;
  afterChange: string;
  customerIndexList: number[];
  lineupIndex: number;
}

export type Enum = {
  index: number;
  name: string;
};

export type Pkg = {
  index: number;
  name: string;
  lineupIndex: number;
};

export type Release = {
  index: number;
  pkgIndex: number;
  customerIndexList: number[];
}

export type Version = {
  index: number;
  name: string;
  indexPrev: number;
  changeList: Change[];
  releaseList: Release[];
};

export type OldChange = {
  changeIndex: number;
  description: string;
  beforeChange: string;
  afterChange: string;
  targetCustomerList: Array<{ customerIndex: number }>;
};

export type OldCustomer = {
  customerIndex: number;
  customerName: string;
};

export type OldRelease = {
  releaseIndex: number;
  pkgIndex: number;
  targetCustomerList: Array<{ customerIndex: number }>;
};

export type OldVersion = {
  versionIndex: number;
  versionName: string;
  versionIndexPrev: number;
  changeList: OldChange[];
  releaseList: OldRelease[];
};

export type OldPkg = {
  pkgIndex: number;
  pkgName: string;
};
