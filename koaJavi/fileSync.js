const fs = require('fs-promise');
const path = require('path');
async function rmDirRecursive(dir) {
    const stat = await fs.stat(dir);
    if (stat.isFile()) {
        await fs.unlink(dir);
    } else if (stat.isDirectory()) {
        const files = await fs.readdir(dir);
        for (let i = 0, length = files.length; i < length; i++) {
            const statFile = await fs.stat(path.join(dir, files[i]));
            if (statFile.isFile()) {
                await fs.unlink(path.join(dir, files[i]));
            } else {
                rmdirRecursive(path.join(dir, files[i]));
            }
        }
        await fs.rmdir(dir);
    }
}
async function myScript() {
    const pathFolder = './myfolder';
    const exist = await fs.exists(pathFolder);
    if (exist) {
        console.log('Removing folder');
        rmDirRecursive(pathFolder);
    }
    await fs.mkdir(pathFolder);
    await fs.writeFile(`${pathFolder}/example.txt`, 'Hola que tal estas');
    const content = await fs.readFile(`${pathFolder}/example.txt`);
    console.log('Content', content.toString('utf8'));
}
myScript().then(() => console.log('Success!!'), (err) => console.error('Error', err));