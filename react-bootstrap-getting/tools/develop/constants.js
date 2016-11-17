import path from 'path';
import {pathConfig ,buildConfig} from '../../config/config.path'
export const repoRoot = path.resolve(__dirname, '../../');

export const srcRoot = path.join(repoRoot, 'src/');
export const distRoot = path.join(repoRoot, 'lib/dist/');
export const libRoot = path.join(repoRoot, 'lib/lib/');
export const esRoot = path.join(repoRoot, 'lib/es/');
export const bowerRoot = path.join(repoRoot, 'lib/amd/');
export const docsRoot = path.join(repoRoot, 'lib/docs-built/');

export const vendersRoot = pathConfig.buildPath;
export const publicRoot = buildConfig.buildPath;
