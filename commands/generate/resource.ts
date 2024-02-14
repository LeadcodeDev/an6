import { args, BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

const STUBS_ROOT = new URL('./stubs', import.meta.url)

export default class GenerateModuleBase extends BaseCommand {
  static commandName = 'generate:resource'
  static aliases = ['g:resource']
  static description = 'Generate new resource'

  static options: CommandOptions = {}

  @args.string()
  declare name: string

  async run() {
    let domain: string
    const domains = await readdir(join(process.cwd(), 'domains'))

    if (!domains.length) {
      domain = await this.prompt.ask('Enter the domain name', {
        validate(value: string) {
          return value.length > 0
        },
      })
    } else {
      domain = await this.prompt.choice('Select existing domain', domains)
    }

    const codemods = await this.createCodemods()
    await Promise.all([
      codemods.makeUsingStub(STUBS_ROOT.pathname, 'model.stub', {
        name: this.name,
        domain: domain,
      }),
      codemods.makeUsingStub(STUBS_ROOT.pathname, 'validator.stub', {
        name: this.name,
        domain: domain,
      }),
      codemods.makeUsingStub(STUBS_ROOT.pathname, 'policy.stub', {
        name: this.name,
        domain: domain,
      }),
      codemods.makeUsingStub(STUBS_ROOT.pathname, 'service.stub', {
        name: this.name,
        domain: domain,
      }),
    ])
  }
}
