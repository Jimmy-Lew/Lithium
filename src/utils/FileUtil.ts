import * as fsp from 'fs/promises';
import * as path from 'path';
import { Lithium } from '../types';

export class FileUtils {
    static async readFiles (dirPath: string, success: (module: any, fullPath: string) => any, error: (error: unknown) => void, isRecursive = true) : Promise<any>{
        const files = await fsp.readdir(dirPath);
        const filesObject : Lithium.FileObject = {}
        return Promise.all(files.map(async file => {
            const fullPath = path.resolve(dirPath, file)

            if (file.match(/\.(ts|json|js)$/)) {
                try {
                    const modules = await import(fullPath)
                    const required = modules.default
                    if (success) await success(required, path.join(dirPath, file))
                    filesObject[file] = required
                    return required
                } 
                catch (e) { error(e) }
            } 

            else if (isRecursive) {
                const isDirectory = await fsp.stat(fullPath).then(f => f.isDirectory())
                if (isDirectory) return this.readFiles(path.join(dirPath, file), success, error)
            }
        }))
        .then(() => filesObject)
        .catch(console.error)
    }
}