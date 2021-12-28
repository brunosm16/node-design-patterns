const builtInRequire = require

const fs = builtInRequire('fs')

function loadModule(path, module, require) {
    const readFsSync = `( function (module, exports, require) {
        ${fs.readFileSync(path, 'utf-8')}
    }(module, module.exports, require))`

    eval(readFsSync)
}

require = function require(moduleName) {
    console.log(`loading module : ${moduleName}`)

    const id = require.resolve(moduleName)

    const existingModule = require.cache[id]

    // module already exists
    if (existingModule) {
        return existingModule.exports
    }

    const module = {
        exports: {},
        id
    }

    require.cache[id] = module

    loadModule(id, module, require)

    return module.exports
}

// initialize cache object
require.cache = {}

// custom require uses builtInRequire resolve
require.resolve = (moduleName) => {
    return builtInRequire.resolve(moduleName)
}

require(process.argv[2])