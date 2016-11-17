import {exec} from './exec';

export default function startServer() {
    console.log('服务开启: '.cyan + 'ABC'.green);
    return exec(`npm run start`)

        .then(() => console.log('服务开启完成: '.cyan + 'ABC'.green));
}

