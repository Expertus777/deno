/*
 * Example #3. Reading the files. Shows that Deno against WEB API also has his own API. For file system, etc.
 * In this programme we are get the array of file names from .idea/ folder,
 * and open them in loop, print to stdout and close it
 */

import {walkSync} from 'https://deno.land/std/fs/mod.ts'

for (const filename of walkSync('.')) {
    if(filename.path.includes('.idea/') && filename.isFile === true) {
        console.log('Filename path: ', filename.path);
        console.log('');
        const file = await Deno.open(filename.path);
        await Deno.copy(file, Deno.stdout);
        file.close();
        console.log('');
        console.log('');
        console.log('');
    }
}
 
