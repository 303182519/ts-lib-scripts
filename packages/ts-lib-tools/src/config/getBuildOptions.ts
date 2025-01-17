/* eslint-disable import/prefer-default-export */
import { getLibraryName } from '../utils';
import * as paths from './paths';

/**
 * 获取完整的构建配置
 *
 * @param buildOptions
 */
export function getBuildOptions(buildOptions: BuildOptions) {
  const entry = buildOptions.entry || paths.entry;
  const umdname = buildOptions.umdname || getLibraryName();

  return {
    entry,
    umdname,
    target: buildOptions.target,
    format: buildOptions.format,
    outDir: paths.resolveRoot(buildOptions.outDir),
    skipTsc: buildOptions.skipTsc,
    simple: buildOptions.simple,
  };
}
