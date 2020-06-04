/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Props} from '@docusaurus/types';

export type PluginOptions = {
  fromExtensions: string[];
  toExtensions: string[];
  redirects: RedirectOption[];
  createRedirects?: CreateRedirectsFnOption;
};

// For a given existing route path,
// return all the paths from which we should redirect from
export type CreateRedirectsFnOption = (
  path: string,
) => string[] | string | null | undefined;

export type RedirectOption = {
  to: string;
  from: string | string[];
};

export type UserPluginOptions = Partial<PluginOptions>;

// The minimal infos the plugin needs to work
export type PluginContext = Pick<
  Props,
  'routesPaths' | 'outDir' | 'baseUrl'
> & {
  options: PluginOptions;
};

// In-memory representation of redirects we want: easier to test
// /!\ easy to be confused: "fromRoutePath" is the new page we should create,
// that redirects to "toRoutePath" the existing Docusaurus page
export type RedirectMetadata = {
  fromRoutePath: string;
  toRoutePath: string;
};
