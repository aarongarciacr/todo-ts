export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: "Todos", // Shows "Todos" on the button
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "Active", // Shows "Active" on the button
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "Completed", // Shows "Completed" on the button
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
} as const;
