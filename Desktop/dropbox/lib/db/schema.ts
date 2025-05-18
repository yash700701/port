import {pgTable, text, uuid, integer, boolean, timestamp} from 'drizzle-orm/pg-core'
import {relations} from 'drizzle-orm'

export const files = pgTable("files", {
    id: uuid("id").defaultRandom().primaryKey(),

    name: text("name").notNull(), // name of file
    path: text("path").notNull(), // path of file eg /folder/images/abc.jpg
    size: integer("size").notNull(),
    type: text("type").notNull(), // folder or file or jpg etc

    fileUrl: text("fileUrl").notNull(),
    thumbnailUrl: text("thumbnailUrl"),

    userId: text("userId").notNull(),
    parentId: uuid("parentId"), // parent folder if (null for root item)

    idFolder: boolean("idFolder").default(false).notNull(),
    isStarred: boolean("isStarred").default(false).notNull(),
    isTrashed:  boolean("isTrashed").default(false).notNull(),

    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),

})

export const filesRelations = relations(files, ({ one, many }) => ({
  parent: one(files, {
    fields: [files.parentId], 
    references: [files.id],
  }),

  children: many(files),
}));

export const File = typeof files.$inferSelect // crete type named File
export const NewFile = typeof files.$inferInsert // crete type named File