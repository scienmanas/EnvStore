import {
  uuid,
  varchar,
  text,
  pgTable,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// User schema
export const user = pgTable("user", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`)
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  flag: varchar("flag", { length: 255 }).default("good").notNull(),
  hits: integer("hits").default(0).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export const envData = pgTable("env_data", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  user_id: uuid("user_id")
    .references(() => user.id)
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  env_data: text("env_data").notNull(),
  project_secret: varchar("project_secret", { length: 512 }).notNull(),
  hits: integer("hits").default(0).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
  last_accessed_at: timestamp("last_accessed_at"),
});
