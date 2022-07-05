import { schema } from '@uniswap/token-lists'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import celoTokenList from '../celo.tokenlist.json'

async function validate() {
    const ajv = new Ajv({ allErrors: true, verbose: true })
    addFormats(ajv)
    const validator = ajv.compile(schema);
    const valid = validator(celoTokenList)
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
