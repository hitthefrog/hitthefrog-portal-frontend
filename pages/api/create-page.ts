import { Book } from '@/lib/types'

const { Client } = require('@notionhq/client')

const notion = new Client({
  auth: process.env.NOTION_API_KEY
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` })
  }
  try {
    const { title, authors, thumbnail, comment, createdBy }: Book = JSON.parse(
      req.body
    )
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID
      },
      cover: {
        type: 'external',
        external: {
          url: thumbnail
        }
      },
      properties: {
        Title: {
          title: [
            {
              text: {
                content: title
              }
            }
          ]
        },
        Author: {
          multi_select: authors.map((name) => ({ name }))
        },
        CreatedBy: {
          select: {
            name: createdBy
          }
        },
        Comment: {
          rich_text: [
            {
              text: {
                content: comment
              }
            }
          ]
        },
        Public: {
          type: 'checkbox',
          checkbox: true
        }
      }
    })
    res.status(201).json({ msg: 'Success' })
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' })
  }
}
