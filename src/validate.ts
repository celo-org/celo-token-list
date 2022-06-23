import { schema } from '@uniswap/token-lists'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'

const CELO_TOKEN_LIST_URL = 'https://raw.githubusercontent.com/celo-org/celo-token-list/main/celo.tokenlist.json'

async function validate() {
    const ajv = new Ajv({ allErrors: true, verbose: true })
    addFormats(ajv)
    const validator = ajv.compile(schema);

        const response = await fetch(CELO_TOKEN_LIST_URL)
        const data = await response.json()
        const valid = validator(data)
        if (valid) {
            return;
        }
        if (validator.errors) {
            throw validator.errors.map(error => {
                delete error.data
                return error
            })
        }
}

validate()
    .then(() => {console.log('\nValid list!\n')})
    .catch(console.error)
