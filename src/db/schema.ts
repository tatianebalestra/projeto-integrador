import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const patients = sqliteTable('patients', {
  id: integer('id').primaryKey({autoIncrement: true}),
  name: text("name").notNull(),
  taxId: text("taxId").notNull().unique(),
  birthDate: text("birthDate").notNull(),
  summaryReport: text("summaryReport").notNull()
});

export const employee = sqliteTable('employee', {
  id: integer('id').primaryKey({autoIncrement: true}),
  name: text("name").notNull(),
  taxId: text("taxId").notNull().unique(),
  birthDate: text("birthDate").notNull(), 
})

export const report = sqliteTable('report', {
  id: integer('id').primaryKey({autoIncrement: true}), 
  title: text("title").notNull(),
  report: text("report").notNull(),
  dateCreated: text("dateCreated").notNull(),
  dateEdited: text("dateEdited"),
  patientId: integer('id').references(() => patients.id).notNull(),
  employeeId: integer('id').references(() => employee.id).notNull()
})