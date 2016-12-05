import path from 'path';

export const repoRoot = path.resolve(__dirname, '../');

export const srcRoot = path.join(repoRoot, 'servers/');

export const distRoot = path.join(repoRoot, 'backend-server/dist/');
export const libRoot = path.join(repoRoot, 'backend-server/lib/');
export const esRoot = path.join(repoRoot, 'backend-server/es/');
export const bowerRoot = path.join(repoRoot, 'backend-server/amd/');

export const logServerEntryS6 = path.join(repoRoot, 'servers/abc-core-services/log-service/entry.js');
export const userServerEntryES6 = path.join(repoRoot, 'servers/abc-core-services/user-service/entry.js');
export const authenticationServerEntryES6 = path.join(repoRoot, 'servers/abc-core-services/authentication-service/entry.js');
export const webServerProxyEntryES6 = path.join(repoRoot, 'servers/abc-core-services/web-server-proxy/entry.js');

export const servicepfx= path.join(repoRoot, 'resource/certs/server.pfx');