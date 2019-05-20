import getInstallCmd from './getInstallCmd';

/**
 * 获取安装依赖的命令行
 *
 * @param deps 依赖
 * @param isDev 是否是开发依赖
 */
export default function getInstallDepsCmd(
  deps: string[],
  isDev: boolean = false,
) {
  const cmd = getInstallCmd();

  if (cmd === 'npm') {
    return `npm add ${deps.join(' ')} ${isDev ? '--save' : '--save-dev'}`;
  }
  return `yarn add ${deps.join(' ')}${isDev ? ' --dev' : ''}`;
}
