export const ROLES = [
  'cashier',
  'manager',
  'cook',
  'supervisor',
  'admin',
  'boss',
] as const

export type Role = typeof ROLES[number]
