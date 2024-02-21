import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'news'

  async up() {
    this.schema.createTable(this.tableName, (table) => {

      table.increments('id')
      table.string('title')
      table.string('description')
      table.jsonb('body')
      table.json('thumbnail')
      table.enum('state', ['EDITIONS'])
      table.timestamp('published_at').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}