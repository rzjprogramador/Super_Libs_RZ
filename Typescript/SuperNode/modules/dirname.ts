/* dirname */

import path from "./master_path/path.ts"

const _dirname = path.dirname(path.fromFileUrl(import.meta.url))

export { _dirname }